import { GoogleGenerativeAI } from '@google/generative-ai';
import { S3Client, HeadObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { fromEnv } from '@aws-sdk/credential-providers';
import mammoth from 'mammoth'; // DOCX parser
import { Readable } from 'stream'; // Stream utility
// import pdfParse from 'pdf-parse'; // PDF parser

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Initialize AWS S3
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: fromEnv(),  // Automatically uses credentials from environment variables
});

const streamToString = (stream) => {
  return new Promise((resolve, reject) => {
    let data = '';
    stream.on('data', chunk => {
      data += chunk;
    });
    stream.on('end', () => {
      resolve(data);
    });
    stream.on('error', (err) => {
      reject(err);
    });
  });
};


const readFileContent = async (fileUrl) => {
  try {
    const fileKey = new URL(fileUrl).pathname.split('/').pop();

    if (!fileKey) {
      throw new Error('Invalid file URL');
    }

    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileKey,
    };

    // Fetch the file from S3
    const file = await s3.send(new GetObjectCommand(params));

    // Convert the Body (stream) into a string
    const fileContent = await streamToString(file.Body);
    console.log('File content:', fileContent); // Log the content as a string

    return fileContent; // Return the string content
  } catch (error) {
    console.error('Error reading file content:', error);
    throw new Error(`Failed to read file content: ${error.message}`);
  }
};


// Function to generate summary using Gemini API
export const generateSummary = async (fileUrl) => {
  try {
    // Step 1: Read the file content from S3
    let fileContent = await readFileContent(fileUrl);

    console.log(`fileContent : ${fileContent}`);
    if (!fileContent) {
      throw new Error('No content extracted from file');
    }

    // Step 2: Check if the file content is too long, adjust if needed
    const contentLength = fileContent.length;
    if (contentLength > 10000) {
      console.warn('File content is too long, truncating to 10000 characters');
      fileContent = fileContent.substring(0, 10000); // Truncate to 10000 characters
    }

    // Step 3: Create the prompt for the Gemini API
    const prompt = `Summarize the following content:\n\n${fileContent}`;
    console.log('Prompt:', prompt); // Log the prompt for debugging
  
    // Step 4: Call the Gemini API to generate the summary
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
    const result = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const data = await result.json();
    console.log(data);

    if (!data || !data.candidates || data.candidates.length === 0) {
      throw new Error('Empty response from Gemini API');
    }

    // Step 5: Return the summary
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error generating summary:', error);
    throw new Error(`Failed to generate summary: ${error.message}`);
  }
};

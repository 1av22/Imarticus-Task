import AWS from 'aws-sdk';
import FileMetadata from '../models/FileMetadata.js';
import FileSummary from '../models/FileSummary.js';
import { generateSummary } from '../services/geminiService.js'; // Assuming you have a Gemini service for summary generation

// Set up AWS S3 with credentials and region from environment variables
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Controller to handle file upload and summarization
const uploadFile = async (req, res) => {
  const file = req.file; // Extract the file from the request

  // Check if the file is uploaded
  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Set up S3 upload parameters
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${Date.now()}-${file.originalname}`, // Generate a unique file key by appending timestamp to the original filename
    Body: file.buffer, // The file content itself (stored in memory as a buffer)
    ContentType: file.mimetype, // Set the correct MIME type
  };

  try {
    // Upload file to S3
    const s3Result = await s3.upload(params).promise();

    // Create file metadata document
    const fileMetadata = new FileMetadata({
      name: file.originalname,
      url: s3Result.Location, // The URL of the uploaded file in S3
      size: file.size, // File size
      type: file.mimetype, // MIME type
      uploadedAt: Date.now(), // Timestamp of upload
    });

    // Save the file metadata to MongoDB
    await fileMetadata.save();

    // Generate the summary using the Gemini API
    const summaryText = await generateSummary(s3Result.Location); // Pass the S3 file URL to the summarizer
    const fileSummary = new FileSummary({
      file: fileMetadata._id, // Link the summary to the uploaded file
      summaryText,
      createdAt: Date.now(), // Timestamp for the summary
    });

    // Save the summary to MongoDB
    await fileSummary.save();

    // Link the summary in the file metadata
    fileMetadata.summary = fileSummary._id;
    await fileMetadata.save();

    // Send the response with file metadata and summary details
    res.status(200).json({
      message: 'File uploaded and summarized successfully',
      fileMetadata,
    });
  } catch (error) {
    console.error('Error uploading file:', error); // Log the error
    res.status(500).json({
      error: 'Failed to upload file', // Generic error message
      details: error.message, // Detailed error message for debugging
    });
  }
};

export { uploadFile };

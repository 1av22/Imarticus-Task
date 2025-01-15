import FileMetadata from '../models/FileMetadata.js'; // Import the file metadata model
import FileSummary from '../models/FileSummary.js'; // Import the file summary model

// Controller method to get the summary of a file
export const getFileSummary = async (req, res) => {
  const fileId = req.params.fileId;

  try {
    // Find the file metadata by file ID and populate the summary reference
    const fileMetadata = await FileMetadata.findById(fileId).populate('summary');
    
    if (!fileMetadata) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Get the summary from the populated file metadata
    const fileSummary = fileMetadata.summary;
    
    res.status(200).json({
      summaryText: fileSummary.summaryText, // Send the summary text
    });
  } catch (error) {
    console.error('Error fetching file summary:', error);
    res.status(500).json({ error: 'Error fetching summary', details: error.message });
  }
};
// Controller method to get all file metadata
export const getAllFiles = async (req, res) => {
  try {
    // Find all file metadata
    const files = await FileMetadata.find();

    res.status(200).json(files);
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).json({ error: 'Error fetching files', details: error.message });
  }
};
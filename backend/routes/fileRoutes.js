import express from 'express';
import { getFileSummary } from '../controllers/fileController.js'; // Import the controller method
import { isAuthenticated } from '../middleware/authMiddleware.js';
import { getAllFiles } from '../controllers/fileController.js'; // Import the controller method

const router = express.Router();

router.use(isAuthenticated); // Protect all routes in this file
// Route to get the summary of a file
router.get('/summary/:fileId', getFileSummary);

// Route to get all files
router.get('/all', getAllFiles);

export default router;

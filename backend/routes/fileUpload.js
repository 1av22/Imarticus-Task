import express from 'express';
import multer from 'multer';
import { uploadFile } from '../controllers/fileUploadController.js'; // Import the file upload handler
import { isAuthenticated } from '../middleware/authMiddleware.js'; // Import the authentication middleware
import User from '../models/user.js';  // Import the compiled User model
import jwt from 'jsonwebtoken';

const router = express.Router();

router.use(isAuthenticated); // Protect all routes in this file

const storage = multer.memoryStorage(); // This will store the file in memory
const upload = multer({ storage: storage }); // Create the multer upload middleware

// Use multer middleware for handling the file upload
router.post('/', upload.single('file'), async (req, res, next) => {
  try {
    // // Extract token from the Authorization header
    // const token = req.headers['authorization']?.split(' ')[1]; 
    // if (!token) {
    //   return res.status(403).send('No token provided');
    // }

    // // Verify the token with the secret key
    // const decoded = jwt.verify(token, 'your_secret_key'); // Use the same secret key used for signing the token

    // // Find the user by their ID from the decoded token
    // const current = await User.findById(decoded.userId);
    // if (!current) {
    //   return res.status(404).send('User not found');
    // }

    // Proceed with file upload if the user is authenticated
    uploadFile(req, res, next);

  } catch (error) {
    // Catch errors and send appropriate response
    console.error(error);
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).send('Invalid or expired token');
    }
    res.status(500).send('Internal Server Error');
  }
});

router.get('/test', (req, res) => {
  console.log('Test route working');
  res.send('Test route working');
});

export default router;

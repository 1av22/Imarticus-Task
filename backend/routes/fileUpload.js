import express from 'express';
import multer from 'multer';
import { uploadFile } from '../controllers/fileUploadController.js'; // Import the file upload handler
import { isAuthenticated } from '../middleware/authMiddleware.js'; // Import the authentication middleware
import User from '../models/user.js';  // Import the compiled User model

const router = express.Router();

router.use(isAuthenticated); // Protect all routes in this file

const storage = multer.memoryStorage(); // This will store the file in memory
const upload = multer({ storage: storage }); // Create the multer upload middleware

// Use multer middleware for handling the file upload
router.post('/', upload.single('file'), async (req, res, next) => {
  try {
    const current = await User.findOne({ sessionToken: req.cookies.token }); // Use the User model to find the user
    console.log(current);
  
    if (current && current.isAdmin) { // Check if the user is an admin
      uploadFile(req, res, next);
    } else {
      res.status(403).send('Forbidden: Admins only');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}); // 'file' is the key in the form data

router.get('/test', (req, res) => {
  console.log('Test route working');
  res.send('Test route working');
});

export default router;

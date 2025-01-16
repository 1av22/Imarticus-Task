import express from 'express';
import Course from '../models/Course.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Fetch courses and populate the modules
    const courses = await Course.find().populate('modules');  // Populate 'modules' field with actual module data
    console.log('Fetched courses:', courses);  // Log courses to check if population works
    res.json(courses);  // Return courses with populated modules
  } catch (err) {
    console.error('Error fetching courses:', err);  // Log errors if any
    res.status(500).json({ error: 'Error fetching courses', message: err.message });
  }
});

export default router;

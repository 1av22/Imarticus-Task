import express from 'express';
import jwt from 'jsonwebtoken';
import Course from '../models/Course.js';
import { isAuthenticated } from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(isAuthenticated);

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('modules');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching courses' });
  }
});

export default router;

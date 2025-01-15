import express from 'express';
import jwt from 'jsonwebtoken';
import Course from '../models/Course.js';
import Module from '../models/Module.js';
import { isAuthenticated } from '../middleware/authMiddleware.js';

const router = express.Router();

// Middleware to verify JWT and check admin
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).json({ error: 'Failed to authenticate token' });
    req.userId = decoded.id;
    req.isAdmin = decoded.isAdmin;
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (!req.isAdmin) return res.status(403).json({ error: 'Requires admin role' });
  next();
};

// Protect this route with the isAuthenticated middleware
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const courses = await Course.find().populate('modules'); // Populate modules
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching courses' });
  }
});

export default router;

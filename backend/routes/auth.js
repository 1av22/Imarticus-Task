import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error registering user' });
  }
});


// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ email: email });
      if (!user) return res.status(404).json({ error: 'User not found' });
      
      const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return res.status(401).json({ error: 'Invalid password' });

        // Generate a session token
      const sessionToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
      

        user.sessionToken = sessionToken;  // Save the session token to the user object
        await user.save();
        res.cookie('token', sessionToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 3600000 });

        res.status(200).json({ message: 'User logged in successfully' , token: sessionToken});
    } catch (err) {
        res.status(500).json({ error: `Error logging in : ${err}` });
    }
});

// Get current user
router.get('/me', async (req, res) => {
  try {
    const token = req.cookies.token;  // Get the token from cookies
    if (!token) return res.status(401).json({ error: 'No token provided, unauthorized' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json({
      id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to authenticate token' });
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Only set secure in production
    sameSite: 'strict', // Helps with cross-site cookie issues
  });
  res.status(200).json({ message: 'Logged out successfully' });
});


export default router;

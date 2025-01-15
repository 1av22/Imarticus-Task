import jwt from 'jsonwebtoken';

// Middleware to verify if the user is authenticated
export const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token; // Get the token from cookies
  if (!token) {
    return res.status(401).json({ error: 'No token provided, unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    req.isAdmin = decoded.isAdmin;
    next();
  } catch (err) {
    return res.status(500).json({ error: 'Failed to authenticate token' });
  }
};

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import courseRoutes from './routes/course.js';
import cookieParser from 'cookie-parser';
import fileRoutes from './routes/fileRoutes.js';
import fileUploadRouter from './routes/fileUpload.js'; 


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser to parse cookies

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/upload', fileUploadRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

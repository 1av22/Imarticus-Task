import mongoose from 'mongoose';
import Module from './Module.js';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  modules: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Module' }, // Referencing the Module model
  ],
});

const Course = mongoose.model('Course', courseSchema); // Registering the Course model

export default Course;

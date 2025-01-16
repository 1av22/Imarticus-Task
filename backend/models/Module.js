import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true }, // e.g., '10:23'
  url: { type: String, required: true },
});

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videos: [videoSchema],  // Array of videos inside each module
});

const Module = mongoose.model('Module', moduleSchema);  // Registering the Module model

export default Module;

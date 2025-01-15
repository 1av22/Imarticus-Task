import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true }, // Example: '10:23'
  url: { type: String, required: true },
});

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videos: [videoSchema],
});

export default mongoose.model('Module', moduleSchema);

import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  modules: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Module' }, // References Module model
  ],
});

export default mongoose.model('Course', courseSchema);

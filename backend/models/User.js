import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    sessionToken: { type: String },  // For storing session token
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }, // Mongoose automatically manages createdAt and updatedAt
  }
);

export default mongoose.model('User', userSchema);

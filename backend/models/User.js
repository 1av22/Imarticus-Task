import mongoose from 'mongoose';

// Define the schema
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

// Export the model only if it hasn't been compiled already
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

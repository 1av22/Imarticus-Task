import mongoose from 'mongoose';

const fileMetadataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    size: { type: Number, required: true },
    type: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
    summary: { type: mongoose.Schema.Types.ObjectId, ref: 'FileSummary' },
  },
  { timestamps: true }
);

const FileMetadata = mongoose.model('FileMetadata', fileMetadataSchema);
export default FileMetadata;

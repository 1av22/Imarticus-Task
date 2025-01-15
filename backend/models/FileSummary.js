import mongoose from 'mongoose';

const fileSummarySchema = new mongoose.Schema(
  {
    file: { type: mongoose.Schema.Types.ObjectId, ref: 'FileMetadata', required: true },
    summaryText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const FileSummary = mongoose.model('FileSummary', fileSummarySchema);
export default FileSummary;

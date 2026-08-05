import mongoose from 'mongoose';

const UpdateSchema = new mongoose.Schema(
  {
    type: { type: String, required: true, enum: ['news', 'event'] },
    title: { type: String, required: true },
    
    // Fields specific to events
    month: { type: String }, // e.g. "OCT"
    day: { type: String },   // e.g. "15"
    eventType: { type: String }, // e.g. "Symposium"
    
    // Optional link for both
    link: { type: String, default: '#' },
    
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Update || mongoose.model('Update', UpdateSchema);

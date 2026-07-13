import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IEnquiry extends Document {
  name: string;
  mobile: string;
  email?: string;
  programme: string;
  message?: string;
  createdAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: false },
  programme: { type: String, required: true },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

const Enquiry: Model<IEnquiry> = mongoose.models.Enquiry || mongoose.model<IEnquiry>('Enquiry', EnquirySchema);

export default Enquiry;

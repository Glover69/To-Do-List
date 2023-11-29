import { ObjectId } from "mongodb";
import mongoose, { Document, Schema } from "mongoose";

interface profile extends Document {
  image: string;
  name: string;
}

const profileSchema = new Schema<profile>(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
  
  },
  { collection: "profile" }
);

const profileModel =
  mongoose.models.profile ||
  mongoose.model<profile & Document>("profile", profileSchema);

export { profileModel };
export type { profile };

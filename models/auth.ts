import mongoose, { Document, Schema } from "mongoose";

interface auth extends Document {
  username: string;
  password: string;
  fullname: string;
}

const authSchema = new Schema<auth>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullname: { type: String, required: true },

  },
  { collection: "auth" }
);

const authModel =
  mongoose.models.auth ||
  mongoose.model<auth & Document>("auth", authSchema);

export { authModel };
export type { auth };

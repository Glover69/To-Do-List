import { ObjectId } from "mongodb";
import mongoose, { Document, Schema } from "mongoose";

interface categories extends Document {
  color: string;
  icon: string;
  colorId: number;
  iconId: number;
  categoryName: string;
  //   _id?: string | mongoose.Types.ObjectId;
}

const categoriesSchema = new Schema<categories>(
  {
    color: { type: String, required: true },
    icon: { type: String, required: true },
    categoryName: { type: String, required: true },
    colorId: { type: Number, required: false },
    iconId: { type: Number, required: false },
  },
  { collection: "categories" }
);

const categoriesModel =
  mongoose.models.categories ||
  mongoose.model<categories & Document>("categories", categoriesSchema);

export { categoriesModel };
export type { categories };

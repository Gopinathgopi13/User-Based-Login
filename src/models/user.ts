import { Hash } from "crypto";
import mongoose, { Schema, model, Document, Model } from "mongoose";

interface userDocument extends Document {
  email: string;
  name: string;
  password: string;
  role: "user" | "admin";
}

const userSchema = new Schema<userDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function(next){
  if(!this.isModified('password')) return next()

  await Hash
})
const userModel = model('User', userSchema);

export default userModel as Model<userDocument>;

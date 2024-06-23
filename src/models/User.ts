import mongoose, { Document, mongo, Schema } from "mongoose";

// Define an interface for the user
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  age?: number;
  gender?: "Male" | "Female" | "Non-binary" | "Other";
  location?: string;
  bio?: string;
  profilePicture?: string;
  interests?: string[];
  onboarded: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Create the user schema
const userSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Non-binary", "Other"],
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
    maxlength: 500,
  },
  profilePicture: {
    type: String,
  },
  interests: {
    type: [String],
  },
  onboarded: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Automatically update the `updatedAt` field on save
userSchema.pre<IUser>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

// Create and export the user model
const UserModal =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default UserModal;

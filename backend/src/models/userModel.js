import mongoose from "mongoose";

// Define schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your username"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: 6,
    },
    createData: {
      type: Object,
      default: {}, 
   required:[true],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
    minimize:false,
  }
);

// Create model
const User = mongoose.model("User", userSchema);

export default User;

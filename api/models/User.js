const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    isLoggedIn : {
      type: Boolean,
      required: true,
      default: false,
    },
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    lastName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: String,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
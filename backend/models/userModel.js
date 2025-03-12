const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  email: {
    type: String,
    required: [true, "Your email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  bookmarks: [
    {
      id: { type: Number, required: true },
      backdropPath: { type: String },
      posterPath: { type: String },
      releaseDate: { type: String, default: "" },
      title: { type: String, required: true },
      addedAt: { type: Date, default: Date.now() },
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", UserSchema);

exports.User = User;

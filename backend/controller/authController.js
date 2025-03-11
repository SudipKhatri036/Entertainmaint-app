const { User } = require("../models/userModel");
const { createSecretToken } = require("../utils.js/helper");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status().json({ success: false, message: "Missing Details" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      username,
    });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: process.env.NODE_DEVELOPMENT === "development",
    });

    res.status(201).json({
      success: true,
      message: "User signed in succesfully",
      user,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
const loginUser = async (req, res) => {};
const logoutUser = async (req, res) => {};
const forgotPassword = async (req, res) => {};

module.exports = { registerUser, loginUser, logoutUser, forgotPassword };

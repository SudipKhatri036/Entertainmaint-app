const { User } = require("../models/userModel");
const { createSecretToken } = require("../utils.js/helper");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.json({ success: false, message: "Missing Details" });
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
      httpOnly: true,
      secure: process.env.NODE_DEVELOPMENT !== "development",
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
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password or email",
      });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password or email",
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      secure: process.env.NODE_DEVELOPMENT !== "development",
    });

    res
      .status(200)
      .json({ success: true, message: "User logged in successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
const logoutUser = async (req, res) => {
  res.clearCookie("token", { httpOnly: true, secure: true });

  res.json({ status: "success", message: "User logged out successfully" });
};
const forgotPassword = async (req, res) => {};

module.exports = { registerUser, loginUser, logoutUser, forgotPassword };

const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
} = require("../controller/authController");
const { userVerification } = require("../middleware/authMiddleware");

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);
authRouter.post("/resetPassword", forgotPassword);
authRouter.get("/user", userVerification);

exports.authRouter = authRouter;

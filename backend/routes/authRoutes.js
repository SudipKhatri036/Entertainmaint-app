const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
} = require("../controller/authController");
const { userVerification } = require("../middleware/authMiddleware");

const authRouter = express.Router();

authRouter.post("/auth/register", registerUser);
authRouter.post("/auth/login", loginUser);
authRouter.post("/auth/logout", logoutUser);
authRouter.post("/auth/resetPassword", forgotPassword);
authRouter.get("/auth/user", userVerification);

exports.authRouter = authRouter;

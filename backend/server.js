const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { connectDb } = require("./config/connection");
connectDb();
const { mainRouter } = require("./routes/route");
const { listRouter } = require("./routes/listRoute");
const { queryRouter } = require("./routes/queryRoutes");
const { authRouter } = require("./routes/authRoutes");
const port = process.env.PORT || 3000;

const corsOpt = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credential: true,
};

app.use(cors(corsOpt));
app.use(cookieParser());
app.use(express.json());

app.use("/", mainRouter);
app.use("/auth", authRouter);
app.use("/", listRouter);
app.use("/", queryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

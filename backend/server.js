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
const { bookmarkRouter } = require("./routes/bookmarkRoutes");
const port = process.env.PORT || 3000;

const corsOpt = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOpt));
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/", mainRouter);
app.use("/api/v1/", authRouter);
app.use("/api/v1/", listRouter);
app.use("/api/v1/", queryRouter);
app.use("/api/v1/", bookmarkRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

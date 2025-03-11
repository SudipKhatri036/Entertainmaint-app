require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const { connectDb } = require("./config/connection");
const app = express();
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

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOpt));

app.use("/", mainRouter);
app.use("/", listRouter);
app.use("/", queryRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

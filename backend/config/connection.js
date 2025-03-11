const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected succesfully");
  } catch (error) {
    console.log(error);
  }
};

exports.connectDb = connectDb;

import mongoose from "mongoose";

const mongoURL = "mongodb://localhost:27017/TestDB";


const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("✅ Connected to MongoDB - TestDB");
  } catch (e) {
    console.error("❌ Error connecting to MongoDB:", e.message);
  }
};

export default connectToMongo;

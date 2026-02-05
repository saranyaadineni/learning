import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // 👈 REQUIRED here

const connectToDb = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      console.error("❌ MONGO_URI is undefined. Check your .env file.");
      process.exit(1);
    }

    await mongoose.connect(mongoURI);

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ Error in connected db:", error.message);
    process.exit(1);
  }
};

export default connectToDb;

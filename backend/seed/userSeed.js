import mongoose from "mongoose";
import userModel from "../models/user.model.js";
import connectToDb from "../config/db.config.js";
import dotenv from "dotenv";

dotenv.config();

const seedUser = async () => {
  await connectToDb();

  try {
    const userEmail = "user@lms.com";
    const userPassword = "user123";

    console.log(`Attempting to seed standard user with email: ${userEmail}`);

    let user = await userModel.findOne({ email: userEmail });

    if (user) {
      console.log("Existing user found by email. Deleting...");
      await userModel.deleteOne({ email: userEmail });
      console.log("Existing user deleted by email.");
    }

    // Check for username "user"
    const username = "user";
    user = await userModel.findOne({ username: username });
    if (user) {
      console.log("Existing user found by username. Deleting...");
      await userModel.deleteOne({ username: username });
      console.log("Existing user deleted by username.");
    }

    console.log("Creating new standard user...");
    // Passing plain password, assuming userModel pre-save hook handles hashing
    user = await userModel.create({
      fullName: "Standard User",
      username: "user",
      email: userEmail,
      password: userPassword,
      role: "USER",
      avatar: {
        public_id: "user_avatar",
        secure_url: "https://res.cloudinary.com/dhwbyshmo/image/upload/v1695283699/project%20images/lms-home.png",
      },
    });
    console.log("Standard user created successfully!");
  } catch (error) {
    console.error("Error seeding standard user:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Database disconnected.");
  }
};

seedUser();

// ✅ Load environment variables FIRST
import dotenv from "dotenv";
dotenv.config();

// ✅ Core imports (after dotenv)
import app from "./app.js";
import { v2 as cloudinary } from "cloudinary";
import Razorpay from "razorpay";

// ✅ Port
const PORT = process.env.PORT || 5000;

// ===============================
// ☁️ Cloudinary Configuration
// ===============================
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("✅ Cloudinary configured");

// ===============================
// 💳 Razorpay Configuration (SAFE)
// ===============================
let razorpay = null;

console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY_ID);

if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  console.log("✅ Razorpay initialized");
} else {
  console.warn("⚠️ Razorpay keys missing. Payments disabled.");
}

export { razorpay };

// ===============================
// 🚀 Start Server
// ===============================
app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
});

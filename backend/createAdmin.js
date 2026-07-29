import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Admin from "./models/Admin.js";

// Load backend/.env
dotenv.config();
console.log("MONGO_URI =", process.env.MONGO_URI);

const createAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({
      email: "admin@guptahomeo.com",
    });

    if (existingAdmin) {
      console.log("❌ Admin already exists.");
      process.exit(0);
    }

    await Admin.create({
      name: "Administrator",
      email: "admin@guptahomeo.com",
      password: "Admin@123",
    });

    console.log("✅ Admin created successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin:");
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
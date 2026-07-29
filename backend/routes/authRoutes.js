import express from "express";
import {
  loginAdmin,
  getAdminProfile,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin Login
router.post("/login", loginAdmin);

// Get Logged-in Admin
router.get("/profile", protect, getAdminProfile);

export default router;
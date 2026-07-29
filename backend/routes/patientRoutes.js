import express from "express";

import {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from "../controllers/patientController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Patient
router.post("/", protect, createPatient);

// Get All Patients
router.get("/", protect, getPatients);

// Get Single Patient
router.get("/:id", protect, getPatientById);

// Update Patient
router.put("/:id", protect, updatePatient);

// Delete Patient
router.delete("/:id", protect, deletePatient);

export default router;
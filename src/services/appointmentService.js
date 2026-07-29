import axios from "axios";

const API_URL = "https://gupta-homeo-clinic.onrender.com/api/appointments";

// Get All Appointments
export const getAppointments = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

// Create Appointment
export const createAppointment = async (appointment) => {
  const response = await axios.post(API_URL, appointment);
  return response.data;
};

// Update Appointment
export const updateAppointment = async (id, updatedData) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData
  );

  return response.data;
};

// Delete Appointment
export const deleteAppointment = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};
import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/patients`;

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getPatients = async () => {
  const { data } = await axios.get(API, authConfig());
  return data.data;
};

export const createPatient = async (patient) => {
  const { data } = await axios.post(API, patient, authConfig());
  return data.data;
};

export const updatePatient = async (id, patient) => {
  const { data } = await axios.put(`${API}/${id}`, patient, authConfig());
  return data.data;
};

export const deletePatient = async (id) => {
  await axios.delete(`${API}/${id}`, authConfig());
};

export const getPatientById = async (id) => {
  const { data } = await axios.get(`${API}/${id}`, authConfig());
  return data.data;
};
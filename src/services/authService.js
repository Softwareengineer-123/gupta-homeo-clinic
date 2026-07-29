import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Automatically attach JWT token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const login = async (email, password) => {
  const { data } = await API.post("/auth/login", {
    email,
    password,
  });

  return data;
};

const getProfile = async () => {
  const { data } = await API.get("/auth/profile");
  return data;
};

export default {
  login,
  getProfile,
};
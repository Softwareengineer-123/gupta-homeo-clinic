import { useEffect, useState } from "react";
import { getPatients } from "../services/patientService";

export default function usePatients() {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPatients = async () => {
    try {
      setLoading(true);

      const data = await getPatients();

      console.log("API Response:", data);
        console.log("Is Array:", Array.isArray(data));

      setPatients(data);
      setFilteredPatients(data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load patients.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const searchPatients = (keyword) => {
    const value = keyword.toLowerCase();

    setFilteredPatients(
      patients.filter(
        (patient) =>
          patient.fullName.toLowerCase().includes(value) ||
          patient.patientId.toLowerCase().includes(value) ||
          patient.phone.includes(keyword)
      )
    );
  };

  return {
    patients: filteredPatients,
    loading,
    error,
    searchPatients,
    refreshPatients: fetchPatients,
  };
}
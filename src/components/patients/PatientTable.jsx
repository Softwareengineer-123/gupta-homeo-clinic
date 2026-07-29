import { useState } from "react";

import usePatients from "../../hooks/usePatients";

import PatientToolbar from "./PatientToolbar";
import LoadingSpinner from "./LoadingSpinner";
import EmptyState from "./EmptyState";
import AddPatientModal from "./AddPatientModal";

export default function PatientTable() {
  const {
    patients,
    loading,
    error,
    searchPatients,
    refreshPatients,
  } = usePatients();

  const [showAddModal, setShowAddModal] = useState(false);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="bg-red-100 border border-red-300 text-red-700 rounded-lg p-4">
        {error}
      </div>
    );
  }

  return (
    <>
      <PatientToolbar
        onSearch={searchPatients}
        onAddPatient={() => setShowAddModal(true)}
      />

      <AddPatientModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onPatientAdded={refreshPatients}
      />

      {patients.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Patient ID</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Age</th>
                <th className="px-6 py-4 text-left">Gender</th>
                <th className="px-6 py-4 text-left">Phone</th>
                <th className="px-6 py-4 text-left">Blood Group</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((patient) => (
                <tr
                  key={patient._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium">
                    {patient.patientId}
                  </td>

                  <td className="px-6 py-4">
                    {patient.fullName}
                  </td>

                  <td className="px-6 py-4">
                    {patient.age}
                  </td>

                  <td className="px-6 py-4">
                    {patient.gender}
                  </td>

                  <td className="px-6 py-4">
                    {patient.phone}
                  </td>

                  <td className="px-6 py-4">
                    {patient.bloodGroup || "-"}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        patient.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {patient.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center space-x-2">
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>

                    <button className="text-yellow-600 hover:underline">
                      Edit
                    </button>

                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
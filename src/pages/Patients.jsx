import PatientTable from "../components/patients/PatientTable";

export default function Patients() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Patient Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all registered patients from one place.
        </p>
      </div>

      <PatientTable />
    </div>
  );
}
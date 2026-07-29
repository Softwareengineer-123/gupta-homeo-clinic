export default function EmptyState() {
  return (
    <div className="bg-white rounded-xl shadow-md p-12 text-center">
      <h2 className="text-2xl font-semibold text-gray-700">
        No Patients Found
      </h2>

      <p className="text-gray-500 mt-2">
        Click <strong>Add Patient</strong> to register your first patient.
      </p>
    </div>
  );
}
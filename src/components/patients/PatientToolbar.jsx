export default function PatientToolbar({
  onSearch,
  onAddPatient,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by Name, Patient ID or Phone..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full md:w-96 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={onAddPatient}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
      >
        + Add Patient
      </button>
    </div>
  );
}
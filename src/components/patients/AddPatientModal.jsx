import { useForm } from "react-hook-form";
import { createPatient } from "../../services/patientService";
import toast from "react-hot-toast";

export default function AddPatientModal({
  isOpen,
  onClose,
  onPatientAdded,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      await createPatient(formData);

      toast.success("Patient added successfully!");

      reset();

      onPatientAdded();

      onClose();
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to add patient."
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 shadow-xl">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Add Patient
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-xl"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <div>
            <label>Full Name</label>

            <input
              {...register("fullName", {
                required: "Name is required",
              })}
              className="w-full border rounded-lg p-2 mt-1"
            />

            <p className="text-red-500 text-sm">
              {errors.fullName?.message}
            </p>
          </div>

          <div>
            <label>Age</label>

            <input
              type="number"
              {...register("age", {
                required: "Age is required",
              })}
              className="w-full border rounded-lg p-2 mt-1"
            />

            <p className="text-red-500 text-sm">
              {errors.age?.message}
            </p>
          </div>

          <div>
            <label>Gender</label>

            <select
              {...register("gender", {
                required: true,
              })}
              className="w-full border rounded-lg p-2 mt-1"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label>Phone</label>

            <input
              {...register("phone", {
                required: true,
              })}
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div className="col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="border px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              {isSubmitting ? "Saving..." : "Save Patient"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
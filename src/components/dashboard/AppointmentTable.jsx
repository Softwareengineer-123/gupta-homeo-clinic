import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Check,
  CheckCircle,
  X,
  Trash2,
} from "lucide-react";

import {
  getAppointments,
  updateAppointment,
  deleteAppointment,
} from "../../services/appointmentService";

export default function AppointmentTable() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const data = await getAppointments();
      setAppointments(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load appointments.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      await updateAppointment(id, {
        status,
      });

      fetchAppointments();
    } catch (error) {
      console.error(error);
      alert("Unable to update appointment.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this appointment?"
    );

    if (!confirmDelete) return;

    try {
      await deleteAppointment(id);
      fetchAppointments();
    } catch (error) {
      console.error(error);
      alert("Unable to delete appointment.");
    }
  };

  const filteredAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      const query = search.toLowerCase();

      return (
        appointment.fullName.toLowerCase().includes(query) ||
        appointment.phone.includes(query)
      );
    });
  }, [appointments, search]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-blue-100 text-blue-700";

      case "Completed":
        return "bg-green-100 text-green-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  const getPaymentColor = (payment) => {
    return payment === "Paid"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-500">
        Loading appointments...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <div className="p-6 border-b flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          Appointments
        </h2>

        <div className="flex items-center border rounded-xl px-3 py-2 w-80">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            className="ml-2 outline-none w-full"
            placeholder="Search patient..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Patient
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                Date
              </th>

              <th className="p-4 text-left">
                Time
              </th>

              <th className="p-4 text-left">
                Consultation
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Payment
              </th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredAppointments.map((appointment) => (
                              <tr
                key={appointment._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4 font-medium">
                  {appointment.fullName}
                </td>

                <td className="p-4">
                  {appointment.phone}
                </td>

                <td className="p-4">
                  {new Date(appointment.date).toLocaleDateString()}
                </td>

                <td className="p-4">
                  {appointment.time}
                </td>

                <td className="p-4">
                  {appointment.consultationType}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      appointment.status
                    )}`}
                  >
                    {appointment.status}
                  </span>
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getPaymentColor(
                      appointment.paymentStatus
                    )}`}
                  >
                    {appointment.paymentStatus}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2 flex-wrap">

                    <button
                      onClick={() =>
                        handleStatus(
                          appointment._id,
                          "Confirmed"
                        )
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
                      title="Confirm"
                    >
                      <Check size={16} />
                    </button>

                    <button
                      onClick={() =>
                        handleStatus(
                          appointment._id,
                          "Completed"
                        )
                      }
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg"
                      title="Complete"
                    >
                      <CheckCircle size={16} />
                    </button>

                    <button
                      onClick={() =>
                        handleStatus(
                          appointment._id,
                          "Cancelled"
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                      title="Cancel"
                    >
                      <X size={16} />
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(appointment._id)
                      }
                      className="bg-gray-700 hover:bg-black text-white p-2 rounded-lg"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}

            {filteredAppointments.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="p-8 text-center text-gray-500"
                >
                  No appointments found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

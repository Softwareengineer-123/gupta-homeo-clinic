import { useEffect, useState } from "react";
import axios from "axios";
import {
  CalendarCheck,
  Clock3,
  CheckCircle2,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

export default function StatsCards() {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    confirmed: 0,
    completed: 0,
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/appointments"
      );

      const appointments = res.data;

      setStats({
        total: appointments.length,
        pending: appointments.filter(
          (a) => a.status === "Pending"
        ).length,
        confirmed: appointments.filter(
          (a) => a.status === "Confirmed"
        ).length,
        completed: appointments.filter(
          (a) => a.status === "Completed"
        ).length,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const cards = [
    {
      title: "Total Appointments",
      value: stats.total,
      icon: CalendarCheck,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: Clock3,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Confirmed",
      value: stats.confirmed,
      icon: CheckCircle2,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Revenue",
      value: `₹${stats.completed * 300}`,
      icon: IndianRupee,
      color: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
          >
            <div
              className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${card.color}`}
            />

            <div className="flex justify-between items-start">

              <div>

                <p className="text-gray-500 text-sm font-medium">
                  {card.title}
                </p>

                <h2 className="text-4xl font-bold text-gray-800 mt-3">
                  {card.value}
                </h2>

                <div className="flex items-center gap-1 mt-4 text-green-600 text-sm font-medium">
                  <TrendingUp size={16} />
                  <span>12% from last month</span>
                </div>

              </div>

              <div
                className={`bg-gradient-to-br ${card.color} text-white p-4 rounded-2xl shadow-lg`}
              >
                <Icon size={30} />
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
}
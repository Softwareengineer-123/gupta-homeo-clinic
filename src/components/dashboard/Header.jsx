import {
  Bell,
  Search,
  CalendarDays,
  UserCircle2,
  Clock3,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { admin } = useAuth();

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-30">

      <div className="px-8 py-5 flex items-center justify-between">

        {/* Left Section */}

        <div>

          <h2 className="text-3xl font-bold text-gray-800">
            Welcome Back 👋
          </h2>

          <div className="flex items-center gap-6 mt-2 text-gray-500">

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <span>{today}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={18} />
              <span>{time}</span>
            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex items-center gap-5">

          {/* Search */}

          <div className="hidden lg:flex items-center bg-gray-100 rounded-xl px-4 py-3 w-96">

            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search patient, appointment..."
              className="bg-transparent outline-none ml-3 flex-1"
            />

          </div>

          {/* Calendar */}

          <button className="relative bg-gray-100 hover:bg-gray-200 transition p-3 rounded-xl">

            <CalendarDays size={22} />

          </button>

          {/* Notification */}

          <button className="relative bg-gray-100 hover:bg-gray-200 transition p-3 rounded-xl">

            <Bell size={22} />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>

          </button>

          {/* Doctor Card */}

          <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-xl cursor-pointer hover:bg-emerald-100 transition">

            <UserCircle2
              size={45}
              className="text-emerald-700"
            />

            <div>

              <h4 className="font-semibold text-gray-800">
                {admin?.name || "Dr. Dinesh Gupta"}
              </h4>

              <p className="text-sm text-gray-500">
                {admin?.role || "Administrator"}
              </p>

            </div>

            <ChevronDown
              size={18}
              className="text-gray-500"
            />

          </div>

        </div>

      </div>

    </header>
  );
}
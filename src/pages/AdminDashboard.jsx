import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import StatsCards from "../components/dashboard/StatsCards";
import AppointmentTable from "../components/dashboard/AppointmentTable";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        <Header />

        <main className="p-8">

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Doctor Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Welcome to Gupta Homeo Clinic Management System
            </p>
          </div>

          <StatsCards />

          <div className="mt-8">
            <AppointmentTable />
          </div>

        </main>

      </div>

    </div>
  );
}

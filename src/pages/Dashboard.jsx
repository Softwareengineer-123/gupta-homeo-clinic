import StatsCards from "../components/dashboard/StatsCards";
import AppointmentTable from "../components/dashboard/AppointmentTable";

export default function Dashboard() {
  return (
    <>
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
    </>
  );
}
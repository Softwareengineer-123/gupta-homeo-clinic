import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
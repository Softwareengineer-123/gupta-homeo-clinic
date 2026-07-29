import { Menu, Stethoscope } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-emerald-600 font-semibold"
      : "text-gray-700 hover:text-emerald-600 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="bg-emerald-600 text-white p-2 rounded-xl">
            <Stethoscope size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Gupta Homeo Clinic
            </h1>

            <p className="text-xs text-gray-500">
              Homeopathic Skin Specialist
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <NavLink to="/" className={navClass} end>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/treatments" className={navClass}>
            Treatments
          </NavLink>

          <NavLink to="/patient-stories" className={navClass}>
            Patient Stories
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </div>

        {/* Book Appointment */}
        <NavLink to="/appointment" className="hidden md:block">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl transition">
            Book Appointment
          </button>
        </NavLink>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </nav>
  );
}
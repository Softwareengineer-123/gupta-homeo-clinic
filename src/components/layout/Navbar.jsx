import { useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-emerald-600 font-semibold"
      : "text-gray-700 hover:text-emerald-600 transition";

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2" onClick={closeMenu}>
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

        {/* Desktop Button */}
        <NavLink to="/appointment" className="hidden md:block">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl transition-all duration-300 hover:scale-105">
            Book Appointment
          </button>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4 font-medium">

            <NavLink to="/" className={navClass} end onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/about" className={navClass} onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/treatments" className={navClass} onClick={closeMenu}>
              Treatments
            </NavLink>

            <NavLink
              to="/patient-stories"
              className={navClass}
              onClick={closeMenu}
            >
              Patient Stories
            </NavLink>

            <NavLink to="/contact" className={navClass} onClick={closeMenu}>
              Contact
            </NavLink>

            <NavLink to="/appointment" onClick={closeMenu}>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl transition-all duration-300">
                Book Appointment
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
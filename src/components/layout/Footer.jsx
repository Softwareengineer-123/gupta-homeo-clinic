import {
  Phone,
  Mail,
  MapPin,
  Heart,
  MessageCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Clinic */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-400">
            Gupta Homeo Clinic
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            Providing trusted homeopathic care with a patient-first approach.
            Our goal is to treat the root cause and help every patient live a
            healthier life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <NavLink to="/" className="hover:text-emerald-400">
              Home
            </NavLink>

            <NavLink to="/about" className="hover:text-emerald-400">
              About
            </NavLink>

            <NavLink to="/treatments" className="hover:text-emerald-400">
              Treatments
            </NavLink>

            <NavLink to="/appointment" className="hover:text-emerald-400">
              Book Appointment
            </NavLink>

            <NavLink to="/contact" className="hover:text-emerald-400">
              Contact
            </NavLink>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-gray-300">

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <a href="tel:+917023197199" className="hover:text-emerald-400">
                +91 70231 97199
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <a
                href="mailto:guptahomeoclinic@gmail.com"
                className="hover:text-emerald-400"
              >
                guptahomeoclinic@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" />
              <span>
                Near JP Chowk,
                <br />
                Srikaranpur,
                <br />
                Rajasthan 335073
              </span>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Need Help?
          </h3>

          <p className="text-gray-400 mb-6">
            Book your consultation today and start your journey towards better
            health.
          </p>

          <a
            href="https://wa.me/917023197199"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl transition"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>

      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-400">

          <p>
            © {new Date().getFullYear()} Gupta Homeo Clinic. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> for better healthcare.
          </p>

        </div>
      </div>
    </footer>
  );
}
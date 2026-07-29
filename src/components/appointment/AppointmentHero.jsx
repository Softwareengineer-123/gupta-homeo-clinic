import { CalendarCheck, Clock3, ShieldCheck } from "lucide-react";

export default function AppointmentHero() {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
            Gupta Homeo Clinic
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Book Your Appointment
          </h1>

          <p className="text-lg text-emerald-100 mt-6 leading-8">
            Schedule your consultation with
            <span className="font-semibold text-white">
              {" "}Dr. Dinesh Gupta
            </span>.
            Receive personalized homeopathic treatment focused on the root
            cause of your health concerns.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-12">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
              <CalendarCheck size={34} />
              <h3 className="font-semibold text-xl mt-4">
                Easy Booking
              </h3>
              <p className="text-emerald-100 text-sm mt-2">
                Book your consultation online in just a few minutes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
              <Clock3 size={34} />
              <h3 className="font-semibold text-xl mt-4">
                Flexible Timing
              </h3>
              <p className="text-emerald-100 text-sm mt-2">
                Choose your preferred appointment slot.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
              <ShieldCheck size={34} />
              <h3 className="font-semibold text-xl mt-4">
                Secure Records
              </h3>
              <p className="text-emerald-100 text-sm mt-2">
                Your personal information remains private and secure.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
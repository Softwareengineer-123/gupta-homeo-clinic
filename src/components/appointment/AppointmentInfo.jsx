import {
  Clock3,
  MapPin,
  Phone,
  IndianRupee,
  CalendarCheck,
} from "lucide-react";

export default function AppointmentInfo() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Clinic Information
          </h2>

          <p className="text-gray-600 mt-3">
            Everything you need before visiting Gupta Homeo Clinic.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Timings */}
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl">
              <Clock3 className="text-emerald-600" size={28} />

              <div>
                <h3 className="font-semibold text-xl">
                  Clinic Timings
                </h3>

                <p className="text-gray-600 mt-2">
                  Sunday
                </p>

                <p className="font-medium">
                  10:30 AM – 5:00 PM
                </p>

                <p className="text-gray-600 mt-4">
                  Monday – Tuesday
                </p>

                <p className="font-medium">
                  10:30 AM – 3:30 PM
                  

                </p>

                <p className="text-gray-600 mt-4">
                  Wednesday
                </p>

                <p className="font-medium">
                  7:00 PM – 8:30 PM
                </p>

                <p className="text-gray-600 mt-4">
                  Thursday – Saturday
                </p>

                <p className="font-medium">
                  3:00 PM – 5:00 PM
                </p>
              </div>
            </div>

            {/* Fee */}
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl">
              <IndianRupee className="text-emerald-600" size={28} />

              <div>
                <h3 className="font-semibold text-xl">
                  Consultation Fee
                </h3>

                <p className="text-3xl font-bold text-emerald-700 mt-2">
                  ₹300
                </p>

                <p className="text-gray-600 mt-2">
                  Pay at the clinic.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl">
              <Phone className="text-emerald-600" size={28} />

              <div>
                <h3 className="font-semibold text-xl">
                  Contact
                </h3>

                <p className="mt-2 text-gray-700">
                  +91 7023197199
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="bg-emerald-600 rounded-3xl text-white p-10 flex flex-col justify-between">

            <div>

              <CalendarCheck size={55} />

              <h2 className="text-4xl font-bold mt-6">
                Need a Consultation?
              </h2>

              <p className="text-emerald-100 mt-5 leading-8">
                Dr. Dinesh Gupta has over 20 years of experience in
                homeopathic treatment for skin diseases, allergies,
                hair problems, women's health, child care and chronic illnesses.
              </p>

            </div>

            <div className="mt-10">

              <div className="flex gap-3 items-start">

                <MapPin />

                <span>
                  Near JP Chowk,
                  <br />
                  Srikaranpur,
                  <br />
                  Rajasthan 335073
                </span>

              </div>

              <a
                href="https://maps.app.goo.gl/KiDKgBzeuuQz4zDq8"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-8 bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition"
              >
                View on Google Maps
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
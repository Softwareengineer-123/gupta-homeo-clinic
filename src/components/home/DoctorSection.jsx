import { doctorData } from "../../data/doctorData";
import { CheckCircle, CalendarDays, PlayCircle } from "lucide-react";

export default function DoctorSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Doctor Image */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="w-80 h-[420px] rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-2xl flex items-center justify-center">

                <div className="text-center text-white">

                  <div className="text-8xl mb-6">
                    👨‍⚕️
                  </div>

                  <h3 className="text-2xl font-bold">
                    Doctor Photo
                  </h3>

                  <p className="opacity-80 mt-2">
                    Placeholder
                  </p>

                </div>

              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5">

                <p className="text-emerald-600 font-bold text-3xl">
                  20+
                </p>

                <p className="text-gray-500 text-sm">
                  Years Experience
                </p>

              </div>

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold mb-5">

              Meet Your Doctor

            </span>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight">

              {doctorData.name}

            </h2>

            <p className="text-xl text-emerald-600 mt-3 font-semibold">

              {doctorData.designation}

            </p>

            <p className="text-gray-600 mt-8 leading-8 text-lg">

              {doctorData.intro}

            </p>

            <div className="space-y-5 mt-10">

              {doctorData.highlights.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <CheckCircle
                    className="text-emerald-600"
                    size={24}
                  />

                  <span className="text-gray-700 text-lg">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <div className="flex flex-wrap gap-5 mt-12">

              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition">

                <CalendarDays
                  className="inline mr-2"
                  size={20}
                />

                Book Appointment

              </button>

              <button className="border-2 border-gray-300 hover:border-emerald-600 hover:text-emerald-600 px-8 py-4 rounded-xl font-semibold transition">

                <PlayCircle
                  className="inline mr-2"
                  size={20}
                />

                Patient Stories

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
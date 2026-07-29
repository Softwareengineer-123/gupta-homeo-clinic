import { patientVideos } from "../../data/videoData";
import { PlayCircle } from "lucide-react";

export default function PatientVideos() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold">
            Patient Success Stories
          </span>

          <h2 className="text-4xl font-bold mt-6 text-gray-900">
            Real Treatment Journeys
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            This section will feature real patient success stories shared with
            their consent. Videos will be available soon.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {patientVideos.map((video) => (

            <div
              key={video.id}
              className="group rounded-3xl overflow-hidden bg-white shadow hover:shadow-2xl transition duration-300"
            >

              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">

                <PlayCircle
                  size={70}
                  className="text-white group-hover:scale-110 transition"
                />

                <div className="absolute inset-0 bg-black/20"></div>

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900">
                  {video.title}
                </h3>

                <span className="inline-block mt-3 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  {video.category}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
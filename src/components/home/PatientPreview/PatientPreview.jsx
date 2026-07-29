import { PlayCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const videos = [
  {
    title: "Skin Treatment Journey",
    description: "Watch a real patient share their experience.",
  },
  {
    title: "Successful Recovery Story",
    description: "A patient's journey towards healthier skin.",
  },
  {
    title: "Natural Healing Experience",
    description: "Personalized homeopathic treatment results.",
  },
];

export default function PatientPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-emerald-600 font-semibold uppercase tracking-widest">
            Patient Stories
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Real Patient Experiences
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hear directly from patients who chose Gupta Homeo Clinic for their
            treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="h-56 bg-gray-200 flex items-center justify-center">
                <PlayCircle size={70} className="text-emerald-600" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{video.title}</h3>

                <p className="text-gray-600 mt-3">
                  {video.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-12">
          <NavLink to="/patient-stories">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl transition">
              View All Patient Stories
            </button>
          </NavLink>
        </div>

      </div>
    </section>
  );
}
import {
  Sparkles,
  Leaf,
  ShieldPlus,
  HeartPulse,
  Activity,
  Flower2,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const treatments = [
  { title: "Acne", icon: Sparkles },
  { title: "Eczema", icon: Leaf },
  { title: "Psoriasis", icon: ShieldPlus },
  { title: "Vitiligo", icon: HeartPulse },
  { title: "Hair Fall", icon: Activity },
  { title: "Allergies", icon: Flower2 },
];

export default function FeaturedTreatments() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-emerald-600 font-semibold uppercase tracking-widest">
            Treatments
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Conditions We Commonly Treat
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Personalized homeopathic care focused on treating the root cause and
            supporting long-term wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {treatments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Icon className="text-emerald-600" size={30} />
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  Safe, personalized homeopathic treatment designed according to
                  individual patient needs.
                </p>
              </div>
            );
          })}

        </div>

        <div className="text-center mt-14">
          <NavLink to="/treatments">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl transition">
              View All Treatments
            </button>
          </NavLink>
        </div>

      </div>
    </section>
  );
}
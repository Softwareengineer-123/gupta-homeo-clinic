import {
  ShieldPlus,
  Flower2,
  HeartPulse,
  Sparkles,
  Leaf,
  Activity,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const treatments = [
  {
    title: "Acne",
    description:
      "Personalized homeopathic treatment to help manage acne and improve skin health naturally.",
    icon: Sparkles,
  },
  {
    title: "Eczema",
    description:
      "Natural care focused on reducing itching, inflammation, and recurring flare-ups.",
    icon: Leaf,
  },
  {
    title: "Psoriasis",
    description:
      "Individualized treatment plans designed to support long-term skin wellness.",
    icon: ShieldPlus,
  },
  {
    title: "Vitiligo",
    description:
      "Comprehensive homeopathic care tailored to each patient's condition.",
    icon: HeartPulse,
  },
  {
    title: "Hair Fall",
    description:
      "Treatment plans focused on identifying underlying causes and supporting healthy hair growth.",
    icon: Activity,
  },
  {
    title: "Allergies",
    description:
      "Homeopathic management for seasonal and chronic allergies with personalized care.",
    icon: Flower2,
  },
];

export default function Treatments() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Our Treatments
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Personalized homeopathic treatment designed to promote natural healing
            and long-term wellness.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {treatments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <Icon size={30} className="text-emerald-600" />
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  {item.title}
                </h2>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.description}
                </p>

                <NavLink to="/appointment">
                  <button className="mt-6 text-emerald-600 font-semibold hover:text-emerald-700">
                    Book Consultation →
                  </button>
                </NavLink>
              </div>
            );
          })}

        </div>
      </section>
    </div>
  );
}
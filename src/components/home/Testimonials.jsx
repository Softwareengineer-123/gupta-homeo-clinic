import { ShieldCheck, HeartHandshake } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-50 rounded-3xl p-12 text-center shadow-sm border">

          <div className="flex justify-center mb-6">
            <div className="bg-emerald-100 p-4 rounded-full">
              <HeartHandshake
                size={40}
                className="text-emerald-600"
              />
            </div>
          </div>

          <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold">
            <ShieldCheck size={18} />
            Genuine Patient Experiences
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-6">
            Patient Stories Coming Soon
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6 max-w-3xl mx-auto">
            At Gupta Homeo Clinic, we believe in sharing only authentic patient
            experiences. With our patients' consent, this section will soon
            feature real success stories and treatment journeys.
          </p>

          <div className="mt-10 bg-white rounded-2xl p-6 border border-dashed border-emerald-300">
            <p className="text-emerald-700 font-medium">
              💚 Your trust matters to us. We never publish fabricated reviews or
              testimonials.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
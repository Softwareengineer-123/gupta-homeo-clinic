import { whyChooseData } from "../../data/whyChooseData";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Why Patients Trust Gupta Homeo Clinic
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            We combine years of experience with personalized homeopathic care to
            help every patient achieve better health naturally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border p-8 hover:shadow-xl transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                  <Icon className="text-emerald-600" size={30} />
                </div>

                <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
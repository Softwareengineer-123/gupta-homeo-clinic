import { motion } from "framer-motion";
import { services } from "../../data/servicesData";

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-emerald-600 font-semibold uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Comprehensive Homeopathic Care
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            We provide personalized homeopathic treatment designed to improve
            your health naturally with safe, effective, and patient-focused care.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl shadow-md hover:shadow-2xl p-8 border"
              >

                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">

                  <Icon
                    size={34}
                    className="text-emerald-600"
                  />

                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
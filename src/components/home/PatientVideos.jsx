import { patientVideos } from "../../data/videoData";
import { PlayCircle, Clock3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function PatientVideos() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full font-semibold">
            Patient Success Stories
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
            Real Healing. Real Results.
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
            We believe that every patient's journey is unique. Soon, this
            section will showcase genuine recovery stories and treatment
            experiences shared with patient consent.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {patientVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-64 bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center">

                <div className="absolute inset-0 bg-black/20"></div>

                <PlayCircle
                  size={75}
                  className="relative text-white group-hover:scale-110 transition duration-300"
                />

                <div className="absolute bottom-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Clock3 size={15} />
                  Coming Soon
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900">
                  {video.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Watch real patients share their treatment journey and recovery
                  experience after receiving personalized homeopathic care.
                </p>

                <div className="flex items-center justify-between mt-6">

                  <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    {video.category}
                  </span>

                  <div className="flex items-center gap-1 text-emerald-600 font-medium">
                    <ShieldCheck size={18} />
                    Verified
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            More Success Stories Coming Soon
          </h3>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Our patient testimonial gallery is currently being prepared with
            consented treatment journeys. Stay tuned to see inspiring recovery
            stories from patients treated at Gupta Homeo Clinic.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
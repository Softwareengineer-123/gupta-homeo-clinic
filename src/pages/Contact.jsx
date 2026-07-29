import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white min-h-screen">

      {/* Hero */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Contact Gupta Homeo Clinic
        </h1>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
          We're here to help you begin your journey towards better health.
          Reach out to us by phone, WhatsApp, email, or visit our clinic.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-10">

        {/* Left Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Clinic Information
          </h2>

          <div className="space-y-7">

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <Phone className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>

                <a
                  href="tel:+917023197199"
                  className="text-gray-600 hover:text-emerald-600"
                >
                  +91 70231 97199
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <MessageCircle className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold">WhatsApp</h3>

                <a
                  href="https://wa.me/917023197199"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-emerald-600"
                >
                  Chat with us instantly
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <Mail className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>

                <a
                  href="mailto:guptahomeoclinic@gmail.com"
                  className="text-gray-600 hover:text-emerald-600"
                >
                  guptahomeoclinic@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <MapPin className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold">Clinic Address</h3>

                <p className="text-gray-600">
                  Near JP Chowk,
                  <br />
                  Srikaranpur,
                  <br />
                  Rajasthan – 335073
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <Clock className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold">Clinic Timings</h3>

                <p className="text-gray-600">
                  Wednesday: 7:00 PM – 8:30 PM
                  <br />
                  Thursday – Tuesday: 10:30 AM – 3:30 PM
                  <br />
                  Sunday: 10:30 AM – 5:00 PM
                </p>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="tel:+917023197199"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/917023197199"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>

        {/* Google Map */}
        <div className="rounded-3xl overflow-hidden shadow-xl">

          <iframe
            title="Gupta Homeo Clinic"
            src="https://www.google.com/maps?q=Near+JP+Chowk,+Srikaranpur,+Rajasthan+335073&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              minHeight: "600px",
            }}
            loading="lazy"
            allowFullScreen
          />

        </div>

      </div>

    </div>
  );
}
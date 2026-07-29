import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Gupta Homeo Clinic
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <span>+91 7023197199</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span>guptahomeoclinic@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 mt-1" />
              <span>
                Near JP Chowk,
                <br />
                Srikaranpur,
                <br />
                Rajasthan 335073
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-blue-600 mt-1" />
              <span>
                Wednesday: 7:00 PM – 8:30 PM
                <br />
                Thursday – Tuesday: 10:30 AM – 3:30 PM
                <br />
                Sunday: 10:30 AM – 5:00 PM
              </span>
            </div>
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="tel:+917023197199"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917023197199"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Google Maps */}
        <a
          href="https://maps.app.goo.gl/KiDKgBzeuuQz4zDq8"
          target="_blank"
          rel="noreferrer"
          className="bg-white shadow-lg rounded-2xl flex items-center justify-center hover:bg-gray-50 transition"
        >
          <div className="text-center p-8">
            <MapPin
              size={60}
              className="mx-auto text-green-600 mb-4"
            />

            <h2 className="text-2xl font-bold mb-2">
              View Clinic Location
            </h2>

            <p className="text-gray-600 mb-6">
              Near JP Chowk, Srikaranpur,
              <br />
              Rajasthan 335073
            </p>

            <span className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
              Open in Google Maps
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
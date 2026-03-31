import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-gray-600"
          >
            We'd love to hear from you. Reach out to us for inquiries, partnerships, or support.
          </motion.p>
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-green-50 rounded-3xl p-10 border border-green-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Email</p>
                  <a href="mailto:info@rhgi.org.ng" className="mt-1 text-lg text-gray-600 hover:text-green-600 transition-colors">
                    info@rhgi.org.ng
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Phone</p>
                  <a href="tel:+2348000000000" className="mt-1 text-lg text-gray-600 hover:text-green-600 transition-colors">
                    +234 800 000 0000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Address</p>
                  <p className="mt-1 text-lg text-gray-600">
                    123 Renewed Hope Avenue,<br />
                    Abuja, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
          >
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Message sent successfully! (This is a demo)");
                }}
                className="w-full rounded-md bg-blue-600 px-3.5 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

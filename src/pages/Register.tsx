import { motion } from 'motion/react';

export default function Register() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-green-700 py-10 px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Join the Movement
            </motion.h1>
            <p className="mt-2 text-green-100">Fill out the form below to become an official member of RHGI.</p>
          </div>

          <div className="p-8 sm:p-12">
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 border"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 border"
                      placeholder="+234..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 border"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <div className="mt-1">
                    <select
                      id="state"
                      name="state"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 border bg-white"
                    >
                      <option>Select State</option>
                      <option>Lagos</option>
                      <option>Abuja (FCT)</option>
                      <option>Kano</option>
                      <option>Rivers</option>
                      {/* Add more states */}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="lga" className="block text-sm font-medium text-gray-700">
                    LGA
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lga"
                      id="lga"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 border"
                      placeholder="Your Local Government Area"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                    Occupation
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="occupation"
                      id="occupation"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 border"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <fieldset>
                    <legend className="text-sm font-medium text-gray-700">Do you have a PVC?</legend>
                    <div className="mt-4 flex items-center space-x-6">
                      <div className="flex items-center">
                        <input
                          id="pvc-yes"
                          name="pvc"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <label htmlFor="pvc-yes" className="ml-3 block text-sm font-medium text-gray-700">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="pvc-no"
                          name="pvc"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <label htmlFor="pvc-no" className="ml-3 block text-sm font-medium text-gray-700">
                          No
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                    Area of Interest
                  </label>
                  <div className="mt-1">
                    <select
                      id="interest"
                      name="interest"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 border bg-white"
                    >
                      <option>Select Area of Interest</option>
                      <option>Community Mobilization</option>
                      <option>Social Media Advocacy</option>
                      <option>Event Coordination</option>
                      <option>General Support</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Registration submitted successfully! (This is a demo)");
                  }}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Donate() {
  return (
    <div className="bg-white min-h-[80vh] flex flex-col items-center justify-center py-24 px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl text-center"
      >
        <div className="flex justify-center mb-8">
          <div className="bg-red-100 p-4 rounded-full">
            <Heart className="w-12 h-12 text-red-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Support the Movement
        </h1>
        <p className="text-xl leading-8 text-gray-600 mb-8">
          Your support helps us reach more communities, amplify voices, and sustain impactful grassroots activities. Every contribution strengthens the movement.
        </p>
        
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Choose an Amount</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['â¦5,000', 'â¦10,000', 'â¦50,000', 'Other'].map((amount) => (
              <button
                key={amount}
                className="py-3 px-4 border-2 border-green-600 rounded-lg text-green-700 font-medium hover:bg-green-600 hover:text-white transition-colors"
              >
                {amount}
              </button>
            ))}
          </div>
          <button 
            onClick={() => alert("Donation gateway integration would go here.")}
            className="w-full py-4 px-8 bg-red-600 text-white rounded-lg text-lg font-bold hover:bg-red-700 transition-colors shadow-md"
          >
            Donate Now
          </button>
        </div>
      </motion.div>
    </div>
  );
}

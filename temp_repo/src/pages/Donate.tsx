import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, CheckCircle2, Loader2, CreditCard, ShieldCheck } from 'lucide-react';

export default function Donate() {
  const [amount, setAmount] = useState<number | 'other'>(5000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const predefinedAmounts = [2000, 5000, 10000, 50000];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalAmount = amount === 'other' ? Number(customAmount) : amount;
    
    if (!finalAmount || finalAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (!name || !email) {
      alert("Please fill in your name and email.");
      return;
    }

    setIsProcessing(true);

    // Simulate payment gateway processing (e.g., Paystack/Flutterwave)
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setAmount(5000);
    setCustomAmount('');
    setName('');
    setEmail('');
  };

  return (
    <div className="bg-gray-50 min-h-[80vh] flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <Heart className="w-10 h-10 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl mb-4">
            Support the Movement
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 max-w-xl mx-auto">
            Your support helps us reach more communities, amplify voices, and sustain impactful grassroots activities. Every Naira strengthens the movement.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleDonate}
              >
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Select Donation Amount (NGN)</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setAmount(preset)}
                        className={`py-3 px-4 border-2 rounded-xl font-bold text-lg transition-all ${
                          amount === preset
                            ? 'border-green-600 bg-green-50 text-green-700'
                            : 'border-gray-200 text-gray-600 hover:border-green-300 hover:bg-green-50/50'
                        }`}
                      >
                        ₦{preset.toLocaleString()}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setAmount('other')}
                      className={`py-3 px-4 border-2 rounded-xl font-bold text-lg transition-all ${
                        amount === 'other'
                          ? 'border-green-600 bg-green-50 text-green-700'
                          : 'border-gray-200 text-gray-600 hover:border-green-300 hover:bg-green-50/50'
                      }`}
                    >
                      Other
                    </button>
                  </div>

                  {amount === 'other' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="relative mt-4"
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-gray-500 font-bold text-lg">₦</span>
                      </div>
                      <input
                        type="number"
                        min="100"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter custom amount"
                        className="block w-full pl-10 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-green-600 transition-colors"
                        required={amount === 'other'}
                      />
                    </motion.div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-bold text-gray-900">Your Details</h3>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-green-600 transition-colors"
                      placeholder="e.g. Chinedu Okafor"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-green-600 transition-colors"
                      placeholder="e.g. chinedu@example.com"
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 px-8 bg-green-600 text-white rounded-xl text-lg font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-6 h-6" />
                      Donate ₦{amount === 'other' ? (customAmount ? Number(customAmount).toLocaleString() : '0') : amount.toLocaleString()}
                    </>
                  )}
                </button>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                  <span>Secured by MockPay Gateway</span>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full">
                    <CheckCircle2 className="w-16 h-16 text-green-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">Thank You, {name.split(' ')[0]}!</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your generous donation of <span className="font-bold text-gray-900">₦{amount === 'other' ? Number(customAmount).toLocaleString() : amount.toLocaleString()}</span> has been received successfully. A receipt has been sent to {email}.
                </p>
                <button 
                  onClick={resetForm}
                  className="py-3 px-8 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors"
                >
                  Make Another Donation
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from 'motion/react';
import { TrendingUp, Building2, GraduationCap, ShieldCheck, Factory, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Achievements() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (STRONG OPENING) */}
      <section className="relative bg-slate-950 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2059&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8 uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            The Renewed Hope Agenda
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8"
          >
            Delivering Progress. <br className="hidden md:block" />
            <span className="text-green-400">Driving Results.</span> <br className="hidden md:block" />
            Building the Future.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto font-light"
          >
            These achievements are proof of our leadership's unwavering commitment to national growth and the tangible impact on everyday citizens.
          </motion.p>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Results, Not Just Promises.</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            True leadership is measured by its impact. We are focused on delivering measurable progress that is already happening across the nation. These are not just statistics; they represent real lives improved, businesses empowered, and communities transformed.
          </p>
        </div>
      </section>

      {/* PROGRESS IN NUMBERS (OPTIONAL ADD-ON) */}
      <section className="py-16 bg-green-50 border-y border-green-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-green-700 mb-2">3.4%</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">GDP Growth</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-green-700 mb-2">$14B+</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">FDI Inflow</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-green-700 mb-2">1.2M</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Students Supported</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-green-700 mb-2">15M</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Households Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY ACHIEVEMENTS (MAIN SECTION) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600">Measurable impact across key sectors of our economy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Economic Growth */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Economic Growth</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">GDP Expansion</strong>
                    <span className="text-gray-600 text-sm">Consistent quarter-over-quarter growth, strengthening our economic foundation.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Sector Contributions</strong>
                    <span className="text-gray-600 text-sm">Record-breaking outputs in agriculture and non-oil sectors.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Investment & Infrastructure */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment & Infrastructure</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Foreign Direct Investment</strong>
                    <span className="text-gray-600 text-sm">Secured billions in new commitments from global partners.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Infrastructure Development</strong>
                    <span className="text-gray-600 text-sm">Accelerated completion of critical road, rail, and energy projects.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Social Impact Programs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Impact Programs</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Student Loan Scheme</strong>
                    <span className="text-gray-600 text-sm">Ensuring higher education is accessible to every willing citizen.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Youth Empowerment</strong>
                    <span className="text-gray-600 text-sm">Launched massive digital skills and entrepreneurship grants.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Fiscal & Financial Stability */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fiscal Stability</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Debt Management</strong>
                    <span className="text-gray-600 text-sm">Significantly reduced the national debt service burden.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Revenue Allocation</strong>
                    <span className="text-gray-600 text-sm">Increased allocations to states and local governments for grassroots impact.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Trade & Industry */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                <Factory className="w-7 h-7 text-teal-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trade & Industry</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Trade Surplus</strong>
                    <span className="text-gray-600 text-sm">Achieved a positive balance of trade through export promotion.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Manufacturing Expansion</strong>
                    <span className="text-gray-600 text-sm">Revitalized local industries through targeted credit facilities.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Poverty Reduction & Inclusion */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7 text-rose-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Poverty Reduction</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Direct Support</strong>
                    <span className="text-gray-600 text-sm">Cash transfers and food security initiatives reaching millions of vulnerable households.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Rural Inclusion</strong>
                    <span className="text-gray-600 text-sm">Extending financial services and agricultural inputs to remote communities.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. IMPACT STATEMENT & 5. FUTURE OUTLOOK */}
      <section className="py-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Real Progress. Real Lives.</h2>
              <div className="space-y-6 text-lg text-green-50 font-light">
                <p>
                  These numbers translate directly into everyday improvements for Nigerians. It means a student who can now afford tuition, a farmer with better access to markets, and a small business owner securing the capital they need to expand.
                </p>
                <p>
                  The momentum is undeniable. We are building a resilient economy that works for everyone, not just a privileged few.
                </p>
              </div>
            </div>
            <div className="bg-green-800/50 p-10 rounded-3xl border border-green-700">
              <h3 className="text-3xl font-bold mb-4">The Journey Continues</h3>
              <p className="text-lg text-green-100 mb-8">
                This is just the beginning. The foundation has been laid, and more progress is on the horizon. We remain deeply committed to the long-term transformation of our great nation.
              </p>
              <div className="flex items-center gap-4 text-green-300 font-semibold">
                <span className="w-12 h-1 bg-green-400 rounded-full"></span>
                The Future is Bright
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Be Part of the Progress.</h2>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
            The Renewed Hope agenda is a collective effort. We need your voice, your energy, and your support to continue driving this vision forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-green-700 hover:bg-green-800 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300"
            >
              Join the Movement
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/donate" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-green-700 bg-green-50 hover:bg-green-100 transition-colors"
            >
              Support the Vision
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

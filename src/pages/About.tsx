import { motion } from 'motion/react';
import { Target, Eye, Heart, Users, ShieldCheck, Zap, Megaphone, BookOpen, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white">
      {/* 1. OPENING SECTION (EMOTIONAL + BIG IDEA) */}
      <section className="relative bg-green-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953eb1b5a4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-950/90"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8"
          >
            Real Change Starts <br className="hidden md:block" />
            <span className="text-green-400">From The Grassroots.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl md:text-2xl leading-relaxed text-green-50 max-w-3xl mx-auto font-light"
          >
            We are a people-driven movement focused on unity, progress, and national development. We believe that the power to shape our future lies in the hands of everyday citizens.
          </motion.p>
        </div>
      </section>

      {/* 2. WHO WE ARE & 3. OUR PURPOSE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">Who We Are</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                The Voice of the People.
              </h3>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  The Renewed Hope Grassroots Initiative (RHGI) is a nationwide mobilization platform connecting leadership directly with everyday people. We are focused on awareness, engagement, and decisive action.
                </p>
                <p>
                  Our movement is radically inclusive. We are the youth, the women, the professionals, the artisans, and the students. We represent the true voice of the people, united by a shared desire for a better nation.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-3xl p-10 border border-green-100"
            >
              <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">Why We Exist</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Bridging the Gap.
              </h3>
              <ul className="space-y-6">
                {[
                  "To mobilize unwavering support at the grassroots level.",
                  "To simplify and communicate complex national policies.",
                  "To build unbreakable trust between leadership and citizens.",
                  "To encourage active, everyday participation in national development."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-200 flex items-center justify-center mt-1 mr-4">
                      <div className="w-2 h-2 rounded-full bg-green-700"></div>
                    </div>
                    <p className="text-lg text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-12 rounded-3xl border border-slate-700"
            >
              <Target className="w-12 h-12 text-green-400 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                To mobilize, educate, and empower citizens across every community, strengthening civic participation and driving sustainable national growth from the ground up.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 p-12 rounded-3xl border border-slate-700"
            >
              <Eye className="w-12 h-12 text-green-400 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                A future defined by unbreakable unity, inclusive economic growth, accountable leadership, and shared prosperity for every citizen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600">The core values that define our movement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: 'Unity', desc: 'Standing together across all divides.', icon: Users },
              { name: 'Service', desc: 'Putting the needs of the people first.', icon: Heart },
              { name: 'Accountability', desc: 'Ensuring transparent and responsible leadership.', icon: ShieldCheck },
              { name: 'Progress', desc: 'Driving continuous national development.', icon: Zap },
              { name: 'Inclusion', desc: 'Giving every citizen a seat at the table.', icon: Globe },
            ].map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <value.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.name}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT WE DO (KEY PILLARS) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:w-2/3">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Key Pillars</h2>
            <p className="text-xl text-gray-600">
              We turn vision into action through focused, community-level engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Grassroots Mobilization",
                desc: "We build strong networks in every ward and local government, ensuring no community is left behind in the political process.",
                icon: Users
              },
              {
                title: "Youth Engagement",
                desc: "We empower the next generation of leaders by providing platforms for young people to shape policy and drive innovation.",
                icon: Zap
              },
              {
                title: "Policy Awareness",
                desc: "We break down complex government policies into clear, actionable information so citizens understand how decisions affect their lives.",
                icon: BookOpen
              },
              {
                title: "Civic Participation",
                desc: "We encourage everyday people to step up, register, vote, and hold their elected officials accountable.",
                icon: Megaphone
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-green-700 flex items-center justify-center text-white shadow-lg">
                    <pillar.icon className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. IMPACT STATEMENT */}
      <section className="py-24 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">The Momentum is Building.</h2>
          <p className="text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            From bustling city centers to the quietest rural wards, our movement is growing. We are reaching millions, sparking conversations, and proving that when real people get involved, real change happens.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-green-800/50 pt-12">
            <div>
              <div className="text-5xl font-extrabold text-green-400 mb-2">36+</div>
              <div className="text-lg text-green-100">States Reached</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-green-400 mb-2">774</div>
              <div className="text-lg text-green-100">Local Governments</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-green-400 mb-2">500k+</div>
              <div className="text-lg text-green-100">Active Volunteers</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-green-400 mb-2">1</div>
              <div className="text-lg text-green-100">United Vision</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">This Is Our Moment.</h2>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
            We cannot wait for change to be handed to us. We must build it together. Take ownership of your future and join the movement today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-green-700 hover:bg-green-800 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300"
            >
              Join The Movement
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/volunteer" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-green-700 bg-green-50 hover:bg-green-100 transition-colors"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

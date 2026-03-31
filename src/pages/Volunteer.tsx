import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Megaphone, Users, Calendar, MapPin, Heart, 
  Globe, ShieldCheck, Zap, ArrowRight, CheckCircle2, 
  Award, Briefcase, GraduationCap, Wrench, UserPlus,
  MessageSquare
} from 'lucide-react';

export default function Volunteer() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (STRONG HOOK) */}
      <section className="relative bg-green-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953eb1b5a4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-950/90"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8 uppercase tracking-widest"
          >
            <Users className="w-4 h-4" />
            Join 500,000+ Volunteers Nationwide
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8"
          >
            Be the Voice. <br className="hidden md:block" />
            <span className="text-green-400">Be the Change.</span> <br className="hidden md:block" />
            Be Part of the Movement.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl leading-relaxed text-green-50 max-w-3xl mx-auto font-light"
          >
            Real change doesn't happen from the top down—it starts with people. Volunteers are the absolute backbone of this movement, and no matter who you are, you have a vital role to play.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-green-900 bg-green-400 hover:bg-green-300 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300"
            >
              Join as a Volunteer
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white border border-green-400/30 hover:bg-green-800/50 transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY VOLUNTEER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Join the Movement?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This is more than just volunteering. This is your chance to step up, take ownership, and shape the future of our nation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Make Real Impact", desc: "Drive changes that directly improve lives in your local community.", icon: Zap },
              { title: "Be Part of Something Bigger", desc: "Join a historic movement that is actively reshaping our country.", icon: Globe },
              { title: "National Development", desc: "Contribute your time and energy to building a stronger, more united nation.", icon: ShieldCheck },
              { title: "Connect with Leaders", desc: "Meet and collaborate with passionate, like-minded people who share your vision.", icon: Users },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT VOLUNTEERS DO */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="md:w-2/3 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How You Can Contribute</h2>
            <p className="text-xl text-gray-600">
              There is a place for everyone in this movement. Choose the role that best fits your skills and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Community Mobilization",
                desc: "Engage with people locally. Knock on doors, host small gatherings, and spread the message of renewed hope in your neighborhood.",
                icon: Users
              },
              {
                title: "Social Media Advocacy",
                desc: "Spread awareness online. Use your digital voice to share our vision, counter misinformation, and trend our initiatives.",
                icon: Megaphone
              },
              {
                title: "Event Support",
                desc: "Organize and assist with programs. Help us run smooth town halls, rallies, and community outreach events.",
                icon: Calendar
              },
              {
                title: "Youth Engagement",
                desc: "Connect with young people. Inspire the next generation to take an active role in civic participation and leadership.",
                icon: Zap
              },
              {
                title: "Local Representation",
                desc: "Act as a voice in your area. Be the bridge between the grassroots movement and your specific ward or local government.",
                icon: MapPin
              }
            ].map((role, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-green-700 flex items-center justify-center text-white shadow-lg">
                    <role.icon className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{role.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO CAN JOIN & 5. BENEFITS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Who Can Join */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who Can Be a Volunteer?</h2>
              <p className="text-xl text-gray-600 mb-8">
                This movement belongs to all of us. No special political experience is required—just a genuine willingness to contribute to our nation's progress.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Students", icon: GraduationCap },
                  { name: "Professionals", icon: Briefcase },
                  { name: "Entrepreneurs", icon: Zap },
                  { name: "Artisans", icon: Wrench },
                  { name: "Community Leaders", icon: Users },
                  { name: "Everyday Citizens", icon: Heart },
                ].map((group, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <group.icon className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-900">{group.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-900 rounded-3xl p-10 text-white shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-8">What You Gain</h2>
              <ul className="space-y-6">
                {[
                  { title: "Sense of Purpose", desc: "Wake up knowing you are actively building a better country." },
                  { title: "Leadership Experience", desc: "Take charge of initiatives and grow as a community leader." },
                  { title: "Networking Opportunities", desc: "Build relationships with influential leaders and peers." },
                  { title: "Skill Development", desc: "Learn organizing, communication, and advocacy skills." },
                  { title: "Recognition", desc: "Earn certificates and recognition within the national movement." },
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Award className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-lg text-white mb-1">{benefit.title}</strong>
                      <span className="text-green-100/80">{benefit.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Steps to Get Started</h2>
            <p className="text-xl text-gray-600">Joining the movement is quick and straightforward.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-green-200 -translate-y-1/2 z-0"></div>
            {[
              { step: "01", title: "Register Online", desc: "Fill out our simple volunteer form to tell us about yourself." },
              { step: "02", title: "Get Contacted", desc: "Your local coordinator will reach out to welcome you." },
              { step: "03", title: "Join Your Team", desc: "Connect with other volunteers in your specific ward or area." },
              { step: "04", title: "Start Contributing", desc: "Begin making an immediate impact in your community." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-lg border-4 border-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL (OPTIONAL ADD-ON) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <MessageSquare className="w-12 h-12 text-green-200 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-relaxed mb-8 italic">
            "I joined RHGI because I was tired of complaining from the sidelines. Being a volunteer gave me a platform to actually do something. The energy is incredible, and the impact we are making in our local ward is real."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">
              A
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">Aisha T.</div>
              <div className="text-gray-500 text-sm">Community Mobilizer, Kano State</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. IMPACT STATEMENT */}
      <section className="py-24 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">You Are Joining Something Already In Motion.</h2>
          <p className="text-2xl text-green-100 leading-relaxed font-light">
            We are a rapidly growing network of volunteers spanning the entire nation. Real change is happening right now at the grassroots level, driven by people just like you. The momentum is unstoppable.
          </p>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">This Is Your Moment.</h2>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
            Don't wait for someone else to build the future you want to see. Take ownership. Step forward. Your country needs your energy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-green-700 hover:bg-green-800 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300"
            >
              Join the Movement Today
              <UserPlus className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/register" 
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

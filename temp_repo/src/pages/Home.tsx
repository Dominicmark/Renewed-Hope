import { Link } from 'react-router-dom';
import { Users, Target, TrendingUp, HeartHandshake, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative bg-[#f4f4f5] overflow-hidden flex flex-col lg:block">
        {/* Faded Crowd Background with Dotted Texture */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Base Image */}
          <div 
            className="absolute inset-0 opacity-40 grayscale"
            style={{
              backgroundImage: "url('/crowd-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Dotted Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
              backgroundSize: "4px 4px"
            }}
          />
          {/* Desktop fade gradient behind text */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#f4f4f5] from-40% via-[#f4f4f5]/90 to-transparent w-3/4" />
          {/* Mobile fade gradient behind text (top to bottom) */}
          <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-[#f4f4f5] from-40% via-[#f4f4f5]/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <div className="flex flex-col items-start mb-4">
                <div className="flex flex-row items-center gap-2 sm:gap-3">
                  <img src="/logo.png" alt="RHGI Logo" className="h-32 sm:h-56 md:h-64 w-auto object-contain shrink-0" />
                  <div className="flex flex-col items-start text-left">
                    <span className="font-black text-3xl sm:text-5xl md:text-7xl text-gray-900 tracking-tight leading-none mb-1 sm:mb-2 whitespace-nowrap">RENEWED HOPE</span>
                    <span className="font-bold text-[0.75rem] sm:text-xl md:text-3xl text-green-700 tracking-[0.15em] uppercase whitespace-nowrap">Grassroots Initiative</span>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  A Movement Built on{' '}
                  <span className="relative inline-block text-green-600">
                    Hope.
                    <svg className="absolute w-[110%] h-[0.3em] -bottom-[0.1em] -left-[5%] text-red-600" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M2,8 Q45,1 98,7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>{' '}
                <span className="block text-gray-900 xl:inline mt-2 xl:mt-0">Powered by the People.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
                The Renewed Hope Grassroots Initiative is a people-driven movement committed to mobilizing communities, amplifying voices, and supporting leadership that delivers real progress.
              </p>

              {/* DESKTOP BUTTONS */}
              <div className="hidden lg:flex mt-5 sm:mt-8 sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/register"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Join the Movement
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/volunteer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Become a Volunteer
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 relative z-10">
          {/* LENS FLARE EFFECT */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[15%] sm:top-[15%] sm:left-[25%] z-20 pointer-events-none mix-blend-screen"
          >
            {/* Core glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-32 sm:h-32 bg-white rounded-full blur-xl opacity-90" />
            {/* Outer glow (greenish) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-96 sm:h-96 bg-green-400 rounded-full blur-3xl opacity-30" />
            {/* Horizontal streak */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] sm:w-[800px] h-2 sm:h-4 bg-white rounded-full blur-md opacity-40 transform -rotate-12" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] sm:w-[400px] h-1 sm:h-2 bg-white rounded-full blur-sm opacity-70 transform -rotate-12" />
            {/* Diagonal streak */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] sm:w-[600px] h-4 sm:h-8 bg-green-200/30 rounded-full blur-xl opacity-50 transform rotate-45" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0], scale: [1, 1.01, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-auto max-h-[60vh] object-contain sm:h-72 md:h-96 lg:w-full lg:h-full lg:max-h-none lg:object-cover object-top"
              src="/candidate.png"
              alt="Candidate"
            />
          </motion.div>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="w-full max-w-7xl mx-auto lg:hidden relative z-10">
          <div className="relative z-10 pb-8 px-4 sm:px-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-start gap-3">
                <div className="rounded-md shadow w-full sm:w-auto">
                  <Link
                    to="/register"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Join the Movement
                  </Link>
                </div>
                <div className="w-full sm:w-auto">
                  <Link
                    to="/volunteer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Become a Volunteer
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCROLLING MARQUEE */}
      <div className="bg-green-700 text-white overflow-hidden py-4 border-y-4 border-green-800 flex">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center justify-around w-max">
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">RENEWED HOPE</span>
              <span className="mx-8 text-green-300">•</span>
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">LEADERSHIP THAT DELIVERS</span>
              <span className="mx-8 text-green-300">•</span>
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">GRASSROOTS MOVEMENT</span>
              <span className="mx-8 text-green-300">•</span>
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">UNITED FOR PROGRESS</span>
              <span className="mx-8 text-green-300">•</span>
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">ONE PEOPLE ONE FUTURE</span>
              <span className="mx-8 text-green-300">•</span>
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">BUILDING TOGETHER</span>
              <span className="mx-8 text-green-300">•</span>
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">VOICE OF THE PEOPLE</span>
              <span className="mx-8 text-green-300">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: CORE MESSAGE */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Core Message</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Uniting Communities. Driving Real Change.
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 mx-auto">
              Across cities, towns, and local communities, a new wave of engagement is rising. The Renewed Hope Grassroots Initiative brings together everyday citizens, youth, professionals, and community leaders with one shared goal — to build a stronger, more inclusive future.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-gray-600 mx-auto font-medium">
              We believe progress happens when people are informed, empowered, and actively involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE STAND FOR */}
      {/* SECTION 3: OUR FOCUS AREAS (Reimagined Bento Grid) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Core Pillars</h2>
            <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Focus Areas
            </p>
            <p className="mt-4 text-xl text-gray-500">
              The strategic pillars that drive our grassroots movement forward and create lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card - Span 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-green-700 p-8 sm:p-10"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-48 h-48 bg-green-600 rounded-full opacity-50 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Users className="h-12 w-12 text-green-200 mb-8" />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Grassroots Mobilization</h3>
                  <p className="text-green-100 text-lg max-w-md">
                    Connecting directly with communities to drive awareness, participation, and ensure every voice is heard at the local level.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <Target className="h-10 w-10 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Youth Empowerment</h3>
              <p className="text-gray-600">
                Equipping young people with opportunities, voice, and direction to become tomorrow's leaders.
              </p>
            </motion.div>

            {/* Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <TrendingUp className="h-10 w-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Economic Growth</h3>
              <p className="text-gray-600">
                Supporting policies and ideas that create jobs, foster innovation, and improve livelihoods.
              </p>
            </motion.div>

            {/* Wide Card - Span 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-gray-900 p-8 sm:p-10"
            >
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 sm:flex sm:items-center sm:justify-between h-full">
                <div className="sm:w-2/3">
                  <HeartHandshake className="h-10 w-10 text-green-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">Community Development</h3>
                  <p className="text-gray-400 text-lg">
                    Strengthening local communities through engagement, action, and sustainable infrastructure projects.
                  </p>
                </div>
                <div className="mt-8 sm:mt-0 sm:w-1/3 flex justify-start sm:justify-end">
                  <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-900/30 transition-all duration-300">
                    <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NIGERIA SKYLINE DIVIDER */}
      <div className="w-full bg-white leading-none">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-20 sm:h-32 md:h-48 block">
          {/* Background Layer (Lighter Green for depth) */}
          <path className="text-green-800/20 fill-current" d="M0,100 L0,80 L20,80 L20,60 L50,60 L50,80 L70,80 Q120,10 180,25 Q220,35 240,80 L260,80 L260,30 L290,30 L290,80 L320,80 L320,55 Q350,20 380,55 L380,80 L410,80 L410,30 L430,30 L430,65 Q450,30 470,65 L470,30 L490,30 L490,80 L520,80 L520,30 L530,30 L530,10 L533,10 L533,0 L537,0 L537,10 L540,10 L540,30 L550,30 L550,80 L580,80 L595,55 L645,55 L660,80 L690,80 L730,30 L780,80 L810,80 L850,5 L870,5 L910,80 L940,80 L940,65 L930,65 L930,45 L950,45 L950,25 L990,25 L990,45 L1010,45 L1010,65 L1000,65 L1000,80 L1030,80 L1030,20 L1080,20 L1080,80 L1110,80 L1110,60 L1140,60 L1140,40 L1170,40 L1170,80 L1200,80 L1200,100 Z" />
          {/* Foreground Layer (Matches Section 4 Background) */}
          {/* Landmarks left to right: National Theatre, NECOM House, Civic Centre, Zuma Rock, Abuja City Gate, National Mosque, Cocoa House, Lekki-Ikoyi Bridge, Aso Rock */}
          <path className="text-green-700 fill-current" d="M0,100 L0,90 L40,90 L50,90 L65,65 L85,65 L85,60 L95,60 L95,65 L115,65 L130,90 L150,90 L150,40 L160,40 L160,20 L163,20 L163,5 L167,5 L167,20 L170,20 L170,40 L180,40 L180,90 L200,90 L200,75 L190,75 L190,55 L210,55 L210,35 L250,35 L250,55 L270,55 L270,75 L260,75 L260,90 L290,90 Q330,20 390,35 Q430,45 450,90 L480,90 L480,40 L510,40 L510,75 Q540,40 570,75 L570,40 L600,40 L600,90 L630,90 L630,20 L635,10 L640,20 L640,90 L650,90 L650,65 Q685,30 720,65 L720,90 L730,90 L730,20 L735,10 L740,20 L740,90 L770,90 L770,30 L820,30 L820,90 L850,90 L890,15 L910,15 L950,90 L980,90 L990,90 L1030,40 L1080,90 L1120,90 L1120,70 L1150,70 L1150,50 L1180,50 L1180,90 L1200,90 L1200,100 Z" />
          {/* White Vector Accents */}
          <path stroke="white" opacity="0.35" strokeWidth="1.5" fill="none" d="
            M60,75 L120,75 M55,85 L125,85
            M165,25 L165,90 M155,50 L175,50 M155,70 L175,70
            M210,45 L250,45 M190,65 L270,65 M220,35 L220,90 M240,35 L240,90
            M330,50 Q360,40 380,60 M370,70 Q390,50 420,80
            M510,80 Q540,45 570,80 M540,50 L535,55 L540,65 L545,55 Z M495,40 L495,90 M585,40 L585,90
            M685,30 Q670,50 660,65 M685,30 Q685,50 685,65 M685,30 Q700,50 710,65 M635,25 L635,90 M735,25 L735,90
            M780,30 L780,90 M795,30 L795,90 M810,30 L810,90 M770,45 L820,45 M770,60 L820,60 M770,75 L820,75
            M900,15 L860,90 M900,25 L870,90 M900,35 L880,90 M900,45 L890,90 M900,15 L940,90 M900,25 L930,90 M900,35 L920,90 M900,45 L910,90 M900,15 L900,90
            M1020,60 L1040,90 M1040,55 L1060,90
            M1135,70 L1135,90 M1165,50 L1165,90
          " />
        </svg>
      </div>

      {/* SECTION 4: ABOUT SNAPSHOT */}
      <section className="py-16 bg-green-700 text-white pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                A People-Driven Initiative
              </h2>
              <p className="mt-4 text-lg text-green-100 max-w-2xl">
                The Renewed Hope Grassroots Initiative (RHGI) is built on the belief that real transformation begins at the grassroots level.
              </p>
              <p className="mt-4 text-lg text-green-100 max-w-2xl">
                We are a collective of passionate individuals committed to supporting leadership that prioritizes development, unity, and national progress.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
              <img 
                src="/community-interaction.png" 
                alt="Community Interaction" 
                className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GET INVOLVED */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Be Part of Something Bigger</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Every voice matters. Every effort counts. Whether you volunteer, donate, or spread the message, you are contributing to a movement shaping the future.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Register Now
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              Support the Movement
            </Link>
          </div>
        </div>
      </section>

      {/* SCROLLING MARQUEE 2 */}
      <div className="bg-red-600 text-white overflow-hidden py-4 border-y-4 border-red-700 flex">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center justify-around w-max">
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">JOIN THE MOVEMENT</span>
              <span className="mx-8 text-red-300">•</span>
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">REGISTER TODAY</span>
              <span className="mx-8 text-red-300">•</span>
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">BECOME A VOLUNTEER</span>
              <span className="mx-8 text-red-300">•</span>
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">TAKE ACTION NOW</span>
              <span className="mx-8 text-red-300">•</span>
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">STAND FOR CHANGE</span>
              <span className="mx-8 text-red-300">•</span>
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">MAKE YOUR VOICE COUNT</span>
              <span className="mx-8 text-red-300">•</span>
              <span className="mx-8 font-bold tracking-widest text-lg md:text-xl uppercase">BE PART OF THE FUTURE</span>
              <span className="mx-8 text-red-300">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6: RECENT ACTIVITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h3 className="text-red-700 font-bold tracking-widest uppercase text-sm mb-2">On the Ground</h3>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Recent Activities</h2>
            </div>
            <Link to="/activities" className="text-slate-500 hover:text-slate-800 font-bold flex items-center mt-4 md:mt-0 transition-colors">
              View All <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-56 w-full overflow-hidden">
                <img src="/activity-1.png" alt="Lagos Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/lagosevent/800/600'; }} />
                <div className="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-blue-700 text-xs font-bold shadow-sm">
                  Lagos
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-green-700 font-bold text-sm mb-3">Oct 12, 2023</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-green-700 transition-colors">Youth Townhall & PVC Sensitization Drive</h3>
                <p className="text-gray-600 text-base flex-grow">Mobilizing young voters to understand their civic duties and ensuring mass registration across local governments.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-56 w-full overflow-hidden">
                <img src="/activity-2.png" alt="Kano Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/kanoevent/800/600'; }} />
                <div className="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-blue-700 text-xs font-bold shadow-sm">
                  Kano
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-green-700 font-bold text-sm mb-3">Nov 05, 2023</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-green-700 transition-colors">Women in Leadership Empowerment Seminar</h3>
                <p className="text-gray-600 text-base flex-grow">Empowering market women and female entrepreneurs with micro-grants and leadership skills.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-56 w-full overflow-hidden">
                <img src="/activity-3.png" alt="Rivers Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/riversevent/800/600'; }} />
                <div className="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-blue-700 text-xs font-bold shadow-sm">
                  Rivers
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-green-700 font-bold text-sm mb-3">Dec 01, 2023</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-green-700 transition-colors">Grassroots Coordinators Strategy Retreat</h3>
                <p className="text-gray-600 text-base flex-grow">Strategic planning session with over 500 local government coordinators outlining the roadmap for upcoming initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LEADERSHIP / FACE OF MOVEMENT */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                src="/candidate.png"
                alt="Leadership"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Leadership & Inspiration</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At the heart of this movement is leadership committed to progress, unity, and service to the people. We believe in a vision that empowers every citizen and builds a foundation for lasting prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR TEAM */}
      <section className="py-24 relative overflow-hidden">
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 z-0" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-40 -left-40 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-40 left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-6" />
            <p className="text-xl text-green-100 max-w-2xl mx-auto font-light">
              The dedicated individuals working tirelessly behind the scenes to drive our movement forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Team Member 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-green-400 to-green-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center">
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-emerald-300 rounded-full animate-spin-slow opacity-50 blur-md group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 z-10">
                    <img src="/team1.jpeg" alt="Team Member" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Sarah Johnson</h3>
                <p className="text-green-300 font-medium text-sm mb-4 uppercase tracking-wider">Campaign Manager</p>
                <p className="text-green-50 text-sm leading-relaxed flex-grow">Leading our strategic initiatives and coordinating nationwide outreach programs.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-green-400 to-green-600 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center">
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-emerald-300 rounded-full animate-spin-slow opacity-50 blur-md group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 z-10">
                    <img src="/team2.jpeg" alt="Team Member" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">David Okeke</h3>
                <p className="text-green-300 font-medium text-sm mb-4 uppercase tracking-wider">Director of Comms</p>
                <p className="text-green-50 text-sm leading-relaxed flex-grow">Ensuring our message of progress and unity reaches every corner of the nation.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-green-400 to-green-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center">
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-emerald-300 rounded-full animate-spin-slow opacity-50 blur-md group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 z-10">
                    <img src="/team3.jpeg" alt="Team Member" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Aisha Bello</h3>
                <p className="text-green-300 font-medium text-sm mb-4 uppercase tracking-wider">Grassroots Coord</p>
                <p className="text-green-50 text-sm leading-relaxed flex-grow">Mobilizing local communities and building strong foundations at the ward level.</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-green-400 to-green-600 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center">
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-emerald-300 rounded-full animate-spin-slow opacity-50 blur-md group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 z-10">
                    <img src="/team4.jpeg" alt="Team Member" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Michael Adeyemi</h3>
                <p className="text-green-300 font-medium text-sm mb-4 uppercase tracking-wider">Policy Advisor</p>
                <p className="text-green-50 text-sm leading-relaxed flex-grow">Crafting data-driven policies that address the core needs of our citizens.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">This Is Our Moment</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Together, we can shape a future defined by opportunity, growth, and shared prosperity.
          </p>
          <div className="mt-8">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors shadow-lg"
            >
              Join the Movement Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

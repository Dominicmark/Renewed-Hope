import { motion } from 'motion/react';
import { Calendar, ArrowRight, Play, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Press Briefing: A Mandate for Continuity',
      date: 'May 03, 2026',
      excerpt: "Director General Alhaji Jaafaru Y. Sa'ad addresses the press, mobilizing grassroots support for President Tinubu's reelection. The briefing highlights recent economic progress, including foreign exchange reserve growth and structural reforms, urging Nigerians to support the administration for another four years.",
      image: 'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1778082216/WhatsApp_Image_2026-05-05_at_9.46.29_AM_2_ndejuu.jpg',
      category: 'Press Briefing',
      link: '/news/mandate-for-continuity'
    }
  ];

  const videoUpdates = [
    {
      id: 1,
      title: 'Arise News Coverage: RHGI DG Briefs Press on Mandate for Continuity',
      videoUrl: 'https://res.cloudinary.com/dbbw8jsjc/video/upload/v1778119783/WhatsApp_Video_2026-05-05_at_9.46.25_AM_1_tv7twv.mp4',
    },
    {
      id: 2,
      title: 'News Central Report: Grassroots Initiative Rallies Support for Tinubu Reelection',
      videoUrl: 'https://res.cloudinary.com/dbbw8jsjc/video/upload/v1778119862/WhatsApp_Video_2026-05-05_at_9.46.24_AM_1_maaqub.mp4',
    },
    {
      id: 3,
      title: 'NTA Highlights: Economic Progress & Reforms Noted in RHGI Press Briefing',
      videoUrl: 'https://res.cloudinary.com/dbbw8jsjc/video/upload/v1778119834/WhatsApp_Video_2026-05-05_at_9.46.24_AM_nkdcie.mp4',
    }
  ];

  const externalLinks = [
    {
      id: 1,
      source: 'The Nation',
      title: 'Group Lauds FG For Reforms Economic Gains',
      url: 'https://thenationonlineng.net/group-lauds-fg-for-reforms-economic-gains/',
      date: 'May 3, 2026',
      image: 'https://cdn.thenationonlineng.net/wp-content/uploads/2026/05/04062348/Renewed-Hope-Grassroots-Initiatives.jpg',
      excerpt: 'A grassroots group, Renewed Hope Grassroots Initiative (RHGI), has commended the Federal Government over the positive impact of its economic reforms on ordinary Nigerians.'
    },
    {
      id: 2,
      source: 'Pointblank News',
      title: '2027: Group backs Tinubu’s re-election, rejects one-term presidency calls',
      url: 'https://pointblanknews.com/pbn/exclusive/2027-group-backs-tinubus-re-election-rejects-one-term-presidency-calls/',
      date: 'May 3, 2026',
      image: 'https://pointblanknews.com/pbn/wp-content/uploads/2026/05/IMG_20260503_123433_880@-349782201-scaled.jpg',
      excerpt: 'As political realignments continue ahead of 2027, the Renewed Hope Grassroots Initiative strongly supports the re-election of President Bola Tinubu to consolidate his achievements.'
    },
    {
      id: 3,
      source: 'The Guardian',
      title: '2027: Pro-Tinubu group faults single 4-year term',
      url: 'https://guardian.ng/news/2027-pro-tinubu-group-faults-single-4-year-term/',
      date: 'May 3, 2026',
      image: 'https://cdn.guardian.ng/wp-content/uploads/2026/04/IMG-20260422-WA0096.jpg',
      excerpt: 'Stressing the need for continuity, a pro-Tinubu group highlighted why changing leadership mid-way through economic redesign could derail the country\'s progress.'
    },
    {
      id: 4,
      source: 'Vanguard News',
      title: 'Group backs Tinubu’s 2027 re-election, rejects one-term agenda',
      url: 'https://www.vanguardngr.com/2026/05/group-backs-tinubus-2027-re-election-rejects-one-term-agenda/',
      date: 'May 3, 2026',
      image: 'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1778082216/WhatsApp_Image_2026-05-05_at_9.46.29_AM_2_ndejuu.jpg',
      excerpt: 'The Renewed Hope Grassroots Initiative has rejected calls for a one-term presidency, emphasizing that reforms require an eight-year tenure to fully materialize.'
    },
    {
      id: 5,
      source: 'Naija Blitz News',
      title: 'Group rallies behind Tinubu, pushes continuity mandate for 2027',
      url: 'https://naijablitznews.com/2026/05/03/group-rallies-behind-tinubu-pushes-continuity-mandate-for-2027/',
      date: 'May 3, 2026',
      image: 'https://naijablitznews.com/wp-content/uploads/2026/05/20260503_1218521-1000x600.jpg',
      excerpt: 'Dr. Jaafaru Y. Sa\'ad, Director General of RHGI, addresses the press to rally support for President Tinubu and ensure grassroots mobilization ahead of the 2027 elections.'
    },
    {
      id: 6,
      source: 'The Sun',
      title: '2027: Tinubu not afraid of contest – RHGI',
      url: 'https://thesun.ng/2027-tinubu-not-afraid-of-contest-rhgi/',
      date: 'May 3, 2026',
      image: 'https://d1jcea4y7xhp7l.cloudfront.net/wp-content/uploads/2026/04/Bola-Tinubu.png',
      excerpt: 'Clarifying the group\'s stance, the RHGI Director General noted that while asking for continuity, President Tinubu remains unafraid of any electoral contest.'
    },
    {
      id: 7,
      source: 'Voice of Nigeria',
      title: 'Group Commends President Tinubu’s Economic Strides',
      url: 'https://von.gov.ng/group-commends-president-tinubus-economic-strides/',
      date: 'May 3, 2026',
      image: 'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1778082216/WhatsApp_Image_2026-05-05_at_9.46.29_AM_2_ndejuu.jpg',
      excerpt: 'Highlighting Nigeria\'s delisting from the FATF grey list and the rise in foreign reserves, the group lauded the administration\'s significant economic strides.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* HEADER SECTION */}
      <div className="bg-green-900 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dbbw8jsjc/image/upload/v1778125019/Nigerian_police_holding_press_re__202605070436_whkin8.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6 uppercase tracking-widest"
          >
            Press & Media
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-white mb-6 sm:text-6xl"
          >
            News & Emerging Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl leading-8 text-green-50 max-w-2xl mx-auto font-light"
          >
            Stay informed with the latest updates, live activities, and key moments from across the movement.
          </motion.p>
        </div>
      </div>

      {/* VIDEO SECTION - EMERGING NEWS */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-red-500 mb-2">
                <Video className="w-5 h-5" />
                <span className="font-bold uppercase tracking-wider text-sm">RHGI TV</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Emerging Stories</h2>
              <p className="mt-2 text-gray-400">Watch the movement unfold live across the nation.</p>
            </div>
            <a href="#" className="mt-4 md:mt-0 text-green-400 font-semibold hover:text-green-300 flex items-center gap-1">
              View All Videos <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoUpdates.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-800">
                  <video 
                    src={video.videoUrl} 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  />
                </div>
                <h3 className="text-lg font-bold leading-tight group-hover:text-green-400 transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Articles & Reports</h2>
            <div className="w-20 h-1 bg-green-600 mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
            {newsItems.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-start justify-between bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-10 rounded-full bg-green-600/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-x-2 text-sm mb-4 text-gray-500 font-medium">
                    <Calendar className="w-4 h-4 text-green-600" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                    <Link to={post.link}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="line-clamp-3 text-base text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                  
                  <Link to={post.link} className="mt-auto flex items-center gap-x-2 text-sm font-bold text-red-600 group-hover:text-red-700 uppercase tracking-widest relative">
                    Read Story 
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* EXTERNAL NEWS COVERAGE */}
      <section className="py-20 bg-green-50 border-t border-green-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">In The Press</h2>
            <p className="mt-4 text-gray-600 font-medium">Read more about our activities on these platforms.</p>
            <div className="w-16 h-1 bg-green-600 mt-4 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {externalLinks.map((link, index) => {
              const domain = new URL(link.url).hostname.replace('www.', '');
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F0F2F5] rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all group flex flex-col max-w-sm mx-auto w-full"
                >
                  <div className="relative aspect-[1.91/1] w-full bg-gray-200 overflow-hidden">
                    <img 
                      src={link.image} 
                      alt="" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-1">
                      {link.title}
                    </h3>
                    <p className="text-[13px] text-gray-600 line-clamp-3 mb-2 flex-grow">
                      {link.excerpt}
                    </p>
                    <div className="text-[12px] text-gray-500 mt-auto lowercase">
                      {domain}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

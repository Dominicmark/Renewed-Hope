import { motion } from 'motion/react';
import { Calendar, ArrowRight, Play, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import AutoPlayVideo from '../components/AutoPlayVideo';

export default function News() {
  const videoUpdates = [
    {
      id: 1,
      title: 'Our Journey So Far: Highlights from the Tinubu Again Movement',
      videoUrl: 'https://res.cloudinary.com/dbbw8jsjc/video/upload/v1787922133/WhatsApp_Video_2026-08-27_at_7.03.30_PM_gmdeb0.mp4',
    },
    {
      id: 2,
      title: 'Activities on the Ground - Abuja',
      videoUrl: 'https://res.cloudinary.com/dbbw8jsjc/video/upload/v1787761745/WhatsApp_Video_2026-08-26_at_5.27.46_PM_bq0itj.mp4',
      isVertical: true
    },
    {
      id: 3,
      title: 'Grassroots Engagement & Activities',
      videoUrl: 'https://res.cloudinary.com/dbbw8jsjc/video/upload/v1787760875/WhatsApp_Video_2026-08-22_at_8.00.09_PM_dvftx0.mp4',
      isVertical: true
    },
    {
      id: 4,
      title: 'Tinubu Again Movement - Community Highlights',
      videoUrl: 'https://res.cloudinary.com/dbbw8jsjc/video/upload/v1788391490/WhatsApp_Video_2026-09-01_at_2.48.03_PM_2_ddxgnp.mp4',
    },
    {
      id: 5,
      title: 'Grassroots Mobilization Update',
      videoUrl: 'https://res.cloudinary.com/dbbw8jsjc/video/upload/v1788391465/WhatsApp_Video_2026-09-01_at_2.48.03_PM_yv2mc9.mp4',
    },
    {
      id: 6,
      title: 'Local Engagements and Support',
      videoUrl: 'https://res.cloudinary.com/dbbw8jsjc/video/upload/v1788391453/WhatsApp_Video_2026-09-01_at_2.48.02_PM_eswzgi.mp4',
    },
    {
      id: 7,
      title: 'Momentum Across Communities',
      videoUrl: 'https://res.cloudinary.com/dbbw8jsjc/video/upload/v1788391452/WhatsApp_Video_2026-09-01_at_2.48.03_PM_1_s10yso.mp4',
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
                <span className="font-bold uppercase tracking-wider text-sm">Tinubu Again TV</span>
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
                <div className={`relative rounded-2xl overflow-hidden mb-4 bg-gray-800 ${video.isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
                  <AutoPlayVideo 
                    src={video.videoUrl} 
                    className="w-full h-full object-cover"
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

    </div>
  );
}

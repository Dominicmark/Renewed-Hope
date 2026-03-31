import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'RHGI Launches Nationwide Grassroots Mobilization Tour',
      date: 'March 15, 2026',
      excerpt: 'The Renewed Hope Grassroots Initiative kicked off its nationwide tour today, starting with a massive rally in the capital city. Thousands gathered to hear the vision for a united and prosperous future.',
      image: 'https://picsum.photos/seed/rally1/800/600',
      category: 'Campaign Trail'
    },
    {
      id: 2,
      title: 'Youth Empowerment Summit Draws Record Attendance',
      date: 'March 10, 2026',
      excerpt: 'Over 5,000 young professionals and students attended the RHGI Youth Summit, discussing economic opportunities, tech innovation, and civic engagement.',
      image: 'https://picsum.photos/seed/youth/800/600',
      category: 'Empowerment'
    },
    {
      id: 3,
      title: 'Community Townhall: Listening to the Voice of the People',
      date: 'March 5, 2026',
      excerpt: 'Leadership engaged directly with market women, artisans, and local leaders in a 4-hour interactive session aimed at understanding grassroots challenges.',
      image: 'https://picsum.photos/seed/townhall/800/600',
      category: 'Community'
    }
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Latest Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-gray-600"
          >
            Stay informed with updates, activities, and key moments from across the movement.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {newsItems.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="relative w-full">
                <img
                  src={post.image}
                  alt=""
                  className="aspect-[16/9] w-full object-cover bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 hover:bg-blue-100">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-green-600 transition-colors">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <a href="#" className="text-sm font-semibold leading-6 text-red-600 hover:text-red-500 flex items-center gap-1">
                    Read more <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

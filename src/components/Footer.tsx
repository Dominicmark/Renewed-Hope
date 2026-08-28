import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="https://res.cloudinary.com/dbbw8jsjc/image/upload/v1787244780/Tinubuagain_logo_png_m2zizj.png" alt="Tinubu Again Logo" className="h-12 w-auto bg-white p-1 rounded object-contain shrink-0" />
              <div className="flex flex-col justify-center items-stretch text-center">
                <span className="font-black text-xl leading-none text-green-500 tracking-tight">TINUBU AGAIN</span>
                <div className="flex items-center w-full mt-1.5">
                  <div className="flex-grow h-[2px] bg-red-500 rounded-full"></div>
                  <span className="font-bold text-[0.75rem] text-red-500 tracking-widest mx-2 whitespace-nowrap">2027</span>
                  <div className="flex-grow h-[2px] bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              A people-driven movement committed to mobilizing communities, amplifying voices, and supporting leadership that delivers real progress.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/TheRHGI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/rhgrassroots_initiative/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/volunteer" className="text-gray-400 hover:text-white text-sm">Volunteer</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white text-sm">Latest News</Link></li>
              <li><Link to="/donate" className="text-gray-400 hover:text-white text-sm">Support Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/register" className="text-gray-400 hover:text-white text-sm">Join the Movement</Link></li>
              <li><Link to="/volunteer" className="text-gray-400 hover:text-white text-sm">Become a Mobilizer</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400 text-sm">40 Blantyre Cres, Wuse 2, Abuja 900103, Federal Capital Territory</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400 text-sm">08161115161</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400 text-sm">tinubuagainmovement@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Tinubu Again. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

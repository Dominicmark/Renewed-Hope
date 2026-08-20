import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Volunteer', path: '/volunteer' },
  { name: 'Register', path: '/register' },
  { name: 'Donate', path: '/donate' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 sm:h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 sm:gap-4">
              <img src="https://res.cloudinary.com/dbbw8jsjc/image/upload/v1787244780/Tinubuagain_logo_png_m2zizj.png" alt="Tinubu Again Logo" className="h-14 sm:h-16 w-auto object-contain shrink-0" />
              <div className="flex flex-col justify-center items-stretch text-center">
                <span className="font-black text-xl sm:text-2xl leading-none text-green-700 tracking-tight">TINUBU AGAIN</span>
                <div className="flex items-center w-full mt-1 sm:mt-1.5">
                  <div className="flex-grow h-[2px] bg-red-600 rounded-full"></div>
                  <span className="font-bold text-[0.7rem] sm:text-[0.85rem] text-red-600 tracking-widest mx-2 whitespace-nowrap">2027</span>
                  <div className="flex-grow h-[2px] bg-red-600 rounded-full"></div>
                </div>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/register"
              className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              Join Us
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

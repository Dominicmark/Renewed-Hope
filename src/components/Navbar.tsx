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
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
              <img src="/logo.png" alt="RHGI Logo" className="h-10 sm:h-12 w-auto object-contain shrink-0" />
              <div className="flex flex-col justify-center">
                <span className="font-black text-base sm:text-xl leading-none text-gray-900 tracking-tight">RENEWED HOPE</span>
                <span className="font-bold text-[0.5rem] sm:text-[0.65rem] leading-none text-green-700 tracking-[0.15em] mt-1">GRASSROOTS INITIATIVE</span>
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

import { useState } from 'react';
import { Menu, X, Phone, Mail, Search } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+911234567890" className="flex items-center hover:text-emerald-200">
              <Phone size={16} className="mr-1" />
              <span>+91 123 456 7890</span>
            </a>
            <a href="mailto:info@travelindia.com" className="hidden md:flex items-center hover:text-emerald-200">
              <Mail size={16} className="mr-1" />
              <span>info@travelindia.com</span>
            </a>
          </div>
          <div className="text-xs">
            <span>24/7 Customer Support</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-emerald-700">
              Travel<span className="text-teal-600">India</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-700 font-medium transition">Home</a>
            <a href="#packages" className="text-gray-700 hover:text-emerald-700 font-medium transition">Tour Packages</a>
            <a href="#destinations" className="text-gray-700 hover:text-emerald-700 font-medium transition">Destinations</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-700 font-medium transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-700 font-medium transition">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-700 font-medium transition">Contact</a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-emerald-700 transition"
            >
              <Search size={20} />
            </button>
            <a
              href="#contact"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-700 hover:to-teal-700 transition font-medium"
            >
              Book Now
            </a>
          </div>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isSearchOpen && (
          <div className="mt-4 hidden lg:block">
            <input
              type="text"
              placeholder="Search destinations, packages..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        )}

        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-emerald-700 font-medium">Home</a>
            <a href="#packages" className="block text-gray-700 hover:text-emerald-700 font-medium">Tour Packages</a>
            <a href="#destinations" className="block text-gray-700 hover:text-emerald-700 font-medium">Destinations</a>
            <a href="#services" className="block text-gray-700 hover:text-emerald-700 font-medium">Services</a>
            <a href="#about" className="block text-gray-700 hover:text-emerald-700 font-medium">About Us</a>
            <a href="#contact" className="block text-gray-700 hover:text-emerald-700 font-medium">Contact</a>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <a
              href="#contact"
              className="block text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-700 hover:to-teal-700 transition font-medium"
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

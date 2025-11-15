import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Travel<span className="text-emerald-400">India</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for exploring the incredible beauty and diversity of India. Creating memorable journeys since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-emerald-400 transition">About Us</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-emerald-400 transition">Tour Packages</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-emerald-400 transition">Destinations</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-emerald-400 transition">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-400 transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Goa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Kerala</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Rajasthan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Himachal Pradesh</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Ladakh</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Andaman Islands</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Travel Street, Mumbai, Maharashtra, India - 400001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-emerald-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-emerald-400 transition">+91 123 456 7890</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@travelindia.com" className="text-gray-400 hover:text-emerald-400 transition">info@travelindia.com</a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-emerald-500"
                />
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded-r-lg hover:from-emerald-700 hover:to-teal-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TravelIndia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

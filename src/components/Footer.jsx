import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">MyStore</h3>
            <p className="text-sm text-gray-300 mb-4">
              Your one-stop shop for quality products, delivering exceptional value and style.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-white">Shop</Link></li>
              <li><Link to="/categories" className="text-gray-300 hover:text-white">Categories</Link></li>
              <li><Link to="/new-arrivals" className="text-gray-300 hover:text-white">New Arrivals</Link></li>
              <li><Link to="/sale" className="text-gray-300 hover:text-white">Sale</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-white">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-white">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link to="/size-guide" className="text-gray-300 hover:text-white">Size Guide</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-gray-400" />
                <span className="text-sm text-gray-300">support@mystore.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-gray-400" />
                <span className="text-sm text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-gray-400" />
                <span className="text-sm text-gray-300">123 Store Street, City, Country</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest updates on new products and upcoming sales
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0"
              />
              <button 
                className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 sm:rounded-r-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          <p>&copy; 2024 MyStore. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
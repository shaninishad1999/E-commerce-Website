import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Globe, 
  Heart, 
  Package, 
  ChevronDown 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setDropdownOpen(null);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  // Handle search button click to focus input
  const handleSearchClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigationLinks = [
    { name: 'Discover', href: '/discover', subLinks: ['Trending', 'New Arrivals', 'Best Sellers'] },
    { name: 'Products', href: '/products', subLinks: ['Men', 'Women', 'Kids'] },
    { name: 'Collections', href: '/collections', subLinks: ['Summer', 'Winter', 'Exclusive'] },
    { name: 'Deals', href: '/deals', subLinks: ['Flash Sale', 'Clearance', 'Discounted'] }
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo with added margin */}
        <div className="flex items-center mr-6">
          <Link to="/" className="text-3xl font-black text-indigo-700 tracking-tight">
            Nexus
          </Link>
        </div>

        {/* Navigation Links */}
        <div ref={dropdownRef} className="hidden md:flex items-center space-x-6">
          {navigationLinks.map((link, index) => (
            <div key={link.name} className="relative group">
              <button
                onClick={() => toggleDropdown(index)}
                className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
              >
                {link.name} <ChevronDown className="ml-1" size={18} />
              </button>
              {dropdownOpen === index && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-40 py-2 z-50">
                  {link.subLinks.map((subLink) => (
                    <button
                      key={subLink}
                      onClick={() => handleNavigation(`/${link.name.toLowerCase()}/${subLink.toLowerCase().replace(' ', '-')}`)}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      {subLink}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-6 max-w-xl relative">
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products, brands and more"
            className="w-full pl-4 pr-12 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
          <button 
            onClick={handleSearchClick}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-indigo-500 text-white p-2 rounded-full"
          >
            <Search size={18} />
          </button>
        </div>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-5">
          <Link to="/wishlist" className="text-gray-600 hover:text-indigo-600 relative">
            <Heart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
          </Link>

          <Link to="/orders" className="text-gray-600 hover:text-indigo-600 relative">
            <Package size={24} />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </Link>

          <Link to="/account" className="text-gray-600 hover:text-indigo-600">
            <User size={24} />
          </Link>

          <Link to="/cart" className="text-gray-600 hover:text-indigo-600 relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">5</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-indigo-600 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          {navigationLinks.map((link) => (
            <div key={link.name} className="px-2 py-2">
              <button 
                onClick={() => handleNavigation(link.href)} 
                className="text-gray-700 block px-3 py-2 rounded-md w-full text-left font-semibold"
              >
                {link.name}
              </button>
              <div className="pl-6 space-y-1">
                {link.subLinks.map((subLink) => (
                  <button
                    key={subLink}
                    onClick={() => handleNavigation(`/${link.name.toLowerCase()}/${subLink.toLowerCase().replace(' ', '-')}`)}
                    className="block px-3 py-1 text-gray-600 hover:bg-gray-100 w-full text-left"
                  >
                    {subLink}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
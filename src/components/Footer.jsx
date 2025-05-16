import React from "react";
import { FaShieldAlt, FaLock, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-gray-900 to-gray-800 border-t border-gray-800">
      {/* Trust Badges */}
      <div className="py-5 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 text-sm">
            <div className="flex items-center text-gray-400">
              <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
              Trusted by traders across the globe
            </div>
            <div className="flex items-center text-gray-400">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              Partnered with top firms
            </div>
            <div className="flex items-center text-gray-400">
              <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
              Verified daily updates
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white p-1 rounded-full mr-3">
                <FaLink className="text-gray-900 text-xl" />
              </div>
              <span className="text-white font-bold text-2xl">
                PropFirm<span className="text-teal-400">Nation</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted source for exclusive prop firm discounts and broker
              deals. We help traders access more capital with better terms.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Get the latest deals and trading tips straight to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-teal-500 w-full"
              />
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                Join
              </button>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
              Legal
            </h3>
            <ul className="space-y-3">
              <Link to="/privacy">
                <li className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <FaLock className="mr-2 text-xs" /> Privacy Policy
                </li>
              </Link>

              <Link to="/term">
                <li className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <FaShieldAlt className="mr-2 text-xs" /> Terms of Service
                </li>
              </Link>
              <Link to="/affiliate">
                <li className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Affiliate Disclosure
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
            <div className="mb-2 md:mb-0">
              © {new Date().getFullYear()} PropFirmNation. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

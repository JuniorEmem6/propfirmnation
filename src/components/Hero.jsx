import React from 'react';
import { FaArrowRight, FaCheck, FaPercentage, FaHandHoldingUsd, FaShieldAlt, FaChartLine } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-teal-500 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-600 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
              <FaChartLine className="mr-2" /> TRADER APPROVED
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-teal-400 to-indigo-400">Premium Access</span> to Prop Trading Accounts
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg">
              Unlock exclusive discounts, higher profit splits, and special bonuses through our verified partner network.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="http://wa.me/2347039729635" 
                className="bg-linear-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-teal-500/20"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </a>
              <a 
                href="#how-it-works" 
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 border border-gray-700 flex items-center justify-center hover:border-gray-600"
              >
                How It Works
              </a>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center text-teal-400">
                <div className="p-1 mr-2 rounded-full bg-teal-500/20">
                  <FaCheck className="text-xs" />
                </div>
                <span>Verified Discounts</span>
              </div>
              <div className="flex items-center text-teal-400">
                <div className="p-1 mr-2 rounded-full bg-teal-500/20">
                  <FaCheck className="text-xs" />
                </div>
                <span>Instant Approvals</span>
              </div>
              <div className="flex items-center text-teal-400">
                <div className="p-1 mr-2 rounded-full bg-teal-500/20">
                  <FaCheck className="text-xs" />
                </div>
                <span>Exclusive Bonuses</span>
              </div>
            </div>
          </div>
          
          {/* Stats cards */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">
                Why <span className="text-teal-400">Traders</span> Choose Us
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-gray-800/50 hover:bg-gray-800/70 p-5 rounded-lg border border-gray-700/30 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400 mr-4">
                      <FaPercentage className="text-xl" />
                    </div>
                    <h4 className="font-bold text-white">Higher Discounts</h4>
                  </div>
                  <p className="text-sm text-gray-400">Save 10-80% on evaluation fees with our exclusive codes</p>
                </div>
                
                <div className="bg-gray-800/50 hover:bg-gray-800/70 p-5 rounded-lg border border-gray-700/30 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 mr-4">
                      <FaHandHoldingUsd className="text-xl" />
                    </div>
                    <h4 className="font-bold text-white">Better Payouts</h4>
                  </div>
                  <p className="text-sm text-gray-400">Up to 90% profit splits through our partnerships</p>
                </div>
                
                <div className="bg-gray-800/50 hover:bg-gray-800/70 p-5 rounded-lg border border-gray-700/30 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400 mr-4">
                      <FaShieldAlt className="text-xl" />
                    </div>
                    <h4 className="font-bold text-white">Vetted Firms</h4>
                  </div>
                  <p className="text-sm text-gray-400">Only reputable firms with proven payout histories</p>
                </div>
                
                <div className="bg-gray-800/50 hover:bg-gray-800/70 p-5 rounded-lg border border-gray-700/30 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 mr-4">
                      <FaCheck className="text-xl" />
                    </div>
                    <h4 className="font-bold text-white">Priority Support</h4>
                  </div>
                  <p className="text-sm text-gray-400">Dedicated help with account setup and challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust indicators */}
    </section>
  );
}
import React from 'react';
import { FaRocket, FaChartLine, FaHandshake } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
   <>
   <Header />
   <div className="bg-linear-to-b from-gray-900 to-gray-800 min-h-screen text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 bg-teal-500 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-600 rounded-full filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              About <span className="bg-clip-text text-transparent bg-linear-to-r from-teal-400 to-indigo-400">PropFirmNation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your trusted gateway to proprietary trading opportunities and exclusive benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-3">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-teal-400 to-indigo-400">
              Our Mission & Values
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-xl border border-gray-700 transition-all duration-300">
              <div className="text-teal-400 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-bold mb-3">Empower Traders</h3>
              <p className="text-gray-400">
                We believe every trader deserves access to capital regardless of their background. Our platform levels the playing field.
              </p>
            </div>
            
            <div className="bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-xl border border-gray-700 transition-all duration-300">
              <div className="text-indigo-400 text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparency First</h3>
              <p className="text-gray-400">
                No hidden fees or misleading claims. We provide clear, accurate information so you can make informed decisions.
              </p>
            </div>
            
            <div className="bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-xl border border-gray-700 transition-all duration-300">
              <div className="text-teal-400 text-3xl mb-4">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold mb-3">Value Creation</h3>
              <p className="text-gray-400">
                We negotiate exclusive deals you won't find elsewhere, creating real value for our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-linear-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Prop Trading Journey?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of traders who've unlocked more capital and better terms through our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="http://wa.me/2347039729635" 
                className="bg-linear-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Our Team
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </div>
   <Footer />
   </>
  );
};

export default AboutUs;
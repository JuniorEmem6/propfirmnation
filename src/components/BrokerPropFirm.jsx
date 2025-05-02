import React from 'react';
import { FaExternalLinkAlt, FaPercentage, FaStar, FaMoneyBillWave, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ExnessLogo from "../assets/exness.jpg"
import Headway from "../assets/headway.jpeg"
import Maven from "../assets/maven.png"
import FundedNext from "../assets/fundednext.png"
import FTMO from "../assets/ftmo.jpeg"
import InstantFunding from "../assets/instantfunding_logo.jpeg"
import FundedPro from "../assets/funderpro.png"


const PropFirmsBrokersPage = () => {
  const propFirms = [
    {
      id: 2,
      name: 'FundedNext',
      logo: FundedNext,
      description: 'Empowering Promising Trader Worldwide',
      rating: 4.6,
      discount: 'ERAGON',
      discountPercentage: 110,
      minDeposit: '$59',
      profitSplit: '90%',
      link: 'https://fundednext.com/?fpr=aniekan61',
      featured: false,
      address: '/fundednext'
    },
    {
      id: 1,
      name: 'FTMO',
      logo: FTMO,
      description: 'Grow and Monetize you demo trading',
      rating: 4.8,
      discount: 'N/A',
      discountPercentage: 0,
      minDeposit: '$89',
      profitSplit: 'Up to 90%',
      link: 'https://ftmo.com/?ref=ERAGONJR',
      address: "https://ftmo.com/?ref=ERAGONJR",
      featured: true,
    },
    {
      id: 3,
      name: 'Maven',
      logo: Maven,
      description: 'Easiest Forex Prop firm to get funded.',
      rating: 4.7,
      discount: 'n/a',
      discountPercentage: 15,
      minAccount: '$13',
      profitSplit: 'Up to 80%',
      link: 'https://maventrading.com/?ref=eragonjnr8%40gmail.com',
      address: 'https://maventrading.com/?ref=eragonjnr8%40gmail.com',
      featured: true,
    },
    {
      id: 4,
      name: 'Instant Funding',
      logo: InstantFunding,
      description: 'Instant execution, payouts, and support for those who break barriers.',
      rating: 4.5,
      discount: 'ERAGON',
      discountPercentage: "Up to 20%",
      minAccount: '$44',
      profitSplit: '90%',
      link: 'https://instantfunding.io/?partner=3325',
      address: "/instantfunding",
      featured: true,
    },
     {
      id: 5,
      name: 'Funderpro',
      logo: FundedPro,
      description: 'We look for talented traders to manage our capital.',
      rating: 4.5,
      discount: 'ERAGON',
      discountPercentage: "Up to 20%",
      minAccount: '$71',
      profitSplit: '45%',
      link: 'https://funderpro.cxclick.com/visit/?bta=38385&brand=funderpro',
      address: "/funderpro",
      featured: true,
    },
  ];

  const brokers = [
    {
      id: 1,
      name: 'Exness',
      logo: ExnessLogo,
      description: 'Raw spread forex broker with ultra-low latency execution.',
      rating: 4.7,
      bonus: 'N/A',
      minDeposit: '$15',
      regulation: 'ASIC, CySEC',
      link: 'https://one.exnesstrack.org/a/c_s2su429y4l',
      featured: true,
    },
    {
      id: 2,
      name: 'Headway',
      logo: Headway,
      description: 'Award-winning broker with tight spreads and fast execution.',
      rating: 4.8,
      bonus: '111 Bonus',
      minDeposit: '$2',
      regulation: 'FCA, ASIC',
      link: 'https://headway.partners/user/signup?hwp=498720',
      featured: false,
    }
  ];

  return (
    <div className="bg-linear-to-b from-gray-900 to-gray-800 min-h-screen text-gray-200">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">
            Prop Firms & Brokers
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-12">
          Compare the best proprietary trading firms and brokers with exclusive discounts and bonuses available only through our links.
        </p>
        
        {/* Filter/Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search firms or brokers..."
              className="w-full py-4 px-6 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Prop Firms Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl text-gray-500 font-bold flex items-center">
              <FaMoneyBillWave className="text-teal-400 mr-3" />
              Proprietary Trading Firms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propFirms.map((firm) => (
             <Link to={firm.address}>
              <div 
                key={firm.id} 
                className={`bg-gray-800 rounded-xl overflow-hidden border ${firm.featured ? 'border-teal-500/50' : 'border-gray-700'} hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300`}
              >
                {firm.featured && (
                  <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white text-xs font-bold px-3 py-1 absolute top-3 left-3 rounded-full">
                    Featured
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <img src={firm.logo} alt={firm.name} className="h-10 object-contain" />
                    <div className="flex items-center bg-gray-900 px-2 py-1 rounded">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-medium">{firm.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{firm.name}</h3>
                  <p className="text-gray-400 mb-4">{firm.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-gray-900/50 p-2 rounded-lg">
                      <p className="text-xs text-gray-400">Min Deposit</p>
                      <p className="font-medium">{firm.minDeposit}</p>
                    </div>
                    <div className="bg-gray-900/50 p-2 rounded-lg">
                      <p className="text-xs text-gray-400">Profit Split</p>
                      <p className="font-medium">{firm.profitSplit}</p>
                    </div>
                  </div>
                  
                  {firm.discount && (
                    <div className="bg-gradient-to-r from-teal-500/10 to-teal-500/5 border border-teal-500/30 rounded-lg p-3 mb-5">
                      <div className="flex items-center">
                        <FaPercentage className="text-teal-400 mr-2" />
                        <div>
                          <p className="text-xs text-gray-400">Discount Code</p>
                          <div className="flex items-center">
                            <p className="font-bold text-teal-400 mr-2">{firm.discount}</p>
                            <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-0.5 rounded">
                              -{firm.discountPercentage}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
             </Link>
            ))}
          </div>
        </section>

        {/* Brokers Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl text-gray-500 font-bold flex items-center">
              <FaUserShield className="text-indigo-400 mr-3" />
              Recommended Brokers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brokers.map((broker) => (
              <div 
                key={broker.id} 
                className={`bg-gray-800 rounded-xl overflow-hidden border ${broker.featured ? 'border-indigo-500/50' : 'border-gray-700'} hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300`}
              >
                {broker.featured && (
                  <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-xs font-bold px-3 py-1 absolute top-3 left-3 rounded-full">
                    Featured
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <img src={broker.logo} alt={broker.name} className="h-10 object-contain" />
                    <div className="flex items-center bg-gray-900 px-2 py-1 rounded">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-medium">{broker.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{broker.name}</h3>
                  <p className="text-gray-400 mb-4">{broker.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-gray-900/50 p-2 rounded-lg">
                      <p className="text-xs text-gray-400">Min Deposit</p>
                      <p className="font-medium">{broker.minDeposit}</p>
                    </div>
                    <div className="bg-gray-900/50 p-2 rounded-lg">
                      <p className="text-xs text-gray-400">Regulation</p>
                      <p className="font-medium text-sm">{broker.regulation}</p>
                    </div>
                  </div>
                  
                  {broker.bonus && (
                    <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-500/5 border border-indigo-500/30 rounded-lg p-3 mb-5">
                      <div className="flex items-center">
                        <FaPercentage className="text-indigo-400 mr-2" />
                        <div>
                          <p className="text-xs text-gray-400">Special Bonus</p>
                          <p className="font-bold text-indigo-400">{broker.bonus}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <a
                    href={broker.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    Visit Website <FaExternalLinkAlt className="ml-2 text-sm" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-20 bg-linear-to-r from-gray-800 to-gray-900 border border-gray-300 rounded-xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            We partner with additional proprietary trading firms and brokers. Contact us for personalized recommendations based on your trading style.
          </p>
          <button className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
            Contact Our Team <FaExternalLinkAlt className="ml-2 text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropFirmsBrokersPage;
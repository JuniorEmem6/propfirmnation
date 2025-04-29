import React from 'react';
import { FaCopy, FaExternalLinkAlt, FaPercentage, FaStar, FaMoneyBillWave, FaChartLine, FaUserCheck, FaShieldAlt, FaCheck } from 'react-icons/fa';

const PropFirmDetail = ({ 
  firmName,
  logo,
  rating,
  discountCode,
  discountPercentage,
  minDeposit,
  profitSplit,
  description,
  link,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(discountCode);
    alert(`Copied ${discountCode} to clipboard!`);
  };

  return (
    <div className="bg-linear-to-b from-gray-900 to-gray-800 min-h-screen text-gray-100">
      <div className="container mx-auto px-4 py-12">

        {/* Main Card */}
        <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl mb-12">
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column */}
              <div className="md:w-1/3">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 flex justify-center items-center mb-6">
                  <img src={logo} alt={firmName} className="h-24 object-contain" />
                </div>
                
                <div className="bg-gradient-to-r from-teal-600/10 to-teal-600/5 border border-teal-500/30 rounded-lg p-5 mb-6">
                  <h3 className="font-bold text-lg text-teal-400 mb-3 flex items-center">
                    <FaPercentage className="mr-2" /> Exclusive Discount
                  </h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold">{discountCode}</span>
                    <button 
                      onClick={copyToClipboard}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded text-sm flex items-center transition-colors"
                    >
                      <FaCopy className="mr-1" /> Copy
                    </button>
                  </div>
                  <p className="text-sm text-gray-400">
                    {discountPercentage}% off evaluation fees • 
                    {/* {couponExpiry || 'Limited time offer'} */}
                  </p>
                </div>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 mb-6"
                >
                  Visit {firmName} <FaExternalLinkAlt className="ml-2 text-sm" />
                </a>

                <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
                  <h4 className="font-bold mb-3 flex items-center">
                    <FaStar className="text-yellow-400 mr-2" /> Quick Stats
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rating:</span>
                      <span className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        {rating}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Min Deposit:</span>
                      <span>{minDeposit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Profit Split:</span>
                      <span>{profitSplit}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold mb-2">{firmName}</h1>
                <div className="flex items-center text-gray-400 mb-6">
                  <FaShieldAlt className="text-teal-400 mr-2" />
                  Verified Partner • Updated {new Date().toLocaleDateString()}
                </div>

                <p className="text-lg text-gray-300 mb-8">{description}</p>

                {/* <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <FaChartLine className="text-teal-400 mr-2" /> Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-teal-500/10 p-1 rounded-full mr-3 mt-0.5">
                          <FaCheck className="text-teal-400 text-xs" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* {steps.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <FaUserCheck className="text-indigo-400 mr-2" /> How To Get Started
                    </h2>
                    <div className="space-y-4">
                      {steps.map((step, index) => (
                        <div key={index} className="flex">
                          <div className="bg-indigo-500/10 text-indigo-400 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </div>
                          <p>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )} */}

                <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <FaMoneyBillWave className="text-teal-400 mr-2" /> Important Notes
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex">
                      <div className="bg-teal-500/10 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <FaCheck className="text-teal-400 text-xs" />
                      </div>
                      <span>Use our link to ensure your discount is applied</span>
                    </li>
                    <li className="flex">
                      <div className="bg-teal-500/10 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <FaCheck className="text-teal-400 text-xs" />
                      </div>
                      <span>Coupon code valid for new accounts only</span>
                    </li>
                    <li className="flex">
                      <div className="bg-teal-500/10 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <FaCheck className="text-teal-400 text-xs" />
                      </div>
                      <span>Contact us if you encounter any issues</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PropFirmDetail;
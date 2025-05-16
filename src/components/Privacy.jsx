import React from 'react';
import { FiShield, FiLock, FiMail, FiDatabase, FiUser } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Privacy Policy</h1>
      
      <div className="space-y-6 text-gray-700">
        <p>
          At <span className="font-bold">PropFirmNation</span>, we respect your privacy. When you subscribe to our newsletter or visit our site, we may collect your name, email, and usage data to improve our services and communicate with you.
        </p>

        <p>
          We also use affiliate links, which means we may earn a commission if you click and sign up or purchase from our partners. These third-party sites have their own privacy policies.
        </p>

        <p>
          We use cookies to enhance your browsing experience, and you can disable them anytime via your browser settings.
        </p>

        <p>
          Your information is kept secure and is never sold or shared without your consent. You can unsubscribe or request data removal at any time.
        </p>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Contact Information</h2>
          <p>
            For questions about our privacy practices, please contact us at:
          </p>
          <p className="mt-2">
            <span className="font-medium">Email:</span> <a href="mailto:propfirmnation@gmail.com" className="text-blue-600 hover:underline">propfirmnation@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
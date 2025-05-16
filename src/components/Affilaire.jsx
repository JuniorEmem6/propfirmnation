import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";

const AffiliateDisclosure = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
              Affiliate Disclosure
            </h1>

            <div className="space-y-6 text-gray-700">
              <p>
                <span className="font-bold">PropFirmNation</span> is a
                participant in various affiliate marketing programs. This means
                that when you click on certain links and sign up or make a
                purchase through them, we may earn a commission at no additional
                cost to you.
              </p>

              <p>
                We only promote firms and services that we believe offer genuine
                value to traders. However, we encourage you to do your own due
                diligence before engaging with any prop firm or trading
                platform.
              </p>

              <p>
                Affiliate commissions help support our work and allow us to
                continue providing helpful content and recommendations to our
                audience.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Contact Us
                </h2>
                <p>
                  If you have questions about our Terms of Use or Affiliate
                  Disclosure, please contact us at:
                </p>
                <p className="mt-2">
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:propfirmnation@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    propfirmnation@gmail.com
                  </a>
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

export default AffiliateDisclosure;

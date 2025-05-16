import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Terms and Conditions
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Terms of Use
          </h2>
          <p className="mb-4 text-gray-700">
            Welcome to <span className="font-bold">PropFirmNation</span>, your
            trusted resource for discovering proprietary trading firms and
            exclusive trading opportunities. By accessing or using our website,
            you agree to comply with and be bound by the following{" "}
            <span className="font-bold">Terms of Use</span>. If you do not agree
            with any part of these terms, please refrain from using our website.
          </p>
        </div>

        <div className="space-y-6">
          {/* Section 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              1. Use of Website
            </h3>
            <p className="text-gray-700">
              PropFirmNation provides content for informational purposes only.
              While we strive to ensure the accuracy of the information shared,
              we do not guarantee its completeness, reliability, or timeliness.
              Any reliance on the material provided is at your own risk.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              2. Eligibility
            </h3>
            <p className="text-gray-700">
              By using this website, you confirm that you are at least{" "}
              <span className="font-bold">18 years of age</span> and legally
              capable of entering into binding agreements.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              3. Intellectual Property
            </h3>
            <p className="text-gray-700">
              All content, including logos, graphics, and written materials on
              PropFirmNation, is the property of PropFirmNation or used with
              proper authorization. Unauthorized reproduction, distribution, or
              modification is strictly prohibited.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              4. External Links
            </h3>
            <p className="text-gray-700">
              PropFirmNation may include links to third-party websites, such as
              proprietary trading firms or financial service providers. We are
              not responsible for the content, terms, or privacy practices of
              these external sites.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              5. No Financial Advice
            </h3>
            <p className="text-gray-700">
              The information provided on PropFirmNation is for educational and
              informational purposes only and{" "}
              <span className="font-bold">
                does not constitute financial, investment, or trading advice
              </span>
              . Always conduct independent research or consult a licensed
              professional before making financial decisions.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              6. Limitation of Liability
            </h3>
            <p className="text-gray-700">
              PropFirmNation and its owners shall not be liable for any{" "}
              <span className="font-bold">
                direct, indirect, incidental, or consequential damages
              </span>{" "}
              resulting from the use of this website or any third-party
              platforms linked herein.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;

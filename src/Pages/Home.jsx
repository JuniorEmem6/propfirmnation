import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PropFirmsBrokersPage from "../components/BrokerPropFirm";
import Footer from "../components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* <Hero /> */}
      <PropFirmsBrokersPage />
      <Footer />
    </div>
  );
};

export default App;

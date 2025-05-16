import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FundePro from "./Pages/Funderpro";
import FundedNext from "./Pages/FundedNext";
import InstantFunding from "./Pages/Instant";
import AboutUs from "./Pages/About";
import AffiliateDisclosure from "./components/Affilaire";
import PrivacyPolicy from "./components/Privacy";
import TermsAndConditions from "./components/term";

const App = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/funderpro" element={<FundePro />} />
          <Route path="/fundednext" element={<FundedNext />} />
          <Route path="/instantfunding" element={<InstantFunding />} />
          <Route path="/affiliate" element={<AffiliateDisclosure/>} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/term" element={<TermsAndConditions />} />

        </Routes>
      </BrowserRouter>

  )
}

export default App


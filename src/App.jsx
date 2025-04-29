import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import FundePro from "./Pages/Funderpro";
import FundedNext from "./Pages/FundedNext";
import InstantFunding from "./Pages/Instant";
import AboutUs from "./Pages/About";


const App = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/funderpro" element={<FundePro />} />
          <Route path="/fundednext" element={<FundedNext />} />
          <Route path="/instantfunding" element={<InstantFunding />} />

        </Routes>
      </BrowserRouter>

  )
}

export default App


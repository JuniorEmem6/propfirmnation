import PropFirmDetail from "../components/Coupon";
import Header from "../components/Header";
import Footer from "../components/Footer"
import FundedPro from "../assets/funderpro.png"


const FundePro = () => {
  return (
    <>
    <Header />
    <PropFirmDetail
      firmName="Funderpro"
      logo={FundedPro}
      rating={4.8}
      discountCode="ERAGON"
      discountPercentage={20}
      minDeposit="$71"
      profitSplit="Up to 45%"
      description="We look for talented traders to manage our capital."
    //   features={[
    //     "Up to $400,000 funding",
    //     "90% profit split",
    //     "Free retries available",
    //     "No time limit on challenges",
    //     "Monthly payouts",
    //   ]}
      link="https://funderpro.cxclick.com/visit/?bta=38385&brand=funderpro"
    //   couponExpiry="Expires Dec 31, 2023"
    //   steps={[
    //     "Click our affiliate link to visit FTMO",
    //     "Choose your challenge type and account size",
    //     "Enter PROPFIRM20 at checkout",
    //     "Complete verification and start trading",
    //   ]}
    />
    <Footer />
    </>
  );
};

export default FundePro

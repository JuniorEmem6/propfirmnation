import PropFirmDetail from "../components/Coupon";
import Header from "../components/Header";
import Footer from "../components/Footer"
import FundedNextLogo from "../assets/fundednext.png"


const FundedNext = () => {
  return (
    <>
    <Header />
    <PropFirmDetail
      firmName="FundedNext"
      logo={FundedNextLogo}
      rating={4.8}
      discountCode="ERAGON"
      discountPercentage={20}
      minDeposit="$59"
      profitSplit="Up to 15%"
      description="Empowering Promising Trader Worldwide"
      // features={[
      //   "Up to $400,000 funding",
      //   "90% profit split",
      //   "Free retries available",
      //   "No time limit on challenges",
      //   "Monthly payouts",
      // ]}
      link="https://fundednext.com/?fpr=aniekan61"
      // couponExpiry="Expires Dec 31, 2023"
      // steps={[
      //   "Click our affiliate link to visit FTMO",
      //   "Choose your challenge type and account size",
      //   "Enter PROPFIRM20 at checkout",
      //   "Complete verification and start trading",
      // ]}
    />
    <Footer />
    </>
  );
};

export default FundedNext
import PropFirmDetail from "../components/Coupon";
import Header from "../components/Header";
import Footer from "../components/Footer"
import InstantFund from "../assets/instantfunding_logo.jpeg"


const InstantFunding = () => {
  return (
    <>
    <Header />
    <PropFirmDetail
      firmName="Instant Funding"
      logo={InstantFund}
      rating={4.8}
      discountCode="ERAGON"
      discountPercentage={20}
      minDeposit="$44"
      profitSplit="Up to 90%"
      description="Instant execution, payouts, and support for those who break barriers."
      // features={[
      //   "Up to $400,000 funding",
      //   "90% profit split",
      //   "Free retries available",
      //   "No time limit on challenges",
      //   "Monthly payouts",
      // ]}
      link="https://ftmo.com/?ref=YOURCODE"
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

export default InstantFunding

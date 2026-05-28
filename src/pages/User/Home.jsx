import "react";
import FeaturedCategories from "../../components/FeaturedCategories";
import SubNav from "../../components/SubNav";
import Banner from "../../components/Banner";
import TopSellingProducts from "../../components/TopSellingProducts";
import OurBrands from "../../components/OurBrands";
import Honey from "../../components/Honey";
import ComboDeals from "../../components/ComboDeals";
import MangoPreOrder from "../../components/MangoPreOrder";
import PremiumDates from "../../components/PremiumDates";
import CookingEssentials from "../../components/CookingEssentials";
import OrganicCertified from "../../components/OrganicCertified";
import AllProducts from "../../components/AllProducts";
import CustomerReview from "../../components/CustomerReview";
import FloatingCart from "../../shared/FloatingCart ";
import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner1.png";
const Home = () => {
  return (
    <div>
      <SubNav />
      <div className="container mt-5 mx-auto">
        <Banner />
      </div>
      <FeaturedCategories />
      <div>
        <TopSellingProducts />
      </div>
      <OurBrands />
      <div className="container mt-5 mx-auto">
        <Honey />
      </div>
      <div className="container mt-5 mx-auto">
        <ComboDeals />
      </div>
      <div className="container mt-5 mx-auto">
        <MangoPreOrder />
      </div>
      <div className="container mt-5 mx-auto">
        <PremiumDates />
      </div>
      {/* Banner Image */}
      <div className="container mt-5 mx-auto">
        <img
          className="w-full h-full rounded-2xl p-2"
          src={banner1}
          alt={banner2}
        />
      </div>
      <div className="container mt-5 mx-auto">
        <CookingEssentials />
      </div>
      <div className="container mt-5 mx-auto">
        <OrganicCertified />
      </div>
      <div className="container mt-5 mx-auto">
        <AllProducts />
      </div>
      <div className="container mt-5 mx-auto">
        <CustomerReview />
      </div>
      <FloatingCart />
    </div>
  );
};

export default Home;

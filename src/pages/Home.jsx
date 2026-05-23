import "react";
import SubNav from "../components/SubNav";
import Banner from "../components/Banner";
import FeaturedCategories from "../components/FeaturedCategories";
import TopSellingProducts from "../components/TopSellingProducts";
import OurBrands from "../components/OurBrands";
//dsd
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
    </div>
  );
};

export default Home;

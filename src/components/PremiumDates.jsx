import useProductsByCategory from "../hooks/useProductsByCategory";
import ProductSlider from "../shared/ProductSlider";
import Title from "../shared/Title";

const PremiumDates = () => {
  const {
    products: khejurProducts,
    loading,
    error,
  } = useProductsByCategory("dates");
  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  return (
    <div>
      <Title
        title={"Premium Dates"}
        to={"/PremiumDates"}
        toTitle={"View All Items"}
      />
      <ProductSlider products={khejurProducts} />
    </div>
  );
};

export default PremiumDates;

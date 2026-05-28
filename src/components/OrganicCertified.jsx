import useProductsByCategory from "../hooks/useProductsByCategory";
import ProductSlider from "../shared/ProductSlider";
import Title from "../shared/Title";

const OrganicCertified = () => {
  const {
    products: organicCertifiedProducts,
    loading,
    error,
  } = useProductsByCategory("spices");
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
        title={"Organic Certified"}
        toTitle={"Vew All Items"}
        to={"/OrganicCertified"}
      />
      <ProductSlider products={organicCertifiedProducts} />
    </div>
  );
};

export default OrganicCertified;

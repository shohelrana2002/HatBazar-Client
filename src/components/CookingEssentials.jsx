import useProductsByCategory from "../hooks/useProductsByCategory";
import ProductSlider from "../shared/ProductSlider";
import Title from "../shared/Title";

const CookingEssentials = () => {
  const {
    products: cookingEssentialsProducts,
    loading,
    error,
  } = useProductsByCategory("oil");
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
        title={"Cooking Essentials"}
        toTitle={"View All Items"}
        to={"/CookingEssentials"}
      />
      <ProductSlider products={cookingEssentialsProducts} />
    </div>
  );
};

export default CookingEssentials;

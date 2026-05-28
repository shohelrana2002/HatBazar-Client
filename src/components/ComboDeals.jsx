import ProductSlider from "../shared/ProductSlider";
import Title from "../shared/Title";
import useProductsByCategory from "../hooks/useProductsByCategory";

const ComboDeals = () => {
  const {
    products: comboProducts,
    loading,
    error,
  } = useProductsByCategory("combo");

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
    <div className="rounded-2xl bg-orange-200/60 p-2">
      <Title
        title={"🎁 Exclusive Combo Deals"}
        toTitle={"View All Combo"}
        to={"/combos"}
      />

      <ProductSlider products={comboProducts} />
    </div>
  );
};

export default ComboDeals;

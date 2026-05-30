import useProductsByCategory from "../hooks/useProductsByCategory";
import ProductSlider from "../shared/ProductSlider";
import Title from "../shared/Title";

const MangoPreOrder = () => {
  const {
    products: mangoProducts,
    loading,
    error,
  } = useProductsByCategory("mango");
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
        title={"Mango (Pre-Order)"}
        to={"/MangoPreOrder"}
        toTitle={"View All Items"}
      />
      <ProductSlider products={mangoProducts} />
    </div>
  );
};

export default MangoPreOrder;

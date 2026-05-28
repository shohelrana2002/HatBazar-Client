import useProductsByCategory from "../hooks/useProductsByCategory";
import ProductSlider from "../shared/ProductSlider";
import Title from "../shared/Title";

const Honey = () => {
  const { products: data, loading, error } = useProductsByCategory("honey");
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
        title={"All Natural Honey"}
        to={"allHoney"}
        toTitle={"Vew All Items"}
      />
      <ProductSlider products={data} />
    </div>
  );
};

export default Honey;

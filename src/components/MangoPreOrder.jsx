import ProductSlider from "../shared/ProductSlider";
import Title from "../shared/Title";
const mangoProducts = [
  {
    id: 1,
    name: "Premium Himsagar Mango",
    to: "/premium-himsagar-mango",
    image: "https://picsum.photos/500?random=21",
    price: 2200,
    offeredPrice: 1990,
    save: "9.5%",
    badge: "Pre Order",
  },

  {
    id: 2,
    name: "Rajshahi Langra Mango",
    to: "/rajshahi-langra-mango",
    image: "https://picsum.photos/500?random=22",
    price: 2500,
    offeredPrice: 2250,
    save: "10%",
    badge: "Pre Order",
  },

  {
    id: 3,
    name: "Khirsapat Mango Box",
    to: "/khirsapat-mango-box",
    image: "https://picsum.photos/500?random=23",
    price: 2800,
    offeredPrice: 2490,
    save: "11%",
    badge: "Pre Order",
  },

  {
    id: 4,
    name: "Organic Amrapali Mango",
    to: "/organic-amrapali-mango",
    image: "https://picsum.photos/500?random=24",
    price: 2000,
    offeredPrice: 1790,
    save: "10.5%",
    badge: "Pre Order",
  },

  {
    id: 5,
    name: "Mixed Deshi Mango Combo",
    to: "/mixed-deshi-mango-combo",
    image: "https://picsum.photos/500?random=25",
    price: 3200,
    offeredPrice: 2890,
    save: "9.7%",
    badge: "Pre Order",
  },
];

const MangoPreOrder = () => {
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

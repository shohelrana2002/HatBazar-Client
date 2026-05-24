import ProductSlider from "../shared/ProductSlider";
import Title from "../shared/Title";
const comboProducts = [
  {
    id: 1,
    name: "EID Combo -1",
    to: "/combo-1",
    image: "https://picsum.photos/500?random=11",
    price: 1640,
    offeredPrice: 1500,
    save: "10.3%",
    badge: "Combo Offer",
  },

  {
    id: 2,
    name: "EID Combo -2",
    to: "/combo-2",
    image: "https://picsum.photos/500?random=12",
    price: 2230,
    offeredPrice: 2000,
    save: "11%",
    badge: "Combo Offer",
  },

  {
    id: 3,
    name: "EID Combo -3",
    to: "/combo-3",
    image: "https://picsum.photos/500?random=13",
    price: 2810,
    offeredPrice: 2500,
    save: "11.5%",
    badge: "Combo Offer",
  },

  {
    id: 4,
    name: "EID Combo -4",
    to: "/combo-4",
    image: "https://picsum.photos/500?random=14",
    price: 3390,
    offeredPrice: 3000,
    save: "9.1%",
    badge: "Combo Offer",
  },

  {
    id: 5,
    name: "EID Masala Combo",
    to: "/eid-masala-combo",
    image: "https://picsum.photos/500?random=15",
    price: 3300,
    offeredPrice: 3000,
    save: "9%",
    badge: "Combo Offer",
  },
  {
    id: 6,
    name: "EID Masala Combo",
    to: "/eid-masala-combo",
    image: "https://picsum.photos/500?random=15",
    price: 3300,
    offeredPrice: 3000,
    save: "9%",
    badge: "Combo Offer",
  },
];

const ComboDeals = () => {
  return (
    <div className="bg-orange-200/60 p-2 rounded-2xl">
      <Title
        title={"🎁 Exclusive Combo Deals"}
        toTitle={" View All Combo"}
        to={"/combos"}
      ></Title>
      <ProductSlider products={comboProducts} />
    </div>
  );
};

export default ComboDeals;

import ProductSlider from "../shared/ProductSlider";
import Title from "../shared/Title";
const cookingEssentialsProducts = [
  {
    id: 1,
    name: "Cold Press Mustard Oil",
    to: "/cold-press-mustard-oil",
    image: "https://picsum.photos/500?random=41",
    price: 420,
    offeredPrice: 360,
    save: "14%",
    badge: "Best Selling",
  },

  {
    id: 2,
    name: "Premium Deshi Ghee",
    to: "/premium-deshi-ghee",
    image: "https://picsum.photos/500?random=42",
    price: 950,
    offeredPrice: 850,
    save: "10.5%",
    badge: "Hot Deal",
  },

  {
    id: 3,
    name: "Organic Turmeric Powder",
    to: "/organic-turmeric-powder",
    image: "https://picsum.photos/500?random=43",
    price: 220,
    offeredPrice: 180,
    save: "18%",
    badge: "Organic",
  },

  {
    id: 4,
    name: "Premium Red Chilli Powder",
    to: "/premium-red-chilli-powder",
    image: "https://picsum.photos/500?random=44",
    price: 260,
    offeredPrice: 220,
    save: "15%",
    badge: "Fresh",
  },

  {
    id: 5,
    name: "Fresh Coriander Powder",
    to: "/fresh-coriander-powder",
    image: "https://picsum.photos/500?random=45",
    price: 240,
    offeredPrice: 210,
    save: "12.5%",
    badge: "Popular",
  },

  {
    id: 6,
    name: "Pure Garam Masala",
    to: "/pure-garam-masala",
    image: "https://picsum.photos/500?random=46",
    price: 320,
    offeredPrice: 280,
    save: "12%",
    badge: "Chef Choice",
  },

  {
    id: 7,
    name: "Natural Honey Jar",
    to: "/natural-honey-jar",
    image: "https://picsum.photos/500?random=47",
    price: 780,
    offeredPrice: 690,
    save: "11.5%",
    badge: "Premium",
  },

  {
    id: 8,
    name: "Premium Basmati Rice",
    to: "/premium-basmati-rice",
    image: "https://picsum.photos/500?random=48",
    price: 1250,
    offeredPrice: 1120,
    save: "10.4%",
    badge: "Family Pack",
  },

  {
    id: 9,
    name: "Organic Lentil Dal",
    to: "/organic-lentil-dal",
    image: "https://picsum.photos/500?random=49",
    price: 180,
    offeredPrice: 150,
    save: "16.6%",
    badge: "Healthy",
  },
];
const CookingEssentials = () => {
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

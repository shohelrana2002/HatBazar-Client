import ProductSlider from "../shared/ProductSlider";
import Title from "../shared/Title";
const organicCertifiedProducts = [
  {
    id: 1,
    name: "Organic Red Rice",
    to: "/organic-red-rice",
    image: "https://picsum.photos/500?random=51",
    price: 980,
    offeredPrice: 890,
    save: "9%",
  },

  {
    id: 2,
    name: "Organic Brown Sugar",
    to: "/organic-brown-sugar",
    image: "https://picsum.photos/500?random=52",
    price: 320,
    offeredPrice: 280,
    save: "12.5%",
  },

  {
    id: 3,
    name: "Organic Chia Seeds",
    to: "/organic-chia-seeds",
    image: "https://picsum.photos/500?random=53",
    price: 650,
    offeredPrice: 580,
    save: "10.7%",
    badge: "New Arrival",
  },

  {
    id: 4,
    name: "Organic Black Pepper",
    to: "/organic-black-pepper",
    image: "https://picsum.photos/500?random=54",
    price: 480,
    offeredPrice: 430,
    save: "10.4%",
  },

  {
    id: 5,
    name: "Organic Coconut Oil",
    to: "/organic-coconut-oil",
    image: "https://picsum.photos/500?random=55",
    price: 720,
    offeredPrice: 650,
    save: "9.7%",
  },

  {
    id: 6,
    name: "Organic Green Tea",
    to: "/organic-green-tea",
    image: "https://picsum.photos/500?random=56",
    price: 540,
    offeredPrice: 490,
    save: "9.2%",
    badge: "New Arrival",
  },

  {
    id: 7,
    name: "Organic Honey",
    to: "/organic-honey",
    image: "https://picsum.photos/500?random=57",
    price: 890,
    offeredPrice: 790,
    save: "11.2%",
  },

  {
    id: 8,
    name: "Organic Lentils",
    to: "/organic-lentils",
    image: "https://picsum.photos/500?random=58",
    price: 260,
    offeredPrice: 220,
    save: "15.3%",
  },

  {
    id: 9,
    name: "Organic Turmeric Powder",
    to: "/organic-turmeric-powder",
    image: "https://picsum.photos/500?random=59",
    price: 340,
    offeredPrice: 290,
    save: "14.7%",
    badge: "New Arrival",
  },
];

const OrganicCertified = () => {
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

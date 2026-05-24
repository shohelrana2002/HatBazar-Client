import ProductSlider from "../shared/ProductSlider";
import Title from "../shared/Title";
const khejurProducts = [
  {
    id: 1,
    name: "Premium Ajwa Khejur",
    to: "/premium-ajwa-khejur",
    image: "https://picsum.photos/500?random=31",
    price: 1800,
    offeredPrice: 1650,
    save: "8.3%",
    badge: "Best Selling",
  },

  {
    id: 2,
    name: "Saudi Mariam Khejur",
    to: "/saudi-mariam-khejur",
    image: "https://picsum.photos/500?random=32",
    price: 1400,
    offeredPrice: 1250,
    save: "10.7%",
    badge: "Hot Deal",
  },

  {
    id: 3,
    name: "Tunisia Deglet Noor Dates",
    to: "/tunisia-deglet-noor-dates",
    image: "https://picsum.photos/500?random=33",
    price: 1600,
    offeredPrice: 1450,
    save: "9.4%",
    badge: "Popular",
  },

  {
    id: 4,
    name: "Iranian Mazafati Dates",
    to: "/iranian-mazafati-dates",
    image: "https://picsum.photos/500?random=34",
    price: 1900,
    offeredPrice: 1700,
    save: "10.5%",
    badge: "Premium",
  },

  {
    id: 5,
    name: "Kimia Soft Khejur Box",
    to: "/kimia-soft-khejur-box",
    image: "https://picsum.photos/500?random=35",
    price: 2100,
    offeredPrice: 1890,
    save: "10%",
    badge: "Special Offer",
  },

  {
    id: 6,
    name: "Kimia Soft Khejur Box",
    to: "/kimia-soft-khejur-box",
    image: "https://picsum.photos/500?random=39",
    price: 2100,
    offeredPrice: 1890,
    save: "10%",
    badge: "Special Offer",
  },

  {
    id: 7,
    name: "Kimia Soft Khejur Box",
    to: "/kimia-soft-khejur-box",
    image: "https://picsum.photos/500?random=50",
    price: 2100,
    offeredPrice: 1890,
    save: "10%",
    badge: "Special Offer",
  },
];

const PremiumDates = () => {
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

import ProductSlider from "../shared/ProductSlider";
import Title from "../shared/Title";
const data = [
  {
    id: 1,
    name: "Sundarban Honey",
    to: "/honey",
    image: "https://picsum.photos/300?1",
    price: 290,
    offeredPrice: 200,
    selling: { bestSelling: true, offered: true },
  },
  {
    id: 2,
    name: "Mustard Oil",
    to: "/oil",
    image: "https://picsum.photos/300?2",
    price: 350,
    offeredPrice: null,
    selling: { bestSelling: true, offered: false },
  },
  {
    id: 3,
    name: "Deshi Ghee",
    to: "/ghee",
    image: "https://picsum.photos/300?3",
    price: 600,
    offeredPrice: 500,
    selling: { bestSelling: false, offered: true },
  },
  {
    id: 4,
    name: "Organic Turmeric",
    to: "/spices",
    image: "https://picsum.photos/300?4",
    price: 200,
    offeredPrice: 150,
    selling: { bestSelling: true, offered: true },
  },
  {
    id: 5,
    name: "Organic Turmeric",
    to: "/spices",
    image: "https://picsum.photos/300?4",
    price: 200,
    offeredPrice: 150,
    selling: { bestSelling: true, offered: true },
  },
  {
    id: 6,
    name: "Organic Turmeric",
    to: "/spices",
    image: "https://picsum.photos/300?4",
    price: 200,
    offeredPrice: 150,
    selling: { bestSelling: true, offered: true },
  },
  {
    id: 7,
    name: "Organic Turmeric",
    to: "/spices",
    image: "https://picsum.photos/300?4",
    price: 200,
    offeredPrice: 150,
    selling: { bestSelling: true, offered: true },
  },
];
const Honey = () => {
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

import { useEffect, useState } from "react";
import axiosPublic from "../api/axiosPublic";

const useProductsByCategory = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axiosPublic.get(
          `/api/products/category/${category}`,
        );
        setProducts(data?.products);
      } catch (error) {
        setError(error?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading, error };
};

export default useProductsByCategory;

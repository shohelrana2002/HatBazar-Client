import { createSlice } from "@reduxjs/toolkit";
const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");

  return storedCart ? JSON.parse(storedCart) : [];
};
const initialState = {
  carts: getCartFromLocalStorage(),
};
const saveCartToLocalStorage = (carts) => {
  localStorage.setItem("cart", JSON.stringify(carts));
};
const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // Add To Cart
    addToCart: (state, action) => {
      const existingProduct = state.carts.find(
        (item) => item.id === action.payload.id,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.carts.push({
          ...action.payload,
          quantity: 1,
        });
      }

      saveCartToLocalStorage(state.carts);
    },

    // Remove Cart
    removeCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.carts);
    },

    // Increase Quantity
    increaseQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
      saveCartToLocalStorage(state.carts);
    },

    // Decrease Quantity
    decreaseQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCartToLocalStorage(state.carts);
    },
  },
});

export const { addToCart, removeCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

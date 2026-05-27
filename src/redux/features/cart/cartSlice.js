import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
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
    },

    // Remove Cart
    removeCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },

    // Increase Quantity
    increaseQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease Quantity
    decreaseQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

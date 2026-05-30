import { createSlice } from "@reduxjs/toolkit";

// Get Cart From LocalStorage
const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");

  return storedCart ? JSON.parse(storedCart) : [];
};

// Save Cart To LocalStorage
const saveCartToLocalStorage = (carts) => {
  localStorage.setItem("cart", JSON.stringify(carts));
};

// Initial State
const initialState = {
  carts: getCartFromLocalStorage(),
};

// Cart Slice
const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // =========================
    // ADD TO CART
    // =========================
    addToCart: (state, action) => {
      const existingProduct = state.carts.find(
        (item) => item._id === action.payload._id,
      );

      // Product already exists
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        // New Product
        state.carts.push({
          ...action.payload,
          quantity: 1,
        });
      }

      saveCartToLocalStorage(state.carts);
    },

    // =========================
    // REMOVE CART
    // =========================
    removeCart: (state, action) => {
      state.carts = state.carts.filter((item) => item._id !== action.payload);

      saveCartToLocalStorage(state.carts);
    },

    // =========================
    // INCREASE QUANTITY
    // =========================
    increaseQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart._id === action.payload);

      if (item) {
        item.quantity += 1;
      }

      saveCartToLocalStorage(state.carts);
    },

    // =========================
    // DECREASE QUANTITY
    // =========================
    decreaseQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart._id === action.payload);

      // Quantity minimum 1
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      saveCartToLocalStorage(state.carts);
    },

    // =========================
    // CLEAR CART
    // =========================
    clearCart: (state) => {
      state.carts = [];

      saveCartToLocalStorage(state.carts);
    },
  },
});

// Export Actions
export const {
  addToCart,
  removeCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

// Export Reducer
export default cartSlice.reducer;

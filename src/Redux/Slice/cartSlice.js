import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { _id } = payload;
      // const { pathology_id } = payload;

      // console.log("payload is", payload);

      const find = state.find((item) => item._id === _id);
      const checkPathoLab = state.find(
        (item) => item.pathology_id._id !== payload.pathology_id._id
      );
      if (find) {
        // return state.map((item) =>
        // item._id === id ? { ...item, quantity: item.quantity + 1 } : item
        //);
        alert("Item Is already in Cart");
      } else if (state.length > 0 && checkPathoLab) {
        alert(
          "You Have to add test of same Pathology, please clear your cart and try again"
        );
      } else {
        state.push({ ...payload, quantity: 1 });
      }
    },
    increment: (state, { payload }) => {
      return state.map((item) =>
        item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decrement: (state, { payload }) => {
      return state.map((item) =>
        item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
      );
    },
    removeItem: (state, { payload }) => {
      return state.filter((item) => item._id !== payload);
    },
    clearCart(state) {
      return [];
    },
  },
});

export const { addToCart, increment, decrement, removeItem, clearCart } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;

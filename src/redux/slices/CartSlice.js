import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    /*cartItems: [],*/
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },

  /*actions*/
  reducers: {
    addItemToCart(state, action) {
      /*this action will add the newItem to the cartItems array*/
      const newItem = action.payload;
      /*we will check if the new item exist in the new CartItems if it doesn't exist */
      const isItemExistInCart = state.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
      );

      /*houni el produit eli 7achetna bih lazem yodher mara wa7da*/
      if (isItemExistInCart) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === newItem.id ? newItem : item
        );
      } else {
        state.cartItems = [...state.cartItems, newItem];
      }
    },
    /*action.payload gonna have the id, ysir filter 3al carItems*/
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartActions, cartReducer };

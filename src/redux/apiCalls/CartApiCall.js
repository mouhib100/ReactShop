import { cartActions } from "../slices/CartSlice";

//Add item

export function addToCart(newItem) {
  return (dispatch, getState) => {
    dispatch(cartActions.addItemToCart(newItem));

    //saveha fel localSotrage
    const { cart } = getState();
    localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  };
}

//remove Item from cart

export function removeFromCart(id) {
  return (dispatch, getState) => {
    dispatch(cartActions.removeItemFromCart(id));
    const { cart } = getState();
    localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  };
}

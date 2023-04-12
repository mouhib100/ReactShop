import { productActions } from "../slices/productSlice";

export function fetchProducts() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/Products");
      const data = await response.json();
      dispatch(productActions.setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductById(productId) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:3001/Products/${productId}`
      );
      const data = await response.json();
      dispatch(productActions.setProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
}

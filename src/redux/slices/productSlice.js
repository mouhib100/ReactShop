import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: [],
  },

  /*actions*/
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
  },
});

const productActions = productSlice.actions;
const productReducer = productSlice.reducer;

export { productActions, productReducer };

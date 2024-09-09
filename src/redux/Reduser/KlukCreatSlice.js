import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  deteils: JSON.parse(localStorage.getItem("deteils")) || [],
};

export const KlukSlice = createSlice({
  name: "KLUKOV",
  initialState,
  reducers: {
    getProduct(state, action) {
      let newProduct = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(newProduct));
      state.product = newProduct;
    },
    getDeteils(state, action) {
      let deteilsSome = deteils.some((el) => el.id === action.payload);
      if (deteilsSome) {
        let filterDeteils = state.deteils.filter(
          (el) => el.id !== action.payload
        );
        localStorage.setItem("deteils", JSON.stringify(filterDeteils));
        state.product = filterDeteils;
      } else {
        let newDeteils = (state.deteils = action.payload);
        localStorage.setItem("deteils", JSON.stringify(newDeteils));
        state.product = newDeteils;
      }
    },
  },
});
export const { getProduct, getDeteils } = KlukSlice.actions;
export default KlukSlice.reducer;

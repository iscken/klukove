import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const BasketSlice = createSlice({
  name: "ADD_TO_BASKET",
  initialState,
  reducers: {
    addToBasket(state, action) {
      let newBasket = [...state.basket, action.payload];
      localStorage.setItem("basket", JSON.stringify(newBasket));
      state.basket = newBasket;
    },
    deleteBasket(state, action) {
      let deleteBasket = state.basket.filter((el) => el.id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(deleteBasket));
      state.basket = deleteBasket;
    },
  },
});
export const { addToBasket, deleteBasket } = BasketSlice.actions;
export default BasketSlice.reducer;

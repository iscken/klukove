import { configureStore } from "@reduxjs/toolkit";
import KlukSlice from "./Reduser/KlukCreatSlice";
import BasketSlice from "./Reduser/BasketCreateSlice";

export const store = configureStore({
  reducer: {
    pro: KlukSlice,
    bas: BasketSlice,
  },
});

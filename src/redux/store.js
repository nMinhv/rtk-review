import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./carSlice";

const store = configureStore({
  reducer: {
    cars: carSlice,
  },
});
export default store;

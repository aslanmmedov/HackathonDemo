import { configureStore } from '@reduxjs/toolkit'
import storeReducer from "./slice/StoreSlice"

const store = configureStore({
  reducer: {
    stores: storeReducer,
  },
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import apis from "./services";
import FavoriteReducer from "./slice/FavoriteSlice";
import BasketReducer from './slice/BasketSlice';
const reducers = { favorite: FavoriteReducer, basket: BasketReducer };
const middlewares = [];

apis.forEach((api) => {
  reducers[api.reducerPath] = api.reducer;
  middlewares.push(api.middleware);
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

setupListeners(store.dispatch);
import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: JSON.parse(localStorage.getItem("baskets")) || [],
  },
  reducers: {
    addToBasket: (state, action) => {
      const findBasket = state.items.find((item) => item.id === action.payload.id);
      if (findBasket) {
      findBasket.count++
      } else {
        state.items = [...state.items, { ...action.payload, count: 1 }];
      }
      localStorage.setItem("baskets", JSON.stringify(state.items));
    },
    removeFromBasket: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.count > 1) {
        state.items = state.items.map((item) =>
          item.id === action.payload ? { ...item, count: item.count - 1 } : item
        );
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
      localStorage.setItem("baskets", JSON.stringify(state.items));
    },
    clearBasket: (state) => {
      state.items = [];
      localStorage.setItem("baskets", JSON.stringify(state.items));
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
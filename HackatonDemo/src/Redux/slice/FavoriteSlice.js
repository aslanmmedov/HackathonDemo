import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const FavoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite: (state, actions) => {
            let findFav = state.find(item => item._id === actions.payload._id);
          
            if (findFav) {
                alert("Already in wishlist");
            } else {
                state.push(actions.payload); 
                localStorage.setItem("favorites", JSON.stringify(state));
            }
        },
        removeFromFavorite: (state, action) => {
            return state.filter(el => el._id !== action.payload); 
        }
    }
});

export const { addToFavorite, removeFromFavorite } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
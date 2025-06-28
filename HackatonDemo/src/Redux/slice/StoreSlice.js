import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addStore, deleteStore, getAllStores, updateStore } from '../services/StoreService';
// import { getAllStores, addStore, updateStore ,deleteStore} from '../../../Redux/services/StoreService';

export const fetchStores = createAsyncThunk('stores/fetchStores', async () => {
    return await getAllStores()
})
export const createStore = createAsyncThunk('stores/createStore', async (newStore) => {
    return await addStore(newStore)
})
export const updateStoreData = createAsyncThunk('stores/updateStore', async ({ id, updateStoreData }) => {
    return await updateStore(id, updateStoreData)
})
export const deleteStoreData = createAsyncThunk('stores/deleteStore', async (id) => {
    return await deleteStore(id)
})

// Store slice
let initialState = {
    data: [],
    loading: false,
    error: null
}
const storeSlice = createSlice({
    name: 'stores',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchStores.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchStores.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchStores.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(createStore.pending, (state) => {
                state.loading = true
            })
            .addCase(createStore.fulfilled, (state, action) => {
                state.loading = false
                state.data = [...state.data, action.payload]
            })
            .addCase(createStore.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(updateStoreData.pending, (state) => {
                state.loading = true
            })
            .addCase(updateStoreData.fulfilled, (state, action) => {
                state.loading = false
                const index = state.data.findIndex(store => store.id === action.payload.id)
                if (index != -1) {
                    state.data[index] = action.payload
                }
            })
            .addCase(updateStoreData.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
                console.log(action.error);
            })
          
            .addCase(deleteStoreData.fulfilled, (state, action) => {
                state.loading = false
                state.data = state.data.filter(store => store.id !== action.payload.id)
            })
            .addCase(deleteStoreData.pending, (state) => {
                state.loading = true
            })
    }
})

export default storeSlice.reducer
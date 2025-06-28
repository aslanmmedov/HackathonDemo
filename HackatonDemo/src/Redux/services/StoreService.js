import axiosConfig from "../../AdminDashboard/Api/AxiosConfig";


export const getAllStores = async () => {
    try {
        const response = await axiosConfig.get('/stores')
        return response.data
    } catch (error) {
        console.error("Error fetching stores:", error);
        throw error;
    }
}
export const addStore = async (newStore) => {
    try {
        const response = await axiosConfig.post('/stores', newStore)
        return response.data
    } catch (error) {
        console.error("Error adding store:", error);
        throw error;

    }
}

export const updateStore = async (id,updateStore)=>{
    try {
        const response = await axiosConfig.put(`/stores/${id}`,updateStore)
        return response.data
    } catch (error) {
        console.error("Error updating store:", error);
        throw error;
        
    }
}
export const deleteStore = async (id)=>{
    try {
        const response = await axiosConfig.delete(`/stores/${id}`)
        return response.data
    } catch (error) {
        console.error("Error deleting store:", error);
        throw error;
        
    }
}

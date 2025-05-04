import axios from "../config/axiosConfig.js";

export const pingApi = async () => {
    try {
        const response = await axios.get('/api/v1/ping');
        console.log("Ping response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error pinging the server:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}
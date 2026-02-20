import axios from "axios";

const BaseUrl = "https://api.escuelajs.co/api/v1";

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/categories?offset=0&limit=50`);

    console.log("API PRODUCTS:", response.data);
    return response.data;
  } catch (err) {
    console.error("API ERROR:", err.message);
    return []; // ✅ IMPORTANT: return fallback
  }
};

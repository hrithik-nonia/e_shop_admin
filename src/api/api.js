import axios from "axios";

const BASE_URL = "http://localhost:8000/api/products";
export const getAllProduct = async (skip = 0, limit = 8) => {
  const response = await axios.get(`${BASE_URL}/all_products?skip=${skip}&limit=${limit}`);

  return response.data;
};




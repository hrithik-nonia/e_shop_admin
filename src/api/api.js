import axios from "axios";

const BASE_URL = "http://localhost:8000/api/products";
export const getAllProduct = async (skip = 0, limit = 10) => {
  const response = await axios.get(`${BASE_URL}/all_products?skip=${skip}&limit=${limit}`);
  console.log("api log " + response);

  return response.data;
};


// get product counts
class CountService {
  // get total product count
  static async totalCount() {
    try {
      const response = await axios.get(
        `${BASE_URL}/count`,
      );

      return response.data;
    } catch (err) {
      console.error("Failed to fetch product count:", err);
      throw err;
    }
  };

  // Product Count By Category
  static async activeProductsCount() {
    try {
      const response = await axios.get(`${BASE_URL}/active_count`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch category-wise product count:", error);
      throw error;
    }
  }

  // low stock product count
  static async lowStockProductsCount() {
    try {
      const response = await axios.get(`${BASE_URL}/low_stock_count`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch low stock product count:", error);
      throw error;
    }
  }

  // inactive products
  static async inActiveProducts() {
    try {
      const [total, active] = await Promise.all([
        this.totalCount(),
        this.activeProductsCount(),
      ]);
      const inactive = total - active;
      return inactive;
    } catch (error) {
      console.error("Failed to fetch inactive products count:", error);
      throw error;
    }
  }

  // out of stock product count
  static async outOfStockProductsCount() {
    try {
      const response = await axios.get(`${BASE_URL}/out_of_stock_count`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch out of stock product count:", error);
      throw error;
    }
  }
}

export default CountService;








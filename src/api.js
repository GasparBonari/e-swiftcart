import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (limit = 0, skip = 0, category = '') => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        limit,
        skip,
        category,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
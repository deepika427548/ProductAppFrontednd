import axios from "axios";

const BASE_URL = "http://localhost:2010";

export const login = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const addProduct = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/product/addProduct`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/product`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/product/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/product/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const updateProduct = async (id, data) => {
//   try {
//     const response = await axios.put(`${BASE_URL}/product/${id}`, data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
export const updateProduct = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/product/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

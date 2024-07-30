import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Ganti dengan URL API backend Anda

// Mendapatkan semua pengguna
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error getting all users:', error);
    throw error;
  }
};

// Mendapatkan pengguna berdasarkan ID
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error getting user with ID ${userId}:`, error);
    throw error;
  }
};

// Menambahkan pengguna baru
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Memperbarui pengguna berdasarkan ID
export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${userId}:`, error);
    throw error;
  }
};

// Menghapus pengguna berdasarkan ID
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
    throw error;
  }
};


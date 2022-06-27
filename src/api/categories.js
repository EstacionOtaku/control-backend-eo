import axios from "axios";

export const getCategoriesRequests = async () => await axios.get('http://localhost:8000/categories');
export const addCategoryRequests = async (category) => await axios.post('http://localhost:8000/categories', category);
export const deleteCategoryRequests = async (id) => await axios.delete('http://localhost:8000/categories/' + id);
export const getCategoryRequests = async (id) => await axios.get('http://localhost:8000/categories/' + id);
export const updateCategoryRequests = async (id, newFields) => await axios.put(`http://localhost:8000/categories/${id}`, newFields);
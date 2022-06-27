import { createContext, useContext, useEffect, useState } from "react";
import { getCategoriesRequests, addCategoryRequests, deleteCategoryRequests, getCategoryRequests, updateCategoryRequests } from "../api/categories";

const categoryContext = createContext();

export const useCategories = () => {
  const context = useContext(categoryContext);
  return context;
};

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await getCategoriesRequests();
    setCategories(response.data);
  };

  const addCategory = async (category) => {
    const response = await addCategoryRequests(category)
    setCategories([...categories, response.data]);
  }

  const updateCategory = async (id, category) => {
    const response = await updateCategoryRequests(id, category)
    setCategories(categories.map(category => category.id === id ? response.data : category))
  }

  const deleteCategory = async (id) => {
    const response = await deleteCategoryRequests(id)
    if (response.status === 204){
      setCategories(categories.filter((category) => category.id !==id));
    }
  }

  const getCategory = async (id) => {
    const response = await getCategoryRequests(id)
    return response.data;
  }

  useEffect(() => {
    getCategories()
}, [])

  return (
    <categoryContext.Provider value={{ categories, addCategory, deleteCategory, getCategory, updateCategory }}>
      {children}
    </categoryContext.Provider>
  );
};

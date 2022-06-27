import { createContext, useContext, useEffect, useState } from "react";
import { getAnimesRequests } from "../api/animes";

const animeContext = createContext();

export const useAnimes = () => {
    const context = useContext(animeContext);
    return context;
  };

export const AnimeProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);

  const getAnimes = async (id, anime) => {
    const response = await getAnimesRequests();
    setAnimes(response.data);
  };


  useEffect(() => {
    getAnimes()
}, [])

  return (
    <animeContext.Provider
      value={{
        // categories,
        // addCategory,
        // deleteCategory,
        // getCategory,
        // updateCategory,
      }}
    >
      {children}
    </animeContext.Provider>
  );
};

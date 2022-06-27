import { useState, createContext, useContext, useEffect } from "react";
import { getAnimesRequests, createAnimesRequest, deleteAnimesRequest, getAnimeRequest, updateAnimeRequest } from "../api/animes";

const animeContext = createContext();

export const useAnime = () => {
  const context = useContext(animeContext);
  return context;
};

export const AnimeProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);

  const getAnimes = async () => {
    const response = await getAnimesRequests();
    setAnimes(response.data);
  };

  const createAnime = async (post) => {
    const response = await createAnimesRequest(post);
    setAnimes([...animes, response.data]);
  };

  const deleteAnime = async (id) => {
    const response = await deleteAnimesRequest(id);
    if (response.status === 204) {
      setAnimes(animes.filter((anime) => anime.id !== id));
    }
  };

  const getAnime = async (id) => {
    const response = await getAnimeRequest(id);
    return response.data;
  };

  const updateAnime = async (id, anime) => {
    const response = await updateAnimeRequest(id, anime);
    setAnimes(animes.map((anime) => (anime.id === id ? response.data : anime)));
  };

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <animeContext.Provider value={{ animes, createAnime, deleteAnime, getAnime, updateAnime }}>
      {children}
    </animeContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";
import { getEpisodesRequests, addEpisodeRequest, deleteEpisodeRequest, getEpisodeRequest, updateEpisodeRequest } from "../api/episodes";

const episodeContext = createContext();

export const useEpisodes = () => {
  const context = useContext(episodeContext);
  return context;
};


export const EpisodeProvider = ({ children }) => {
  const [episodes, setEpisodes] = useState([]);

  const getEpisodes = async () => {
    const response = await getEpisodesRequests();
    setEpisodes(response.data);
  };

  const addEpisode = async (episode) => {
    const response = await addEpisodeRequest(episode)
    setEpisodes([...episodes, response.data]);
  }

  const updateEpisode = async (id, episode) => {
    const response = await updateEpisodeRequest(id, episode)
    setEpisodes(episodes.map(episode => episode.id === id ? response.data : episode))
  }

  const deleteEpisode = async (id) => {
    const response = await deleteEpisodeRequest(id)
    if (response.status === 204){
      setEpisodes(episodes.filter((episode) => episode.id !==id));
    }
  }

  const getEpisode = async (id) => {
    const response = await getEpisodeRequest(id)
    return response.data;
  }

  useEffect(() => {
    getEpisodes()
}, [])

  return (
    <episodeContext.Provider value={{ episodes, addEpisode, deleteEpisode, getEpisode, updateEpisode }}>
      {children}
    </episodeContext.Provider>
  );
};

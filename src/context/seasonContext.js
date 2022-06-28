import { createContext, useContext, useEffect, useState } from "react";
import { getSeasonsRequests, addSeasonRequest, deleteSeasonRequest, getSeasonRequest, updateSeasonRequest } from "../api/seasons";

const seasonContext = createContext();

export const useSeasons = () => {
  const context = useContext(seasonContext);
  return context;
};

export const SeasonProvider = ({ children }) => {
  const [seasons, setSeasons] = useState([]);

  const getSeasons = async () => {
    const response = await getSeasonsRequests();
    setSeasons(response.data);
  };

  const addSeason = async (season) => {
    const response = await addSeasonRequest(season)
    setSeasons([...seasons, response.data]);
  }

  const updateSeason = async (id, season) => {
    const response = await updateSeasonRequest(id, season)
    setSeasons(seasons.map(season => season.id === id ? response.data : season))
  }

  const deleteSeason = async (id) => {
    const response = await deleteSeasonRequest(id)
    if (response.status === 204){
      setSeasons(seasons.filter((season) => season.id !==id));
    }
  }

  const getSeason = async (id) => {
    const response = await getSeasonRequest(id)
    return response.data;
  }

  useEffect(() => {
    getSeasons()
}, [])

  return (
    <seasonContext.Provider value={{ seasons, addSeason, deleteSeason, getSeason, updateSeason }}>
      {children}
    </seasonContext.Provider>
  );
};

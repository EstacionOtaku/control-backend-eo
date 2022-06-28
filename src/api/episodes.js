import axios from "axios";

export const getEpisodesRequests = async () =>
  await axios.get("http://localhost:8011/episodes");

export const addEpisodeRequest = async (post) =>
  await axios.post("http://localhost:8011/episodes", post);

export const deleteEpisodeRequest = async (id) =>
  await axios.delete("http://localhost:8011/episodes/" + id);

export const getEpisodeRequest = async (id) =>
  await axios.get("http://localhost:8011/episodes/" + id);
  
export const updateEpisodeRequest = async (id, newFields) =>
  await axios.put(`http://localhost:8011/episodes/${id}`, newFields);

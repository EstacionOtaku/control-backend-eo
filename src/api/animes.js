import axios from "axios";

export const getAnimesRequests = async () =>
  await axios.get("http://localhost:8011/animes");

export const createAnimesRequest = async (post) =>
  await axios.post("http://localhost:8011/animes", post);

export const deleteAnimesRequest = async (id) =>
  await axios.delete("http://localhost:8011/animes/" + id);

export const getAnimeRequest = async (id) =>
  await axios.get("http://localhost:8011/animes/" + id);
  
export const updateAnimeRequest = async (id, newFields) =>
  await axios.put(`http://localhost:8011/animes/${id}`, newFields);

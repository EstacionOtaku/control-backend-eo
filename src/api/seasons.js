import axios from "axios";

export const getSeasonsRequests = async () =>
  await axios.get("http://localhost:8011/seasons");

export const addSeasonRequest = async (post) =>
  await axios.post("http://localhost:8011/seasons", post);

export const deleteSeasonRequest = async (id) =>
  await axios.delete("http://localhost:8011/seasons/" + id);

export const getSeasonRequest = async (id) =>
  await axios.get("http://localhost:8011/seasons/" + id);
  
export const updateSeasonRequest = async (id, newFields) =>
  await axios.put(`http://localhost:8011/seasons/${id}`, newFields);

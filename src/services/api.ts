import axios from "axios";
import { Character } from "../types/Character";

const API_URL = "http://localhost:8080/api";

export const fetchCharacters = async (): Promise<Character[]> => {
  const response = await axios.get(`${API_URL}/characters`);
  return response.data;
};

export const fetchFromExternalApi = async (count: number): Promise<void> => {
  await axios.post(`${API_URL}/characters/fetch/${count}`);
};

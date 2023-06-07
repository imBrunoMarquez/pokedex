import axios from "axios";

export const httpCommon = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

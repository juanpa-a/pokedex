import axios from "axios";
import { URL } from "./url";

export const getPokeById = (id: number, setRawPokemon: Function) => {
  if (id < 1) {
    id = 132
    console.log("Not a valida id!")
  };
  axios
    .get(`${URL}pokemon/${id}`)
    .then((res) => setRawPokemon(res.data))
    .catch((err) => console.log("Error getting pokemon by id", err.message));
};

export const getPokeByName = (name: string, setRawPokemon: Function) => {
  let response;
  axios
    .get(`${URL}pokemon/${name}`)
    .then((res) => setRawPokemon(res.data))
    .catch((err) => console.log("Error getting pokemon by name", err.message));
  return response;
};

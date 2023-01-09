import axios from "axios";

import { PokemonDetailResponse, PokemonListResponse } from "./../types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

// Faz uma solicitação HTTP para a rota `/pokemon` da PokeAPI e retorna a lista de pokemon.
// @returns {Promise<PokemonListResponse>} Uma promessa que, quando resolvida, fornecerá os dados da lista de pokemon.
export const getPokemonList = async (): Promise<PokemonListResponse> => {
  try {
    const response = await axios.get<PokemonListResponse>(
      `${BASE_URL}/pokemon`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Faz uma solicitação HTTP para a rota `/pokemon/{pokemonName}` da PokeAPI e retorna os detalhes do pokemon específico.
// @param {string} pokemonName. Recebe o nome do pokemon como parametro.
// @returns {Promise<PokemonDetailResponse>} Uma promessa que, quando resolvida, fornecerá os detalhes do pokemon.
export const getPokemonDetail = async (
  pokemonName: string
): Promise<PokemonDetailResponse> => {
  try {
    const response = await axios.get<PokemonDetailResponse>(
      `${BASE_URL}/pokemon/${pokemonName}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Faz uma solicitação HTTP para a rota `/pokemon/{pokemonName}` da PokeAPI e retorna a URL da imagem do pokemon específico.
// @param {string} pokemonName O nome do pokemon.
// @returns {Promise<string>} Uma promessa que, quando resolvida, fornecerá a URL da imagem do pokemon.
export const getPokemonImage = async (pokemonName: string): Promise<string> => {
  try {
    const response = await axios.get<{ sprites: { front_default: string } }>(
      `${BASE_URL}/pokemon/${pokemonName}`
    );
    return response.data.sprites.front_default;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

import { defineStore } from "pinia";
import axios from "axios";

export const useCharactersStore = defineStore("characters", {
  state: () => ({
    characters: [],
    page: 1,
    filters: {
      name: '',
      species: "",
      gender: "",
      status: "",
    },
    info: {
      count: 0,
      pages: 0
    }
  }),
  actions: {
    async getCharacters() {
      try {
        const params = {
          page: this.page,
          ...Object.fromEntries(
            Object.entries(this.filters).filter(([key, value]) => value !== "")
          ),
        };

        const response = await axios.get(
          `https://rickandmortyapi.com/api/character`,
          { params }
        );
        this.characters = response.data.results;
        this.info = response.data.info
      } catch (error) {
        console.error(error);
      }
    },
  },
});

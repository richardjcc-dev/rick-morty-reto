import { defineStore } from "pinia";
import axios from "axios";

export const useCharactersStore = defineStore("characters", {
  state: () => ({
    isLoading: false,
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
        this.isLoading = true
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
        this.characters = []
        this.info = {
          count: 0,
          pages: 0
        }
      } finally {
        this.isLoading = false
      }
    },
  },
});

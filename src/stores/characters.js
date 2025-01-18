import { defineStore } from "pinia";
import axios from "axios";

export const useCharactersStore = defineStore("characters", {
  state: () => ({
    characters: [],
    query: "",
    page: 1,
    totalPages: 0,
/*     filters: {
      species: "",
      gender: "",
      status: "",
    }, */
  }),
  actions: {
    async getCharacters() {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character`,
          {
            params: {
              page: this.page,
              name: this.query,
/*               species: this.filters.species,
              gender: this.filters.gender,
              status: this.filters.status, */
            },
          }
        );
        this.characters = response.data.results;
        this.totalPages = response.data.info.pages;
      } catch (error) {
        console.error(error);
      }
    },
    setSearchQuery(query) {
      this.query = query;
      this.page = 1;
    },
    setFilters(filters) {
      this.filters = filters;
    },
  },
});

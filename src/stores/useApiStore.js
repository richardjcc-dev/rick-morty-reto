import { defineStore } from 'pinia';
import axios from 'axios';

export const useApiStore = defineStore('apiStore', {
  state: () => ({
    characters: [],
    loading: false,
    error: null,
  }),
  actions: {
    async getCharacters() {
      this.loading = true;
      this.error = null;
      try {
        // const filters = {name: 'morty'}
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        this.characters = response.data.results;
        console.log(response)
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});

/* 
Filtros a tomar en cuenta al escribir y buscar:

const filters = {
species: ''
status: 'alive'
gender: ''
}

Con .filter, solo se podrá hacer una búsqueda de una sola página, entre 20 personajes como lo es en este ejemplo. Para una búsqueda paginada, se debe hacer un filtro de backend, con una llamada de API con Querys. Esta documentación se puede observar en la página de Rick and Morty, en el apartado de "Filter Characters".

Para el filtro de búsqueda en el searchbar, haremos un evento onChange para el v-text-field, que cada un segundo o menos después de actualizar el texto del input, se refresque la variable filters.  Esa variable puede estar acá dentro del store.

También se debe convertir el texto que se escriba en el input, a minúscula. Para esto llamamos a la función "toLowerCase" (es una buena práctica hacerlo siempre).

  Funcionalides del proyecto:
  Llamar a la API,
  Filtrar por nombre,
  Filtrar por seleccion,
  Favoritos,
  Responsive


*/

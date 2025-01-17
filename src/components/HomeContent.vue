<script setup>
import CharacterCard from "./CharacterCard.vue";
import { useApiStore } from "@/stores/useApiStore";
import { storeToRefs } from "pinia";


const apiStore = useApiStore();
const { getCharacters, loading, error } = apiStore;
const { characters } = storeToRefs(useApiStore());

getCharacters();
</script>

<template>

  <div class="chip-filter d-flex justify-space-between">
    <v-chip color="green" variant="flat" class="ml-5">Todos</v-chip>
    <v-chip class="mr-auto">Favoritos</v-chip>
    <v-icon icon="mdi-email mr-10"></v-icon>
  </div>

  <div class="container px-5 py-5">

    <v-row>
      <v-col
        v-for="character in characters"
        class="v-flex"
        cols="6"
        sm="12"
        md="6"
        lg="6"
        
      >
        <!-- Estas cards deben ir en otro componente, y se le pasan las props con la data -->
        <CharacterCard :character="character" />
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">

  .container {
    background-color: #E6E7E3;
  }

  .chip-filter {
    background-color: #E6E7E3;
  }


</style>

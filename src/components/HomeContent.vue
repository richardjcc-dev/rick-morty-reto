<script setup>
import CharacterCard from "./CharacterCard.vue";
import { useCharactersStore } from "@/stores/characters";
import { storeToRefs } from "pinia";
import FilterDialog from "./FilterDialog.vue";

const { getCharacters } = useCharactersStore();
const { characters, page, totalPages, filters } = storeToRefs(
  useCharactersStore()
);

const onPageChange = (newPage) => {
  page.value = newPage;
  getCharacters();
};

const onSaveFilters = (newFilters) => {
  filters.value.gender = newFilters.gender;
  filters.value.status = newFilters.status;
  filters.value.species = newFilters.species;
  getCharacters();
};

getCharacters();
</script>

<template>
  <div class="chip-filter d-flex justify-space-between">
    <v-chip color="green" variant="flat" class="ml-5">Todos</v-chip>
    <v-chip class="mr-auto">Favoritos</v-chip>
    <!-- <v-icon icon="mdi-email mr-10"></v-icon> -->
    <FilterDialog @save-filters="onSaveFilters" />
  </div>

  <div class="container px-5 py-5">
    <v-row>
      <v-col
        v-for="character in characters"
        :key="character.id"
        class="v-flex"
        cols="12"
        sm="12"
        md="6"
        lg="6"
      >
        <!-- Estas cards deben ir en otro componente, y se le pasan las props con la data -->
        <CharacterCard :character="character" />
      </v-col>
    </v-row>

    <v-pagination
      v-model="page"
      :length="totalPages"
      @update:model-value="onPageChange"
    ></v-pagination
    ><!--  -->
  </div>
</template>

<style lang="scss">
.container {
  background-color: #e6e7e3;
}

.chip-filter {
  background-color: #e6e7e3;
}
</style>

<script setup>
import CharacterCard from "./CharacterCard.vue";
import { useCharactersStore } from "@/stores/characters";
import { storeToRefs } from "pinia";
import FilterDialog from "./FilterDialog.vue";
import CharacterDialog from "./CharacterDialog.vue";
import { ref, computed } from "vue";

const store = useCharactersStore();
// const characters = computed(() => store.characters);
const selectedCharacter = ref(null);
const openDialog = (character) => {
  selectedCharacter.value = character;
};

const { getCharacters } = useCharactersStore();
const { characters, page, info, filters } = storeToRefs(useCharactersStore());

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
  <div class="bg-color">
    <v-container>
      <div class="d-flex justify-space-between my-3 mx-4">
        <div class="d-flex background-chips pt-2 px-2 align-items-center">
          <v-chip color="light-green-lighten-3" variant="flat">Todos</v-chip>
          <v-chip class="mr-auto" variant="flat" color="white"
            >Favoritos</v-chip
          >
        </div>
        <FilterDialog @save-filters="onSaveFilters" />
      </div>

      <div class="d-flex justify-space-between my-4 mx-4">
        <div></div>
        {{ info.count }} Personajes
      </div>

      <div class="px-5 py-5">
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
            <CharacterCard :character="character" :openDialog="openDialog" />
          </v-col>
        </v-row>
        <CharacterDialog
          v-if="selectedCharacter"
          :character="selectedCharacter"
        />
        <v-pagination
          class="mt-5"
          rounded
          v-model="page"
          :length="info.pages"
          @update:model-value="onPageChange"
        ></v-pagination
        ><!--  -->
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
.bg-color {
  background-color: #e6e7e3;
}

.background-chips {
  background-color: white;
  border-radius: 60px;
}

body {
  font-family: 'Montserrat', sans-serif;
}
</style>

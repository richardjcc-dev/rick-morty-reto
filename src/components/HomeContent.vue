<script setup>
import CharacterCard from "./CharacterCard.vue";
import { useCharactersStore } from "@/stores/characters";
import { storeToRefs } from "pinia";
import FilterDialog from "./FilterDialog.vue";
import CharacterDialog from "./CharacterDialog.vue";
import { ref, computed } from "vue";

const selectedCharacter = ref(null);
const showCharacterDialog = ref(false);

const openDialog = (character) => {
  selectedCharacter.value = character;
  showCharacterDialog.value = true;
};

const { getCharacters } = useCharactersStore();
const { characters, page, info, filters, isLoading } = storeToRefs(
  useCharactersStore()
);

const clearFilters = () => {
  filters.value = {
    name: "",
    species: "",
    gender: "",
    status: "",
  };
  getCharacters();
};

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

      <div
        v-if="!isLoading && characters.length > 0"
        class="d-flex justify-space-between my-4 mx-4"
      >
        <div></div>
        {{ info.count }} Personajes
      </div>

      <div v-if="!isLoading && characters.length > 0" class="px-5 py-5">
        <v-row>
          <v-col
            v-for="character in characters"
            :key="character.id"
            cols="12"
            sm="12"
            md="6"
            lg="6"
          >
            <CharacterCard
              @click="openDialog(character)"
              :character="character"
            />
          </v-col>
        </v-row>

        <v-dialog v-model="showCharacterDialog" max-width="600">
          <CharacterDialog
            :character="selectedCharacter"
            @close-dialog="showCharacterDialog = false"
          />
        </v-dialog>
        <v-pagination
          class="mt-5"
          rounded
          v-model="page"
          :length="info.pages"
          @update:model-value="onPageChange"
        ></v-pagination
        ><!--  -->
      </div>
      <div
        v-else-if="!isLoading && characters.length === 0"
        class="px-5 py-16 w-100 h-100 d-flex flex-column align-center justify-center"
      >
        <h2>Oh no!</h2>
        <p>¡Pareces perdido en tu viaje!</p>
        <v-btn
          @click="clearFilters()"
          rounded
          color="white"
          class="mt-10"
          elevation="0"
          >Limpiar filtros</v-btn
        >
      </div>
      <div v-else class="px-5 py-5">
        <v-progress-circular
          color="primary"
          indeterminate
        ></v-progress-circular>
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
  font-family: "Montserrat", sans-serif;
}
</style>

<script setup>
import { useCharactersStore } from "@/stores/characters";
import { storeToRefs } from "pinia";

const { getCharacters } = useCharactersStore();
const { filters, page } = storeToRefs(useCharactersStore());

const onChange = () => {
  filters.value.name;
  page.value = 1;
  getCharacters();
};
</script>

<template>
  <div class="header">
    <v-img src="@/assets/rick-morty-wallpaper.png" height="328" cover></v-img>
    <div class="header-background opacity-50"></div>
    <v-row class="search-bar p-0 w-100">
      <v-col cols="11" sm="7" md="7" class="p-0">
        <v-img src="@/assets/brand-logo.png" height="96"></v-img>

        <v-text-field
          class="opacity-80 mt-7"
          bg-color="black"
          :hide-details="true"
          v-model="filters.name"
          @input="onChange"
          label="Buscar personaje por nombre"
          variant="solo-filled"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="css" scoped>
.search-bar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  height: 328px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header-background {
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 328px;
}
</style>

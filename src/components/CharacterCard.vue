<script setup>
import { computed, ref } from "vue";
import { useCharactersStore } from "@/stores/characters";
import { defineProps } from "vue";

const props = defineProps({
  character: { type: Object, required: true },
  openDialog: { type: Function, required: true },
});
</script>

<template>
  <v-card
    @click="openDialog(character)"
    elevation="0"
    class="card w-100 h-100 d-flex"
  >
    <v-row class="p-0">
      <v-col cols="12" sm="12" md="3"
        ><img :src="character.image" class="h-100 w-100 card-img"
      /></v-col>
      <v-col cols="12" sm="12" md="9"
        ><div class="card pa-4 w-100">
          <div class="d-flex justify-space-between w-100">
            <div>
              <v-card-title class="px-0 py-0">{{
                character.name
              }}</v-card-title>
              <v-card-subtitle class="px-0 py-0">{{
                character.species
              }}</v-card-subtitle>
            </div>

            <div>
              <v-chip
                :color="
                  character.status === 'Alive' ? 'light-green' : 'lime-darken-4'
                "
                >{{ character.status }}</v-chip
              >
            </div>
          </div>

          <div class="d-flex mt-4 justify-space-between w-100">
            <div>
              <v-card-subtitle class="px-0 py-0"
                >Last known location</v-card-subtitle
              >
              <p>{{ character.location.name }}</p>
            </div>
            <div>
              <v-card-subtitle class="px-0 py-0">First seen in</v-card-subtitle>
              <p>Never Ricking Morty</p>
            </div>
          </div>
        </div></v-col
      >
    </v-row>
  </v-card>
</template>

<style lang="scss">
.card-img {
  max-height: 200px;
  object-fit: cover;
}

.card {
  color: black;
}
</style>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  character: { type: Object, required: true },
});
</script>

<template>
<v-card elevation="0" class="card w-100 h-100 d-flex">
  <v-row class="p-0">
    <v-col cols="12" sm="12" md="3">
      <img :src="character.image" class="h-100 w-100 card-img"></img>
    </v-col>
    <v-col cols="12" sm="12" md="9">
      <v-card class="px-3 py-4 w-100">
        <v-row class="d-flex justify-space-between w-100">
          <v-col class="container-text pr-2">
            <v-card-title class="px-0 py-0 truncate-text">{{ character.name }}</v-card-title>
            <v-card-subtitle class="px-0 py-0">{{ character.species }}</v-card-subtitle>
          </v-col>
          <v-col>
            <v-chip :color="character.status === 'Alive' ? 'light-green' : 'lime-darken-4'">
              {{ character.status }}
            </v-chip>
          </v-col>
        </v-row>
        <v-row class="d-flex mt-4 justify-space-between w-100">
          <v-col class="container-text pr-3">
            <v-card-subtitle class="px-0 py-0">Last known location</v-card-subtitle>
            <p class="truncate-text">{{ character.location.name }}</p>
          </v-col>
          <v-col class="container-text">
            <v-card-subtitle class="px-0 py-0">First seen in</v-card-subtitle>
            <p class="truncate-text">Never Ricking Morty</p>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
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

.truncate-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.container-text {
  overflow: hidden;
}
</style>

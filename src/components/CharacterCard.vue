<script setup>
defineProps({
  character: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <v-card
    elevation="0"
    class="card w-508 h-137 d-flex"
    max-width="508"
    max-height="137px"
  >
    <img :src="character.image" class="h-100 w-100 card-img" />

    <div class="card py-3 px-5 w-100">
      <div class="d-flex justify-space-between w-100">
        <div>
          <v-card-title class="px-0 py-0">{{ character.name }}</v-card-title>
          <v-card-subtitle class="px-0 py-0">{{
            character.species
          }}</v-card-subtitle>
        </div>

        <div>
          <v-chip color="primary">{{ character.status }}</v-chip>
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
    </div>
  </v-card>
</template>

<style lang="scss">
.card-img {
  max-width: 137px;
  object-fit: contain;
}

.card {
  // background-color: #fafafa;
  color: black;
}

</style>

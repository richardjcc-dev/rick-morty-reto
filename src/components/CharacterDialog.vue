<script setup>
const emit = defineEmits(["close-dialog"]);

const props = defineProps({
  character: {
    type: Object,
    required: true,
  },
});

const closeDialog = () => {
  emit("close-dialog");
};
</script>

<template>
  <v-card class="bg-color">
    <v-img
      color="surface-variant"
      height="128"
      src="@/assets/bg.jpg"
      cover
    ></v-img>

    <v-btn icon class="close-btn" size="large" @click="closeDialog">
      <v-icon>mdi-close</v-icon>
    </v-btn>

    <v-card-title class="px-5 pb-6">
      <v-row>
        <v-col cols="12" sm="12" md="3">
          <v-avatar size="128" class="avatar-img">
            <v-img alt="John" :src="character.image"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" sm="12" md="9">
          <div>
            <h2>{{ character.name }}</h2>
            <v-card-subtitle class="pa-0">{{
              character.species
            }}</v-card-subtitle>
          </div>
        </v-col>

        <v-col cols="12">
          <v-card elevation="0" class="pa-3">
            <h3 class="text-center">Información</h3>
            <v-divider></v-divider>

            <v-col class="container-text pr-3">
              <v-card-subtitle class="px-0 py-0"
                >Gender</v-card-subtitle
              >
              <p class="truncate-text">{{ character.gender }}</p>
            </v-col>

            <v-col class="container-text pr-3">
              <v-card-subtitle class="px-0 py-0"
                >Status</v-card-subtitle
              >
              <p class="truncate-text">{{ character.status }}</p>
            </v-col>


            <v-col class="container-text pr-3">
              <v-card-subtitle class="px-0 py-0"
                >Last known location</v-card-subtitle
              >
              <p class="truncate-text">{{ character.location.name }}</p>
            </v-col>

            <v-col class="container-text">
              <v-card-subtitle class="px-0 py-0">First seen in</v-card-subtitle>
              <p class="truncate-text">Never Ricking Morty</p>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-card-title>
  </v-card>
</template>

<style scoped>

.avatar-img {
  margin-top: -100px;
  border: 3px solid white;
  z-index: 9;
  position: absolute;
}

.close-btn {
  position: absolute;
  right: 3px;
  top: 6px;
}
</style>

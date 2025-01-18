<template>
  <v-dialog v-model="dialog" max-width="800">
    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="3">
            <v-avatar size="150" class="ma-3" :src="character.image" />
          </v-col>
          <v-col cols="9">
            <div>
              <h2>{{ character.name }}</h2>
              <h4>{{ character.species }}</h4>
            </div>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-subtitle>
        <v-row>
          <v-col cols="3">
            <h3>Información</h3>
          </v-col>
          <v-col cols="9">
            <v-row>
              <v-col cols="12">
                <h4>Género</h4>
                <p>{{ character.gender }}</p>
              </v-col>
              <v-col cols="12">
                <h4>Origen</h4>
                <p>{{ character.origin.name }}</p>
              </v-col>
              <v-col cols="12">
                <h4>Estado</h4>
                <p>{{ character.status }}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  character: {
    type: Object,
    required: true,
  },
});

const dialog = ref(false);

const closeDialog = () => {
  dialog.value = false;
};

watch(
  () => props.character,
  (newVal) => {
    if (newVal) {
      dialog.value = true;
    }
  }
);
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>

<template>
  <div class="container">
    <v-btn elevation="0" icon @click="dialog = true">
      <v-icon>mdi-tune</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="600">
      <v-card class="py-5 px-1">
        <v-card-title class="headline d-flex justify-lg-space-between">
          Filtros avanzados
          <v-btn color="black" variant="text" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-form>
            <div>
              <h3>Especie</h3>
              <v-chip-group
                class="mb-5"
                variant="outlined"
                v-model="filters.species"
                active-class="primary--text"
              >
                <v-chip
                  v-for="option in speciesOptions"
                  :key="option"
                  :value="option.code"
                  clickable
                >
                  {{ option.label }}
                </v-chip>
              </v-chip-group>
            </div>
            <div>
              <h3>Género</h3>
              <v-chip-group
                class="mb-5"
                v-model="filters.gender"
                active-class="primary--text"
                variant="outlined"
              >
                <v-chip
                  v-for="option in genderOptions"
                  :key="option"
                  :value="option.code"
                  clickable
                >
                  {{ option.label }}
                </v-chip>
              </v-chip-group>
            </div>
            <div>
              <h3>Estado</h3>
              <v-chip-group
                v-model="filters.status"
                active-class="primary--text"
                variant="outlined"
              >
                <v-chip
                  v-for="option in statusOptions"
                  :key="option"
                  :value="option.code"
                  outlined
                  clickable
                >
                  {{ option.label }}
                </v-chip>
              </v-chip-group>
            </div>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn class="bg-green-darken-1 px-6 py-2" @click="applyFilters"
            >Aplicar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["save-filters"]);

const dialog = ref(false);
const filters = ref({ species: "", gender: "", status: "" });

const speciesOptions = [
  { label: "Humano", code: "Human" },
  { label: "Humanoide", code: "Humanoid" },
  { label: "Alien", code: "Alien" },
];
const genderOptions = [
  { label: "Masculino", code: "male" },
  { label: "Femenino", code: "female" },
  { label: "Desconocido", code: "unknown" },
];
const statusOptions = [
  { label: "Vivo", code: "alive" },
  { label: "Muerto", code: "dead" },
];

const applyFilters = () => {
  emit("save-filters", filters.value);
  dialog.value = false;
};
</script>

<style lang="scss">
.container {
  font-family: "Montserrat", sans-serif;
}
</style>

<template>
  <div>
    <v-btn icon @click="dialog = true">
      <v-icon>mdi-filter-variant</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="headline">Filtros de Búsqueda</v-card-title>
        <v-card-text>
          <v-form>
            <div>
              <h3>Especie</h3>
              <v-chip-group
                v-model="filters.species"
                active-class="primary--text"
              >
                <v-chip
                  v-for="option in speciesOptions"
                  :key="option"
                  :value="option.code"
                  outlined
                  clickable
                >
                  {{ option.label }}
                </v-chip>
              </v-chip-group>
            </div>
            <div>
              <h3>Género</h3>
              <v-chip-group
                v-model="filters.gender"
                active-class="primary--text"
              >
                <v-chip
                  v-for="option in genderOptions"
                  :key="option"
                  :value="option.code"
                  outlined
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
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="applyFilters"
            >Aplicar</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Cerrar</v-btn
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

<style scoped>
/* Añade tus estilos aquí */
</style>

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
                multiple
              >
                <v-chip
                  v-for="option in speciesOptions"
                  :key="option"
                  :value="option"
                  outlined
                  clickable
                >
                  {{ option }}
                </v-chip>
              </v-chip-group>
            </div>
            <div>
              <h3>Género</h3>
              <v-chip-group
                v-model="filters.gender"
                active-class="primary--text"
                multiple
              >
                <v-chip
                  v-for="option in genderOptions"
                  :key="option"
                  :value="option"
                  outlined
                  clickable
                >
                  {{ option }}
                </v-chip>
              </v-chip-group>
            </div>
            <div>
              <h3>Estado</h3>
              <v-chip-group
                v-model="filters.status"
                active-class="primary--text"
                multiple
              >
                <v-chip
                  v-for="option in statusOptions"
                  :key="option"
                  :value="option"
                  outlined
                  clickable
                >
                  {{ option }}
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
import { useCharactersStore } from "@/stores/characters";

const store = useCharactersStore();
const dialog = ref(false);
const filters = ref({ species: "", gender: "", status: "" });

const speciesOptions = [
  "Humano",
  "Cronenbergs",
  "Meeseeks",
  "Arañas Gigantes Telépatas",
];
const genderOptions = ["Masculino", "Femenino", "Desconocido"];
const statusOptions = ["Vivo", "Muerto"];
const applyFilters = () => {
  store.setFilters(filters.value);
  store.getCharacters();
  dialog.value = false;
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>

<script setup></script>

<template>
  <!-- Hacer tres divs, formando tres capas, la primera siendo la imagen como background, la segunda siendo un div con el position absolute y le bajamos la opacidad, el tercero es el div con el texto  -->
  <div class="background-img">
    <v-img src="@/assets/rick-morty-wallpaper.png" height="100vh" cover></v-img>
    <div class="opacity">
      <v-container class="fill-height align-center justify-center">
        <div class="text-center">
          <v-img src="@/assets/brand-logo.png" height="130" class="mb-9"></v-img>
          <h1>Bienvenido a Rick and Morty</h1>
          <p class="mt-5">
            En esta prueba, evaluaremos su capacidad para construir la
            aplicación mediante el análisis de código y la reproducción del
            siguiente diseño.
          </p>
          <v-btn
            to="/searcher"
            variant="tonal"
            class="button bg-green-darken-3 opacity-100 mt-8"
            >Comenzar</v-btn
          >
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">

body {
  font-family: 'Montserrat', sans-serif;
}

.opacity {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.text-center {
  color: rgba(255, 255, 255, 1);
  opacity: 1;
  width: 650px;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}


</style>

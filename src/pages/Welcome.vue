<script setup></script>

<template>
  <!--   <v-img
    src="../assets/rick-morty-wallpaper.png"
    height="500"
    cover
    filter="brightness(40%)"
  >
    <v-container class="fill-height align-center justify-center">
      <div class="text-center">
        <h1>Bienvenido a Rick and Morty</h1>
        <p>
          En esta prueba, evaluaremos su capacidad para construir la aplicación
          mediante el análisis de código y la reproducción del siguiente diseño.
        </p>
        <v-btn
          variant="tonal"
          rounded=""
          class="bg-green-darken-3 text-grey-darken-4"
          >Comenzar</v-btn
        >
      </div>
    </v-container>
  </v-img> -->

  <!-- Hacer tres divs, formando tres capas, la primera siendo la imagen como background, la segunda siendo un div con el position absolute y le bajamos la opacidad, el tercero es el div con el texto  -->
  <div class="background-img">
    <v-img src="@/assets/rick-morty-wallpaper.png" height="100vh" cover></v-img>
    <div class="opacity">
      <v-container class="fill-height align-center justify-center">
        <div class="text-center">
          <h1>Bienvenido a Rick and Morty</h1>
          <p class="mt-5">
            En esta prueba, evaluaremos su capacidad para construir la
            aplicación mediante el análisis de código y la reproducción del
            siguiente diseño.
          </p>
          <v-btn
            variant="tonal"
            class="bg-green-darken-3 text-black opacity-100 mt-8"
            >Comenzar</v-btn
          >
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.opacity {
  background-color: black;
  opacity: 0.7;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>

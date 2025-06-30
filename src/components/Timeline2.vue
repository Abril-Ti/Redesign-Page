<template>
  <div class="text-center timeline-container">
    <h2 class="text-center montserrat-regular">GRUPO AVOHIT DE MÉXICO A TRAVÉS DEL TIEMPO</h2>
    <div class="decorative-line mb-10 mx-auto"></div>

    <!-- Año 2019 -->
    <div class="year-label">
      <img src="/Timeline/2019.png" alt="" class="year-label mb-6" data-aos="zoom-in">
    </div>

    <v-timeline align="center">
      <v-timeline-item dot-color="#9cbd98"/>
      <v-timeline-item dot-color="#9cbd98"/>
      <v-timeline-item dot-color="#9cbd98"/>

      <v-timeline-item icon="mdi-calendar" dot-color="#9cbd98" fill-dot>
        <template #opposite>
          <img src="/Timeline/img-2019.png" style="width: 496px; margin-left: 5rem;" class="d-none d-md-block" />
        </template>
        <div>
          <!--<h5 class="sub">La primera Piedra</h5>  -->
          
          <p class="txt-description" style="margin-right: 5rem;">
            Inicio la construcción del empaque de Grupo Avohit de México, en Morelia, Michoacán.
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item dot-color="#9cbd98"/>
      <v-timeline-item dot-color="#9cbd98"/>
      <v-timeline-item dot-color="#9cbd98"/>
    </v-timeline>

    <!-- Año 2022 -->
    <div class="year-label">
      <img src="/Timeline/2022.png" alt="" class="year-label mb-6" data-aos="zoom-in">
    </div>

    <v-timeline align="center">
      <v-timeline-item dot-color="#9cbd98"/>
      <v-timeline-item dot-color="#9cbd98"/>
      <v-timeline-item dot-color="#9cbd98"/>

      <v-timeline-item icon="mdi-calendar" dot-color="#9cbd98" fill-dot>
        <template #opposite>
          <img src="/Timeline/img-2023-1.png" style="width: 480px; margin-left: 5rem;" class="d-none d-md-block" />
        </template>
        <div>
          <!--<h6 class="font-weight-bold">Febrero</h6>-->
          
          <p class="txt-description" style="margin-right: 5rem;">
            Inaguración del empaque.
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item icon="mdi-calendar" dot-color="#9cbd98" fill-dot>
        <template #opposite>
          <img src="/Timeline/img-2023-2.JPG" style="width: 480px; margin-left: 5rem;" class="d-none d-md-block" />
        </template>
        <div>
          <!-- <h6 class="font-weight-bold">Mayo</h6> -->
          
          <p class="txt-description" style="margin-right: 5rem;">
            Inicio de las operaciones
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item icon="mdi-calendar" dot-color="#9cbd98" fill-dot>
        <template #opposite>
          <img src="/Timeline/img-2023-3.JPG" style="width: 480px; margin-left: 5rem;" class="d-none d-md-block" />
        </template>
        <div>
          <!--<h6 class="font-weight-bold">Mayo</h6>  -->
          
          <p class="txt-description" style="margin-right: 1px;">
            Primer embarque
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item dot-color="#9cbd98"/>
      <v-timeline-item dot-color="#9cbd98"/>
      <v-timeline-item dot-color="#9cbd98"/>
    </v-timeline>

    <!-- Año 2023 -->
    <div class="year-label">
      <img src="/Timeline/2023.png" alt="" class="year-label mb-6" data-aos="zoom-in">
    </div>

    <v-timeline align="center">
      <v-timeline-item dot-color="#9cbd98"/>
      <v-timeline-item dot-color="#9cbd98"/>
      <v-timeline-item dot-color="#9cbd98"/>

      <v-timeline-item icon="mdi-calendar" dot-color="#9cbd98" fill-dot>
        <div>
          <!-- <h6 class="font-weight-bold">Noviembre</h6> -->
          
          <p class="txt-description" style="margin-right: 5rem;">
            Contenedor número 1000.
          </p>
        </div>
        <template #opposite>
          <img src="/Timeline/img-2024.JPG" style="width: 480px; margin-left: 5rem;" class="d-none d-md-block" />
        </template>
      </v-timeline-item>

      <v-timeline-item dot-color="#9cbd98"/>
      <v-timeline-item dot-color="#9cbd98"/>
      <v-timeline-item dot-color="#9cbd98"/>
    </v-timeline>
  </div>
</template>

<script setup>
</script>

<style scoped>
.timeline-container {
  margin-top: 10rem;
}

.v-timeline-item img {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

.v-timeline-item p {
  margin: 0 auto;
  max-width: 500px;
}

.v-timeline-item {
  text-align: center;
}

/* Oculta líneas entre dots */
.v-timeline-item-divider,
.v-timeline-divider__before,
.v-timeline-divider__after {
  display: none !important;
}

/* Animación de resplandor en los dots */
@keyframes pulse-glow {
  0% {
    box-shadow: 0 0 0px 0 rgba(39, 105, 24, 0.4);
  }
  50% {
    box-shadow: 0 0 12px 6px rgba(39, 105, 24, 0.6);
  }
  100% {
    box-shadow: 0 0 0px 0 rgba(39, 105, 24, 0.4);
  }
}

.v-timeline-divider__dot--size-default .v-timeline-divider__inner-dot {
  animation: pulse-glow 2s infinite;
  border-radius: 50%;
}

/* Responsividad móvil */
@media (max-width: 768px) {
  .v-timeline-item {
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
  }

  .decorative-line{
    width: 150px;
  }
}

.v-timeline {
  --v-timeline-line-thickness: 0 !important;
  
}
.sub{
  font-size: 15px;
}
.decorative-line{
  width: 500px;
}

</style>

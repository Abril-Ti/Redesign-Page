<template>
  <div class="text-center timeline-container">
    <h2 class="text-center montserrat-regular">GRUPO AVOHIT DE MÉXICO A TRAVÉS DEL TIEMPO</h2>
    <div class="decorative-line mb-10 mx-auto"></div>

    <!-- Año 2019 -->
    <div class="year-label">
      <img src="/Timeline/2019.png" alt="" class="year-label mb-6" data-aos="zoom-in">
    </div>

    <v-timeline align="center">
      <div class="text-ceter">
<v-timeline-item dot-color="#9cbd98" />
      <v-timeline-item dot-color="#9cbd98" />
      <v-timeline-item dot-color="#9cbd98" />
      </div>
      

      <v-timeline-item icon="mdi-calendar" dot-color="#9cbd98" fill-dot>
        <!-- Imagen para móvil -->
        <img src="/Timeline/img-2019.png" alt="2019" class="timeline-img mobile-img" />

        <p class="txt-description">
          Inicio la construcción del empaque de Grupo Avohit de México, en Morelia, Michoacán.
        </p>

        <!-- Imagen para escritorio -->
        <template #opposite>
          <img src="/Timeline/img-2019.png" alt="2019" class="timeline-img desktop-img" />
        </template>
      </v-timeline-item>

      <v-timeline-item dot-color="#9cbd98" />
      <v-timeline-item dot-color="#9cbd98" />
      <v-timeline-item dot-color="#9cbd98" />
    </v-timeline>

    <!-- Año 2022 -->
    <div class="year-label">
      <img src="/Timeline/2022.png" alt="" class="year-label mb-6" data-aos="zoom-in">
    </div>

    <v-timeline align="center">
      <v-timeline-item dot-color="#9cbd98" />
      <v-timeline-item dot-color="#9cbd98" />
      <v-timeline-item dot-color="#9cbd98" />

      <v-timeline-item icon="mdi-calendar" dot-color="#9cbd98" fill-dot>
        <img src="/Timeline/img-2023-1.png" alt="2022" class="timeline-img mobile-img" />
        <p class="txt-description">
          Inauguración del empaque.
        </p>
        <template #opposite>
          <img src="/Timeline/img-2023-1.png" alt="2022" class="timeline-img desktop-img" />
        </template>
      </v-timeline-item>

      <v-timeline-item icon="mdi-calendar" dot-color="#9cbd98" fill-dot>
        <img src="/Timeline/img-2023-2.JPG" alt="2022" class="timeline-img mobile-img" />
        <p class="txt-description">
          Inicio de las operaciones
        </p>
        <template #opposite>
          <img src="/Timeline/img-2023-2.JPG" alt="2022" class="timeline-img desktop-img" />
        </template>
      </v-timeline-item>

      <v-timeline-item icon="mdi-calendar" dot-color="#9cbd98" fill-dot>
        <img src="/Timeline/img-2023-3.JPG" alt="2022" class="timeline-img mobile-img" />
        <p class="txt-description">
          Primer embarque
        </p>
        <template #opposite>
          <img src="/Timeline/img-2023-3.JPG" alt="2022" class="timeline-img desktop-img" />
        </template>
      </v-timeline-item>

      <v-timeline-item dot-color="#9cbd98" />
      <v-timeline-item dot-color="#9cbd98" />
      <v-timeline-item dot-color="#9cbd98" />
    </v-timeline>

    <!-- Año 2023 -->
    <div class="year-label" data-aos="zoom-in">
      <img src="/Timeline/2023.png" alt="" class="year-label mb-6" >
    </div>
    
    <!--        PRUEBA DE ITEM CAMBIANTE          -->        <!-- VISTA MÓVIL -->
       <v-timeline align="center" class="row">
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
              <img src="/Timeline/img-2024.JPG" style="width: 480px; margin-left: 5rem;" class="" />
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

.v-timeline-item{
  background-color: none;
}
/* Imágenes */
.timeline-img {
  max-width: 480px;
  width: 100%;
  height: auto;
  margin: 1rem auto;
  display: block;
}

/* Control de visibilidad */
.desktop-img {
  display: none;
}
.mobile-img {
  display: block;
}

/* Texto */
.v-timeline-item p,
.txt-description {
  margin: 0 auto;
  max-width: 500px;
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  text-align: justify;
}

/* Oculta líneas entre dots */
.v-timeline-item-divider,
.v-timeline-divider__before,
.v-timeline-divider__after {
  display: none !important;
}

/* Animación de glow */
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

/* Línea decorativa */
.decorative-line {
  width: 600px;
  height: 2px;
  background-color: #000;
  margin-bottom: 3rem;
}

/* Responsivo */
@media (min-width: 769px) {
  .desktop-img {
    display: block;
  }
  .mobile-img {
    display: none;
  }
}

@media (max-width: 768px) {
  .v-timeline-item {
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    padding: 2rem 1rem;
  }

  .txt-description {
    max-width: 95%;
    text-align: justify;
    margin-top: 1rem;
  }

  .timeline-img {
    margin-bottom: 1.5rem;
  }

  .decorative-line {
    width: 150px !important;
  }
}

/* Línea de tiempo sin línea vertical */
.v-timeline {
  --v-timeline-line-thickness: 0 !important;
}
</style>

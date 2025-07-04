<template>
  <div>
    <!-- NOSOTROS -->
    <h2 class="text-center montserrat-regular">NOSOTROS</h2>
    <div class="decorative-line line-nos"></div>

    <v-container class="info-section" fluid>
      <v-row class="section-row" align="start" dense>
        <v-col cols="12" md="6" order-md="1" order="2">
          <p class="txt-description">
            Somos una empresa pionera en el rubro del aguacate, cuyo propósito inicia desde la selección de las mejores tierras y ubicación geográfica que involucra la diversidad de climas y altitudes con la finalidad de producir la mejor calidad y máximo volumen en el mundo.
          </p>
        </v-col>
        <v-col cols="12" md="6" order-md="2" order="1">
          <img src="/foto-prueba-marcaagu.jpg" alt="Marca Avohit" class="img-content" />
        </v-col>
      </v-row>
    </v-container>

    <!-- NUESTRO RUMBO -->
    <h2 class="text-center montserrat-regular mt-16">NUESTRO RUMBO</h2>
    <div class="decorative-line line-nues"></div>

    <v-container class="info-section" fluid>
      <!-- Bloque 1 -->
      <v-row class="section-row" align="start" dense>
        <v-col cols="12" md="6" order-md="1" order="1">
          <img src="/img-us2.png" alt="Fundación" class="img-content" />
        </v-col>
        <v-col cols="12" md="6" order-md="2" order="2">
          <p class="txt-description">
            Grupo Avohit de México fue fundado el 12 de agosto del 2019, colocando la primera piedra de la mega planta agroindustrial de Avohit, en Morelia, Michoacán.
          </p>
        </v-col>
      </v-row>

      <!-- Bloque 2 -->
      <v-row class="section-row" align="start" dense>
        <v-col cols="12" md="6" order-md="1" order="2">
          <p class="txt-description">
            Somos una empacadora que apuesta por el trabajo local y la delicadeza que pueden dar las mujeres mexicanas en el trato y la selección de nuestra fruta.
          </p>
        </v-col>
        <v-col cols="12" md="6" order-md="2" order="1">
          <img src="/img-us3.png" alt="Mujeres trabajadoras" class="img-content" />
        </v-col>
      </v-row>

      <!-- Bloque 3 -->
      <v-row class="section-row" align="start" dense>
        <v-col cols="12" md="6" order-md="1" order="1">
          <img src="/img-us.png" alt="Visión empresarial" class="img-content" />
        </v-col>
        <v-col cols="12" md="6" order-md="2" order="2">
          <p class="txt-description">
            Tenemos claro a dónde queremos llegar: ofrecer la mejor calidad para su mercado y el mejor ambiente de trabajo, con las mejores instalaciones posibles para ello.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Línea del tiempo -->
    <Timeline2 />
  </div>
</template>

<script setup>
import Timeline2 from './Timeline2.vue'
</script>

<style scoped>
/* Espaciado general */
.section-row {
  margin-bottom: 100px;
}

/* Imágenes */
.img-content {
  width: 100%;
  max-width: 540px;
  height: auto;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

/* Texto */
.txt-description {
  
  text-align: justify;
  max-width: 90%;
  margin: 0 auto;
}

/* Líneas decorativas */
.decorative-line {
  height: 2px;
  background-color: #000;
  
}
.line-nos {
  width: 330px;
}
.line-nues {
  width: 500px;
}

/* Responsividad */
@media (max-width: 768px) {
  .section-row {
    flex-direction: column !important;
    text-align: center;
  }

  .txt-description {
    max-width: 95%;
    margin-top: 1.5rem;
  }

  .img-content {
    max-width: 90%;
    margin-bottom: 1.5rem;
  }

  .decorative-line {
    width: 250px !important;
  }
}
.img-content {
  transition: transform 0.4s ease;
}
.img-content:hover {
  transform: scale(1.05);
   box-shadow: 0 12px 24px rgba(112, 148, 101, 0.3);
}
</style>

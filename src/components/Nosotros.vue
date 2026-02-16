<template>
  <div>
    <!-- NOSOTROS -->
    <h2 class="text-center montserrat-regular">{{$t("about.title1")}}</h2>
    <div class="decorative-line line-nos"></div>

    <v-container class="info-section" fluid>
      <v-row class="section-row" align="start" dense>
        <v-col cols="12" md="6" order-md="1" order="2">
          <p class="txt-description">{{$t("about.us")}}</p>
        </v-col>
        <v-col cols="12" md="6" order-md="2" order="1">
          <img src="/PanoramicaEmpOP.jpg" alt="Panoramica Empaque" class="img-content" />
          <!--<img src="/foto-prueba-marcaagu.jpg" alt="Marca Avohit" class="img-content" /> -->
        </v-col>
      </v-row>
    </v-container>

    <!-- NUESTRO RUMBO -->
    <h2 class="text-center montserrat-regular mt-16">{{$t("about.title2")}}</h2>
    <div class="decorative-line line-nues"></div>

    <v-container class="info-section" fluid>
      <!-- Bloque 1 -->
      <v-row class="section-row" align="start" dense>
        <v-col cols="12" md="6" order-md="1" order="1">
          <img src="/img-us2.png" alt="Fundación" class="img-content" />
        </v-col>
        <v-col cols="12" md="6" order-md="2" order="2">
          <p class="txt-description">{{$t("about.gpo")}}</p>
        </v-col>
      </v-row>

      <!-- Bloque 2 -->
      <v-row class="section-row" align="start" dense>
        <v-col cols="12" md="6" order-md="1" order="2">
          <p class="txt-description">{{$t("about.us2")}}</p>
        </v-col>
        <v-col cols="12" md="6" order-md="2" order="1">
          <!--<img src="/img-us3.png" alt="Mujeres trabajadoras" class="img-content" /> -->
          <img src="/EmpacadorasOP.jpg" alt="Mujeres trabajadoras " class="img-content" /> 

        </v-col>
      </v-row>

      <!-- Bloque 3 -->
      <v-row class="section-row" align="start" dense>
        <v-col cols="12" md="6" order-md="1" order="1">
          <img src="/FotoGeneralOP.jpg" alt="Foto empleados" class="img-content" />
          <!-- <img src="/img-us.png" alt="Visión empresarial" class="img-content" />-->
        </v-col>
        <v-col cols="12" md="6" order-md="2" order="2">
          <p class="txt-description">{{$t("about.cal")}}</p>
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
  max-width: 90%!important;
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
    max-width: 80%;
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

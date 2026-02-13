<template>
  <div>

    <!-- NUESTRO COMPROMISO -->
    <h2 class="text-center montserrat-regular">{{ $t("compr.title1") }}</h2>
    <div class="decorative-line line-comp"></div>

    <v-container fluid class="contenedor-textos">
      <v-row class="align-center justify-center compromiso-section">
        <v-col cols="12" md="6" class="text-md-end text-center">
          <p class="txt-description txt-val">{{ $t("compr.com") }} </p>
        </v-col>

        <v-col cols="12" md="6" class="text-center">
          <img src="/Arbol-OP.jpg" alt="Compromiso" class="img-content" />
        </v-col>
      </v-row>
    </v-container>

    <!-- VISIÓN -->
    <div class="text-center contenedor-textos" style="margin-top: 100px;">
      <h2 class="montserrat-regular txt-val">{{ $t("compr.title2") }}</h2>
      <div class="decorative-line line-vis"></div>
      <p class="txt-description txt-val">{{ $t("compr.vis") }}</p>
    </div>

    <!-- MISIÓN -->
    <div class="text-center contenedor-textos">
      <h2 class="montserrat-regular mt-10 txt-val">{{ $t("compr.title3") }}</h2>
      <div class="decorative-line line-vis"></div>
      <p class="txt-description txt-val">{{ $t("compr.mis") }}</p>
    </div>

    <!-- NUESTROS VALORES -->
    <div class="container-valores text-center mb-7 contenedor-textos">
      <h2 class="montserrat-regular">{{ $t("compr.title4") }}</h2>
      <div class="decorative-line line-val"></div>
      <p class="txt-description txt-val">{{ $t("compr.val") }}</p>

      <v-container class="text-center">
        <v-row class="justify-center">
          <v-col
            v-for="(foto, index) in fotos"
            :key="index"
            cols="12"
            sm="6"
            md="3"
            class="valor-item"
            data-aos="flip-down"
          >
            <img :src="foto.url" :alt="foto.texto" class="icon-valor" />
            <p class="txt-description valor text-center">  {{ $t(`compr.vals.${foto.texto}`) }}</p>
          </v-col>
        </v-row>
      </v-container>
    </div>

  </div>
</template>

<script setup>
const fotos = [
  { url: 'valores/iconos-web-1.png', texto: 'calidad' },
  { url: 'valores/iconos-web-2.png', texto: 'honestidad' },
  { url: 'valores/iconos-web-3.png', texto: 'gratitud' },
  { url: 'valores/iconos-web-4.png', texto: 'responsabilidad' },
  { url: 'valores/iconos-web-5.png', texto: 'etica' },
  { url: 'valores/iconos-web-6.png', texto: 'pasion' },
  { url: 'valores/iconos-web-7.png', texto: 'trabajo' },
  { url: 'valores/iconos-web-8.png', texto: 'respeto' },
];
</script>

<style scoped>
/* Contenedor unificado para todas las secciones */
.contenedor-textos {
  max-width: 1200px;
  margin: 0 auto;
}

/* Imagen */
.img-content {
  width: 100%;
  max-width: 500px;
  height: auto;
  display: block;
  margin: auto;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.img-content:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(112, 148, 101, 0.3);
}

/* Líneas decorativas */
.decorative-line {
  height: 2px;
  background-color: #000;
  margin: 0 auto 1.5rem auto;
}
.line-comp { width: 650px; }
.line-vis { width: 250px; }
.line-val { width: 350px; }

/* Texto */
.txt-description {
  width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
}
.txt-val {
  margin: 0 auto;
  max-width: 1200px;
}

/* Valores */
.icon-valor {
  width: 140px;
  height: auto;
  margin-bottom: 1rem;
}
.valor {
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .img-content { max-width: 300px; }
  .icon-valor { width: 120px; }
  .valor { font-size: 15px; }
  .line-comp, .line-vis, .line-val {
    width: 250px !important;
  }
}
</style>

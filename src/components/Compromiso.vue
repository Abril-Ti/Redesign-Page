<template>
  <div>
    <!-- NUESTRO COMPROMISO -->
    <h2 class="text-center montserrat-regular">NUESTRO COMPROMISO</h2>
    <div class="decorative-line line-comp"></div>

    <v-container fluid>
      <v-row class="align-center justify-center compromiso-section">
        <v-col cols="12" md="6" class="text-md-end text-center">
          <p class="txt-description txt-block">
            Somos una empresa comprometida, solidaria, responsable con el medio ambiente y población, al conservar desde el inicio de la cosecha, hasta el último proceso con la industria cumpliendo con todas las reglas de índole socioambiental.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <img src="/foto-prueba-marcaagu.jpg" alt="Compromiso" class="img-content" />
        </v-col>
      </v-row>
    </v-container>

    <!-- VISIÓN -->
    <div class="text-center container-vision " style="margin-top: 100px;">
      <h2 class="montserrat-regular txt-val">VISIÓN</h2>
      <div class="decorative-line line-vis"></div>
      <p class="txt-description txt-val txt-block">
        Nuestra misión es ser una empresa completamente comprometida desde el cultivo, cosecha, empaque y traslado del aguacate hasta el contacto con el cliente, con los estándares más exigentes en la calidad e inocuidad, mediante la tecnología más vanguardista del mercado, satisfaciendo así el paladar por medio de la calidad en todo el mundo, sin distinción de temporadas.
      </p>
    </div>

    <!-- MISIÓN -->
    <div class="text-center container-mision">
      <h2 class="montserrat-regular mt-10 txt-val">MISIÓN</h2>
      <div class="decorative-line line-vis"></div>
      <p class="txt-description txt-val txt-block">
        Crecer como la empresa líder en el mercado internacional con el proceso de trazabilidad más íntegro, que preserva la calidad desde el cultivo hasta la exportación, por medio de la tecnología más vanguardista, obteniendo así la mayor eficiencia, confianza y capacidad de acuerdo a la demanda de cualquier temporada.
      </p>
    </div>

    <!-- NUESTROS VALORES -->
    <div class="container-valores text-center">
      <h2 class="montserrat-regular">NUESTROS VALORES</h2>
      <div class="decorative-line line-val"></div>
      <p class="txt-description txt-val txt-block">
        Socialmente somos una empresa que no distingue cuestiones culturales, creencias, incluyendo diversidad de preferencias en la sociedad, caracterizándonos principalmente por:
      </p>

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
            <p class="txt-description valor text-center">{{ foto.texto }}</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>
const fotos = [
  { url: 'valores/iconos-web-1.png', texto: 'Calidad' },
  { url: 'valores/iconos-web-2.png', texto: 'Honestidad' },
  { url: 'valores/iconos-web-3.png', texto: 'Gratitud' },
  { url: 'valores/iconos-web-4.png', texto: 'Responsabilidad' },
  { url: 'valores/iconos-web-5.png', texto: 'Ética' },
  { url: 'valores/iconos-web-6.png', texto: 'Pasión' },
  { url: 'valores/iconos-web-7.png', texto: 'Trabajo en equipo' },
  { url: 'valores/iconos-web-8.png', texto: 'Respeto' },
];
</script>

<style scoped>
.img-content {
  width: 100%;
  max-width: 500px;
  height: auto;
  display: block;
  margin: auto;
  object-fit: cover;
}
.decorative-line {
  height: 2px;
  background-color: #000;
  margin: 0 auto 1.5rem auto;
}

/* Alineación de contenido */
.txt-val {
  padding: 0;
  margin: 0 auto;
  max-width: 1200px;
}
.txt-block {
  margin: 0 auto;
}

/* Líneas personalizadas */
.line-comp {
  width: 650px;
}
.line-vis {
  width: 250px;
}
.line-val {
  width: 350px;
}

/* VALORES */
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
.txt-description{
    width: 100%;
}
/* Responsive */
@media (max-width: 768px) {
  .img-content {
    max-width: 300px;
  }

  .txt-val {
    padding: 0 1.5rem;
  }

  .txt-block {
    max-width: 100%;
  }

  .icon-valor {
    width: 120px;
  }

  .valor {
    font-size: 15px;
  }

  .line-comp,
  .line-vis,
  .line-val {
    width: 250px !important;
  }
}
@media (min-width: 1920px) {
    .v-container {
        max-width: 1200px;
    }
}
</style>

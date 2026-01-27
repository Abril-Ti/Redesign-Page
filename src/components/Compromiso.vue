<template>
  <div>

    <!-- NUESTRO COMPROMISO -->
    <h2 class="text-center montserrat-regular">NUESTRO COMPROMISO</h2>
    <div class="decorative-line line-comp"></div>

    <v-container fluid class="contenedor-textos">
      <v-row class="align-center justify-center compromiso-section">
        <v-col cols="12" md="6" class="text-md-end text-center">
          <p class="txt-description txt-val">
            Somos una empresa comprometida, solidaria, responsable con el medio ambiente y población, al conservar desde el inicio de la cosecha, hasta el último proceso con la industria cumpliendo con todas las reglas de índole socioambiental.
          </p>
        </v-col>

        <v-col cols="12" md="6" class="text-center">
          <img src="/Arbol-OP.jpg" alt="Compromiso" class="img-content" />
        </v-col>
      </v-row>
    </v-container>

    <!-- VISIÓN -->
    <div class="text-center contenedor-textos" style="margin-top: 100px;">
      <h2 class="montserrat-regular txt-val">VISIÓN</h2>
      <div class="decorative-line line-vis"></div>
      <p class="txt-description txt-val">
        Nuestra misión es ser una empresa completamente comprometida desde el cultivo, cosecha, empaque y traslado del aguacate hasta el contacto con el cliente, con los estándares más exigentes en la calidad e inocuidad, mediante la tecnología más vanguardista del mercado, satisfaciendo así el paladar por medio de la calidad en todo el mundo, sin distinción de temporadas.
      </p>
    </div>

    <!-- MISIÓN -->
    <div class="text-center contenedor-textos">
      <h2 class="montserrat-regular mt-10 txt-val">MISIÓN</h2>
      <div class="decorative-line line-vis"></div>
      <p class="txt-description txt-val">
        Crecer como la empresa líder en el mercado internacional con el proceso de trazabilidad más íntegro, que preserva la calidad desde el cultivo hasta la exportación, por medio de la tecnología más vanguardista, obteniendo así la mayor eficiencia, confianza y capacidad de acuerdo a la demanda de cualquier temporada.
      </p>
    </div>

    <!-- NUESTROS VALORES -->
    <div class="container-valores text-center mb-7 contenedor-textos">
      <h2 class="montserrat-regular">NUESTROS VALORES</h2>
      <div class="decorative-line line-val"></div>
      <p class="txt-description txt-val">
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

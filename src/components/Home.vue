<template>
  <div class="text-center">
    <!-- Bienvenida -->
    <section class="bienvenida">
      <h2 class="montserrat-regular title-line">BIENVENIDOS</h2>
      <div class="decorative-line line-bienv"></div>
      <div class="text-container">
        <p class="txt-description text-center">
          Trabajamos con el objetivo de mantener el liderazgo en la producción y exportación de aguacates en México.
        </p>
      </div>

      <v-container class="info-section" fluid>
        <v-row class="align-start section-row mb-5" dense>
          <v-col cols="12" md="6" order-md="1" order="1">
            <img src="/Aguacate-malla.jpg" alt="Aguacate en malla" class="img-content"/>
          </v-col>
          <v-col cols="12" md="6" order-md="2" order="2">
            <p class="txt-description">      
              Nos esforzamos por ofrecer al mercado nacional e internacional un producto de primera calidad, con un sabor excepcional, altos estándares de inocuidad y un proceso de trazabilidad confiable de principio a fin.
            </p>
          </v-col>
        </v-row>

        <v-row class="align-start section-row mb-5" dense data-aos="fade-left">
          <v-col cols="12" md="6" order-md="2" order="1" >
            <img src="/workers.jpg" alt="Trabajadores" class="img-content" />
          </v-col>
          <v-col cols="12" md="6" order-md="1" order="2">
            <p class="txt-description">
              Nuestra producción se basa en prácticas eficientes y sustentables que no solo garantizan la calidad del aguacate, sino que también generan beneficios económicos para nuestros asociados.
            </p>
          </v-col>
        </v-row>

        <v-row class="align-start section-row mb-5 mt-5" dense>
          <v-col cols="12" md="6" order-md="1" order="1">
            <img src="/varios.jpg" alt="Aguacates varios" class="img-content" />
          </v-col>
          <v-col cols="12" md="6" order-md="2" order="2">
            <p class="txt-description">
              Impulsamos el desarrollo y la prosperidad de las comunidades donde operamos, reafirmando nuestro compromiso social y ambiental.
            </p>
          </v-col>
        </v-row>
</v-container>


    </section>

    <!-- Descubre -->
    <section class="carousel-container">
      <h2 class="montserrat-regular title-line">DESCUBRE</h2>
      <div class="decorative-line line-desc"></div>
      <div class="text-container">
        <p class="txt-description text-center">
          ¡Conoce parte de nuestras instalaciones y lo que hacemos para entregarte la mejor calidad!
        </p>
      </div>
      <SliderComponent />
    </section>

    <!-- Certificaciones -->
    <section class="certificaciones-container mt-10">
      <h2 class="montserrat-regular title-line">CERTIFICACIONES</h2>
      <div class="decorative-line line-cert"></div>
      <div class="text-container">
        <p class="txt-description text-center">
          Nuestras certificaciones respaldan el compromiso constante con la mejora continua y la confianza de nuestros socios comerciales a nivel internacional.
        </p>
      </div>
      <div class="d-flex flex-wrap-reverse align-center justify-center mb-6">
        <ul class="list-certificaciones txt-description">
          <li>🥑 Programa de Exportaciones de Aguacate Hass de México a los E.U.A.</li>
          <li>🥑 Norma GLOBALG.A.P. para Cadena de Custodia (CoC).</li>
          <li>🥑 Sistemas de Reducción de Riesgos de Contaminación.</li>
          <li>🥑 Sedex Members Ethical Trade Audit (SMETA).</li>
          <li>🥑 PrimusGFS.</li>
        </ul>
        <img src="/Aguacate-mascota-lapiz.png" alt="Mascota con lápiz" class="img-content" />
      </div>
    </section>

    <!-- Instalaciones -->
    <section class="instalaciones">
      <h2 class="montserrat-regular title-line">NUESTRAS INSTALACIONES</h2>
      <div class="decorative-line line-inst"></div>
      <div class="text-container">
        <p class="txt-description text-center">
          Somos expertos en empacar la mejor elección de sabor para tu hogar, manejamos la mejor calidad, permítenos hacerte experimentar el verdadero sabor del aguacate y darte un golpe de sabor.
        </p>
      </div>
      <div ref="videoSection" class="video-section">
        <video
          ref="promoVideo"
          src="/VideoPrueba.mp4"
          autoplay
          muted
          controls
          playsinline
          preload="auto"
          class="promo-video"
        ></video>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SliderComponent from '../components/Slider.vue';

const promoVideo = ref(null);
const videoSection = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (promoVideo.value) {
        entry.isIntersecting ? promoVideo.value.play() : promoVideo.value.pause();
      }
    });
  }, { threshold: 0.5 });

  if (videoSection.value) observer.observe(videoSection.value);
});
</script>

<style scoped>
.img-content {
  width: 100%;
  max-width: 450px;
  object-fit: cover;
  margin: 1.5rem auto;
  display: block;
}

.txt-description {
  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  line-height: 1.6;
  margin: 1.5rem auto;
  max-width: 700px;
  text-align: justify;
}

.text-container {
  display: flex;
  justify-content: center;
  margin: 3rem 2rem;
}

.decorative-line {
  height: 2px;
  background-color: #000;
  margin: 0 auto 1.5rem;
}

.line-bienv { width: 380px; }
.line-desc { width: 300px; }
.line-cert { width: 490px; }
.line-inst { width: 690px; }

.list-certificaciones {
  list-style: none;
  padding: 0;
  max-width: 540px;
  text-align: justify;
}

.list-certificaciones li {
  margin-bottom: 1.5rem;
}

.video-section {
  max-width: 1080px;
  margin: 5rem auto;
  padding: 2rem;
}

.promo-video {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .txt-description {
    font-size: 1.1rem;
    text-align: justify;
    width: 90%;
  }

  .decorative-line {
    width: 200px !important;
  }
}
@media (min-width: 1920px) {
    .v-container {
        max-width: 1250px;
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

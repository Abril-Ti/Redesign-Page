<template>
  <div class="text-center">
    <!-- Inicio -->
    <section class="bienvenida">
      <h2 class="montserrat-regular title-line">{{ $t("home.title1") }}</h2>
      <div class="decorative-line line-bienv"></div>
      <div class="text-container">
        <p class="txt-description text-center">{{ $t("home.job") }}</p>
      </div>

      <v-container class="info-section" fluid>
        <v-row class="align-start section-row mb-5" dense>
          <v-col cols="12" md="6" order-md="1" order="1">
             <!-- <img src="/Aguacate-malla.jpg" alt="Aguacate en malla" class="img-content"/>-->
            <img src="/Caja-negra-OP.jpg" alt="Aguacate en malla" class="img-content"/>
          </v-col>
          <v-col cols="12" md="6" order-md="2" order="2">
            <p class="txt-description">{{ $t("home.esf") }}</p>
          </v-col>
        </v-row>

        <v-row class="align-start section-row mb-5" dense data-aos="fade-left">
          <v-col cols="12" md="6" order-md="2" order="1" >
            <!-- <img src="/workers.jpg" alt="Trabajadores" class="img-content" />-->
            <img src="/ProduccionOP.jpg" alt="Trabajadores" class="img-content" />
          </v-col>
          <v-col cols="12" md="6" order-md="1" order="2">
            <p class="txt-description">{{ $t("home.prod") }} </p>
          </v-col>
        </v-row>

        <v-row class="align-start section-row mb-5 mt-5" dense>
          <v-col cols="12" md="6" order-md="1" order="1">
            <!-- <img src="/varios.jpg" alt="Aguacates varios" class="img-content" />-->
            <img src="/PanoramaHuertaCasaOP.jpg" alt="Aguacates varios" class="img-content"/>
          </v-col>
          <v-col cols="12" md="6" order-md="2" order="2">
            <p class="txt-description">{{ $t("home.prom") }}</p>
          </v-col>
        </v-row>
</v-container>


    </section>

    <!-- Descubre -->
    <section class="carousel-container">
      <h2 class="montserrat-regular title-line">{{ $t("home.title2") }}</h2>
      <div class="decorative-line line-desc"></div>
      <div class="text-container">
        <p class="txt-description text-center">{{ $t("home.desc") }}</p>
      </div>
      <SliderComponent />
    </section>

    <!-- Certificaciones -->

    <CertificacionComponent/>

    <!--  DE MOMENTO SE OCULTA ESTA SECCION POR INDICACIONES DE DIRECCION  -->
      <!-- 
     Instalaciones
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
    </section> -->
  
    
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SliderComponent from '../components/Slider.vue';
import CertificacionComponent from './Certificacion.vue';

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

  .avocatin-sal{
    width: 50%;
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

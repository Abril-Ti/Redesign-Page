<template>
  <div>
    <div class="text-center">
      <h2 class="montserrat-regular title-line mt-11">BIENVENIDOS</h2>
      <div class="decorative-line"></div>

      <p class="txt-description mb-10 text-center">
        Trabajamos con el objetivo de mantener el liderazgo en la producción y exportación de aguacates en México.
      </p>

      <!-- Secciones de contenido alternado -->
      <div class="v-sheet d-flex flex-wrap mb-6 align-center justify-center">
        <img src="/Aguacate-malla.jpg" alt="" class="img-content">
        <p class="txt-description text-content">
          Nos esforzamos por ofrecer al mercado nacional e internacional un producto de primera calidad, con un sabor excepcional, altos estándares de inocuidad y un proceso de trazabilidad confiable de principio a fin.
        </p>
      </div>

      <div class="v-sheet d-flex flex-wrap-reverse mb-6 align-center justify-center">
        <p class="txt-description text-content">
          Nuestra producción se basa en prácticas eficientes y sustentables que no solo garantizan la calidad del aguacate, sino que también generan beneficios económicos para nuestros asociados.
        </p>
        <img src="/workers.jpg" alt="" class="img-content">
      </div>

      <div class="v-sheet d-flex flex-wrap mb-6 align-center justify-center">
        <img src="/varios.jpg" alt="" class="img-content">
        <p class="txt-description text-content">
          Al mismo tiempo, impulsamos el desarrollo y la prosperidad de las comunidades donde operamos, reafirmando nuestro compromiso social y ambiental.
        </p>
      </div>
    </div>

    

    <!-- Carousel -->
    <div class="carousel-container text-center">
      <h2 class="montserrat-regular title-line" style="margin-top: 10rem;">DESCUBRE</h2>
      <div class="decorative-line"></div>

      <p class="txt-description mb-10 text-center">
        ¡Conoce parte de nuestras instalaciones y lo que hacemos para entregarte la mejor calidad!
      </p>
      <SliderComponent />
    </div>

    <!-- Certificaciones -->
    <div class="certificaciones-container text-center mt-10" style="margin-bottom: 10rem;">
      <h2 class="montserrat-regular title-line">CERTIFICACIONES</h2>
      <div class="decorative-line"></div>

      <div class="v-sheet d-flex flex-wrap-reverse align-center justify-center mb-6">
        <ul class="text-start list-certificaciones txt-description p-5">
          <li>🥑 Programa de Exportaciones de Aguacate Hass de México a los E.U.A.</li>
          <li>🥑 Norma GLOBALG.A.P. para Cadena de Custodia (CoC).</li>
          <li>🥑 Sistemas de Reducción de Riesgos de Contaminación.</li>
          <li>🥑 Sedex Members Ethical Trade Audit (SMETA).</li>
          <li>🥑 PrimusGFS.</li>
        </ul>
        <img src="/Aguacate-mascota-lapiz.png" alt="" class="img-content">
      </div>
    </div>

    <!-- Instalaciones -->
    <div>
      <h2 class="montserrat-regular title-line text-center">CONOCE NUESTRAS INSTALACIONES</h2>
      <div class="decorative-line"></div>
      <p class="txt-description mb-10 text-center">Somos expertos en empacar la mejor elección de sabor para tu hogar, manejamos la mejor calidad, permítenos hacerte experimentar el verdadero sabor del aguacate y darte un golpe de sabor.</p>
      <!-- Sección de video -->
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
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SliderComponent from '../components/Slider.vue';

const promoVideo = ref(null);
const videoSection = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (promoVideo.value) {
          if (entry.isIntersecting) {
            promoVideo.value.play();
          } else {
            promoVideo.value.pause();
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  if (videoSection.value) {
    observer.observe(videoSection.value);
  }
});
</script>

<style scoped>
li {
  margin-top: 3rem;
}

.img-content {
  width: 400px;
  max-width: 100%;
}

.text-content {
  max-width: 700px;
  padding: 1rem;
}

.txt-description {
  margin-top: 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.decorative-line {
  width: 200px;
  height: 2px;
  background-color: #000000;
  margin: 0 auto 1.5rem auto;
}

.list-certificaciones {
  list-style: none;
  padding-left: 0;
  max-width: 540px;
}

.list-certificaciones li {
  margin-bottom: 20px;
  font-size: 1rem;
}

.video-section {
  width: 100%;
  max-width: 1080px;
  margin: 5rem auto;
  padding: 1rem;
}

.promo-video {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .v-sheet {
    flex-direction: column !important;
  }

  .txt-description,
  .list-certificaciones {
    text-align: center;
  }
}

@media (max-width: 600px) {
  .list-certificaciones {
    max-width: 400px;
  }
  .img-content {
    width: 200px;
  }
}
</style>

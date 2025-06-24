<template>
  <div class="slider-container mt-6">

    <!-- BOTONES LATERALES - ESCRITORIO -->
    <button class="nav-button left d-none d-md-block" @click="prev">
      <img src="/navigate_before.png" alt="Anterior" />
    </button>

    <div class="slider mb-2">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="slide"
        :class="{
          active: index === current,
          left: index === (current - 1 + images.length) % images.length,
          right: index === (current + 1) % images.length
        }"
        @click="index === current ? openModal() : goTo(index)"
      >
        <img :src="img.src" :alt="img.alt" />
      </div>
    </div>

    <button class="nav-button right d-none d-md-block" @click="next">
      <img src="/navigate_next.png" alt="Siguiente" />
    </button>

    <!-- BOTONES INFERIORES - MÓVIL -->
    <div class="nav-buttons-wrapper d-flex d-md-none justify-center mt-4">
      <button class="nav-button" @click="prev">
        <img src="/navigate_before.png" alt="Anterior" />
      </button>
      <button class="nav-button" @click="next">
        <img src="/navigate_next.png" alt="Siguiente" />
      </button>
    </div>

    <!-- Contador -->
    <div class="counter">
      {{ current + 1 }} / {{ images.length }}
    </div>

    <!-- Indicadores -->
    <div class="dot-progress">
      <span
        v-for="(img, index) in images"
        :key="index"
        :class="['dot', { active: index === current }]"
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      images: [
        { src: 'Slider/Slide0.JPG', alt: 'Imagen 1' },
        { src: 'Slider/Slide1.JPG', alt: 'Imagen 2' },
        { src: 'Slider/Slide2.JPG', alt: 'Imagen 3' },
        { src: 'Slider/Slide3.JPG', alt: 'Imagen 4' },
        { src: 'Slider/Slide4.JPG', alt: 'Imagen 5' },
        { src: 'Slider/Slide5.JPG', alt: 'Imagen 6' },
      ]
    };
  },
  methods: {
    next() {
      this.current = (this.current + 1) % this.images.length;
    },
    prev() {
      this.current = (this.current - 1 + this.images.length) % this.images.length;
    },
    goTo(index) {
      this.current = index;
    },
    openModal() {},
  }
};
</script>

<style scoped>
.slider-container {
  text-align: center;
  max-width: 900px;
  margin: auto;
  position: relative;
  padding: 1rem;
}

.slider {
  display: flex;
  justify-content: center;
  position: relative;
  height: 400px;
}

.slide {
  position: absolute;
  width: 70%;
  transition: all 0.5s ease;
  opacity: 0.3;
  transform: scale(0.9);
  cursor: pointer;
}

.slide img {
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.slide.active {
  z-index: 3;
  opacity: 1;
  transform: scale(1.05);
  cursor: default;
}

.slide.left {
  left: -20%;
  z-index: 1;
}

.slide.right {
  left: 50%;
  z-index: 1;
}

.nav-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-button.left {
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translateY(-50%);
}

.nav-button.right {
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
}

.dot-progress {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 1rem;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.dot.active {
  background-color: #276918;
  transform: scale(1.2);
}

.counter {
  margin-top: 5rem;
  font-weight: 600;
  color: #555;
}
@media (max-width: 767px) {
  .counter{
    margin-top: 3px;
  }
  .slider{
    height: 155px;
  }
  .slide.left{
    left: -2%;
  }
  .slide.right{
    left: 30%;
  }
}


</style>

<template>
 
  <div class="slider-container mt-3 mb-10">
    <!--SLIDER-->
    <div class="slider mb-10">
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
    <!-- Modal para pantalla completa -->
<div v-if="showModal" class="modal-overlay" @click.self="closeModal">
  <div class="modal-content">
    <img :src="images[current].src" :alt="images[current].alt" />
    <button class="close-btn" @click="closeModal">✖</button>
  </div>
</div>


    <!-- Controles -->
    <div class="controls">
      <button @click="prev">◀</button>
      <span>{{ current + 1 }} / {{ images.length }}</span>
      <button @click="next">▶</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      images: [
        { src: '/Aguacate-malla.jpg', alt: 'Imagen 1' },
        { src: '/varios.jpg', alt: 'Imagen 2' },
        { src: '/workers.jpg', alt: 'Imagen 3' },
        { src: '/IMG_0032.JPG', alt: 'img 4'},
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
    openModal(){
        this.showModal = true;
    },
    closeModal() {
        this.showModal=false;
    }
  }
};
</script>

<style scoped>
.slider-container {
  text-align: center;
  max-width: 900px;
  margin: auto;
  position: relative;
}

.slider {
  display: flex;
  justify-content: center;
  position: relative;
  height: 400px;
}

.slide {
  position: absolute;
  width: 60%;
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
  left: -30%;
  z-index: 1;
}

.slide.right {
  left: 50%;
  z-index: 1;
}

.controls {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.controls button {
  background-color: #276918;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
}

.controls button:hover {
  background-color: #388e3c;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.close-btn {
  position: absolute;
  top: -20px;
  right: -20px;
  background: white;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  width: 36px;
  height: 36px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

</style>


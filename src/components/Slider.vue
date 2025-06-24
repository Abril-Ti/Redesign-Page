<template>
  <div class="slider-container mt-6">
    <!-- Botón izquierdo -->
    <button class="nav-button left text-center" @click="prev">
      <img src="/navigate_before.png" alt="Anterior" />
    </button>

    <!-- SLIDER -->
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

    <!-- Botón derecho -->
    <button class="nav-button right" @click="next">
      <img src="/navigate_next.png" alt="Siguiente" />
    </button>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="nav-btn modal-left" @click.stop="prev">
          <img src="/navigate_before.png" alt="Anterior" />
        </button>

        <img :src="images[current].src" :alt="images[current].alt" />

        <button class="nav-btn modal-right" @click.stop="next">
          <img src="/navigate_next.png" alt="Siguiente" />
        </button>

        <button class="close-btn" @click="closeModal">✖</button>
      </div>
  </div>


    <!-- Contador -->
    <div class="counter">
      {{ current + 1 }} / {{ images.length }}
        </div>
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
      showModal: false,
      images: [
        { src: 'Slider/Slide0.JPG', alt: 'Imagen 1' },
        { src: 'Slider/Slide1.JPG', alt: 'Imagen 2' },
        { src: 'Slider/Slide2.JPG', alt: 'Imagen 3' },
        { src: 'Slider/Slide3.JPG', alt: 'imagen 4' },
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
    openModal() {
      this.showModal = true;
      window.addEventListener('keydown', this.handleKeydown);
    },
    closeModal() {
      this.showModal = false;
      window.removeEventListener('keydown', this.handleKeydown);
    },
    handleKeydown(e) {
  if (!this.showModal) return;

  if (e.key === 'ArrowRight') {
    this.next();
  } else if (e.key === 'ArrowLeft') {
    this.prev();
  } else if (e.key === 'Escape') {
    this.closeModal();
  }
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
  padding: 1rem;
  margin-bottom: 15rem;
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

/* Botones de navegación a los lados */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 5;
  padding: 0.5rem;
}

.nav-button.left {
  right: 65rem;
}

.nav-button.right {
  left: 65rem;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  position: relative;
  max-width: 95%;
  max-height: 95%;
}

.modal-content img {
  width: 50%;
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

/* Contador */
.counter {
  margin-top: 1rem;
  font-weight: 600;
  color: #555;
}

/* Responsivo */
@media (max-width: 768px) {
  .slide {
    width: 90%;
  }
  .slide.left {
    left: 0px;
  }
  .slide.right {
    left: 0px;
  }
  .nav-button.left {
    left: 6rem;
    margin-top:5rem ;
  }
  .nav-button.right {
    left: 10rem;
    margin-top:5rem ;
  }
  .slider {
     height: 280px;
  }
  .modal-content img {
  width: 90%;
  height: auto;
  border-radius: 10px;
}
}
/* radio boton */
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
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;
  padding: 10px;
}

.modal-left {
  left: -50px;
}

.modal-right {
  right: -50px;
}

@media (max-width: 768px) {
  .modal-left {
    left: 5px;
  }
  .modal-right {
    right: 5px;
  }
}

</style>


<template>
  <div class="timeline-container">
    <!-- 2019 -->
    <div class="timeline-section">
      <div class="timeline-year">2019</div>
      <div class="timeline-dots" :class="{'mobile-dots': isMobile}">
        <span v-for="n in (isMobile ? 2 : 7)" :key="n" class="dot"></span>
      </div>
      <div class="timeline-content">
        <img src="/img-2019.png" class="timeline-img" alt="2019" />
        <p class="timeline-text">
          En agosto se colocó la primera piedra de la Mega Planta agroindustrial de AvoHit, en Morelia Michoacán.
        </p>
      </div>
    </div>

    <!-- 2022 -->
    <div class="timeline-section">
      <div class="timeline-year">2022</div>
      <div class="timeline-dots" :class="{'mobile-dots': isMobile}">
        <span v-for="n in (isMobile ? 2 : 14)" :key="n" class="dot"></span>
      </div>
      <div class="timeline-content intercalated">
        <div>
          <img src="/img-2019.png" class="timeline-img" alt="2022-1" />
          <p class="timeline-text">Febrero, inauguración del empaque.</p>
        </div>
        <div>
          <img src="/img-2019.png" class="timeline-img" alt="2022-2" />
          <p class="timeline-text">Mayo, inicio de operaciones.</p>
        </div>
        <div>
          <img src="/img-2019.png" class="timeline-img" alt="2022-3" />
          <p class="timeline-text">Mayo, primer embarque.</p>
        </div>
      </div>
    </div>

    <!-- 2023 -->
    <div class="timeline-section">
      <div class="timeline-year">2023</div>
      <div class="timeline-dots" :class="{'mobile-dots': isMobile}">
        <span v-for="n in (isMobile ? 2 : 7)" :key="n" class="dot"></span>
      </div>
      <div class="timeline-content">
        <img src="/img-2019.png" class="timeline-img" alt="2023" />
        <p class="timeline-text">6 de noviembre del 2023: contenedor número 1000.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMobile = ref(false);

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };
  checkMobile();
  window.addEventListener('resize', checkMobile);
});
</script>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
}

.timeline-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
}

.timeline-year {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #276918;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.timeline-dots {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 1.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #42b983;
}

.timeline-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
}

.timeline-img {
  width: 480px;
  max-width: 100%;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.timeline-text {
  max-width: 480px;
  font-size: 1.1rem;
  line-height: 1.5;
}

.intercalated > div {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .timeline-content {
    flex-direction: column;
  }

  .timeline-img,
  .timeline-text {
    width: 100%;
    text-align: center;
  }

  .mobile-dots {
    flex-direction: row;
    gap: 12px;
    margin: 1rem 0;
  }
}
</style>

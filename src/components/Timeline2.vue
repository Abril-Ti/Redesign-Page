<template>
  <div class="timeline-container text-center">
    <v-container class="text-center">
      <h2 class="text-center montserrat-regular mt-40">GRUPO AVOHIT DE MÉXICO A TRAVÉS DEL TIEMPO</h2>
    

      <!-- Contenido -->
      <transition name="fade" mode="out-in">
        <v-row :key="selectedIndex" class="mt-10" align="center" justify="center">
          <v-col cols="12" md="5">
            <v-img
              :src="timeline[selectedIndex].img"
              aspect-ratio="1.5"
              class="rounded-lg elevation-4"
              cover
            />
          </v-col>
          <v-col cols="12" md="5">
            <h1 class="montserrat-regular title-age">{{ timeline[selectedIndex].year }}</h1>
            <ul v-if="Array.isArray(timeline[selectedIndex].desc)" class="txt-description">
              <li
                v-for="(text, i) in timeline[selectedIndex].desc"
                :key="i"
                class="my-3">
                {{ text }}
              </li>
            </ul>
            <p v-else class="mt-4 txt-description">{{ timeline[selectedIndex].desc }}</p>
          </v-col>
        </v-row>
      </transition>

      <v-row justify="center" class="position-relative">
        <!-- Línea base -->
        <div class="progress-line"></div>
        <!-- Línea activa -->
        <div
          class="progress-line-active"
          :style="{ width: `${((selectedIndex + 1) / timeline.length) * 100}%` }"
        ></div>

        <!-- Navegación por años -->
        <v-col
          v-for="(item, index) in timeline"
          :key="index"
          class="timeline-dot-col"
          cols="auto"
        >
          <div
            class="timeline-dot"
            :class="{ active: index === selectedIndex }"
            @click="selectItem(index)"
          ></div>
          <div
            class="timeline-year mt-2 montserrat-regular"
            :class="{ active: index === selectedIndex }"
          >
            {{ item.year }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedIndex = ref(0)

const timeline = [
  {
    year: '2019',
    img: 'Timeline/img-2019.png',
    desc: 'Inicio de construcción de la planta agroindustrial.'
  },
  {
    year: '2023',
    img: 'Timeline/img-2023-1.png',
    desc: [
      'Inauguración del empaque.',
      'Inicio de operaciones formales.',
      'Primer embarque.'
    ]
  },
  {
    year: '2024',
    img: 'Timeline/img-2024.JPG',
    desc: 'Embarque numero 1000'
  },
  {
    year: '2025',
    img: 'Timeline/img-2025.JPG',
    desc: 'Tercer Aniversario del empaque.'
  }
]

function selectItem(index) {
  selectedIndex.value = index
}
</script>

<style scoped>
.title-age{
  letter-spacing: 20px;
  font-size: 55px;
}
.timeline-container {
  max-width: 1200px;
  margin: auto;
  padding-top: 4rem;
  padding-bottom: 6rem;
  position: relative;
}

.progress-line {
  position: absolute;
  top: 18px;
  left: 5%;
  width: 100%;
  height: 4px;
  background-color: #cfd8dc;
  z-index: 0;
  border-radius: 2px;
}

.progress-line-active {
  position: absolute;
  top: 18px;
  left: 5%;
  height: 4px;
  background-color: #276918;
  z-index: 1;
  border-radius: 2px;
  transition: width 0.4s ease;
}

.timeline-dot-col {
  position: relative;
  z-index: 2;
  text-align: center;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background-color: #bbb;
  border-radius: 50%;
  margin: auto;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 3px solid transparent;
}

.timeline-dot.active {
  background-color: #276918;
  transform: scale(1.7);
  border-color: #276918;
}

.timeline-year {
  font-weight: 600;
  font-size: 15px;
  color: #444;
  transition: all 0.3s ease;
  letter-spacing: 5px;
}

.timeline-year.active {
  color: #276918;
  font-size: 1.1rem;
  font-weight: bold;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.txt-description{
  width: 100%;
  text-align: center;
}
ul{
  list-style-type:none;
  margin-top: 1rem;
}
@media (max-width: 768px) {
  .timeline-dot {
    width: 14px;
    height: 14px;
  }
  .timeline-year {
    font-size: 12px;
  }
}
</style>

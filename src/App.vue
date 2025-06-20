<template>
<Header></Header>

<RouterView></RouterView>
<transition name="slide-up">
      <div
        v-show="showButton"
        class="scroll-container"
        @click="scrollToTop"
      >
        <svg class="progress-ring" width="70" height="70">
          <circle
            class="progress-ring__background"
            stroke="#8E918E"
            stroke-width="5"
            fill="transparent"
            r="30"
            cx="35"
            cy="35"
          />
          <circle
            class="progress-ring__circle"
            stroke="#81C200"
            stroke-width="5"
            fill="transparent"
            r="30"
            cx="35"
            cy="35"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="dashOffset"
          />
        </svg>
        <button class="scroll-top-button"><img src="/Arrow up.png" alt="" style="width: 49px; height: 54px;"></button>
      </div>
    </transition>

<Footer></Footer>
</template>
<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import { ref, onMounted, onUnmounted, computed } from 'vue'

const showButton = ref(false)
const scrollProgress = ref(0)

const radius = 30
const circumference = 2 * Math.PI * radius

const dashOffset = computed(() => {
  return circumference - scrollProgress.value * circumference
})

const handleScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? scrollTop / docHeight : 0
  showButton.value = scrollTop > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped>
.scroll-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 70px;
  height: 70px;
  z-index: 9999;
  cursor: pointer;
}

.scroll-top-button {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: #D9D9D9;
  color: rgb(0, 0, 0);
  font-size: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.scroll-top-button:hover {
  background-color: #ffffff;
}

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring__circle {
  transition: stroke-dashoffset 0.3s ease;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>

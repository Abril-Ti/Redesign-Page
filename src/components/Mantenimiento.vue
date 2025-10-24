<template>
  <v-container class="not-found-container text-center" fluid>
    <!-- Hojas SVG cayendo -->
    <div class="falling-leaves">
      <svg v-for="n in 10" :key="n" viewBox="0 0 64 64" class="leaf-svg" :style="getLeafStyle(n)">
        <path
          d="M32 2C18 8 6 28 18 48s28 16 28-2S46 6 32 2z"
          fill="#4CAF50"
          stroke="#2E7D32"
          stroke-width="2"
        /><
      </svg>
    </div>

    <v-row align="center" justify="center" class="py-16">
      <v-col cols="12" md="6">
       
        <h1 class="display-2 font-weight-bold text-error" style="font-size: 100px;">¡404!</h1>
        <h2 class="text-h5 font-weight-medium mb-4">
          Ups... Parece que este aguacate se perdió en el camino.
        </h2>
        <p class="txt-piedra mb-6">
          La página que buscas no está disponible o ha sido trasladada. <br />
          Regresa a nuestro empaque virtual para seguir explorando lo mejor del aguacate mexicano.
        </p>
        <RouterLink to="/">
          <v-btn color="success" dark large>
            Volver al inicio
          </v-btn>
        </RouterLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
function getLeafStyle(n) {
  const delay = Math.random() * 10;
  const left = Math.random() * 100;
  const size = 30 + Math.random() * 20;
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    width: `${size}px`,
  };
}
</script>

<style scoped>
.not-found-container {
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #f3f6f4);
  overflow: hidden;
  position: relative;
  font-family: 'Montserrat', sans-serif;
}

.txt-piedra {
  color: #555;
  font-size: 1.1rem;
}


/* Hojas SVG animadas */
.falling-leaves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.leaf-svg {
  position: absolute;
  top: -60px;
  animation: fall 12s linear infinite;
  opacity: 0.85;
}

@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.5;
  }
  50% {
    transform: translateY(50vh) rotate(180deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
</style>

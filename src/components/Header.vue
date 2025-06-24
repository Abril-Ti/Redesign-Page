<template>
  <div class="container-header position-sticky montserrat-font-semibold">
    <div class="container-links">
      <nav>
        <div class="v-sheet d-flex align-center justify-space-between px-4">

          <!-- Logo -->
          <div class="v-sheet pa-2 ml-10">
            <RouterLink to="/" class="nav-link">
              <img src="/Logo-avohit-GRIS.png" alt="Logo" />
            </RouterLink>
          </div>

          <!-- Botón hamburguesa para móvil -->
        <div class="menu-toggle d-md-none mr-4" :class="{ active: mostrarMenu }" @click="mostrarMenu = !mostrarMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>

<!-- Enlaces de navegación -->
        <!-- Enlaces visibles SIEMPRE en pantallas grandes -->
            <div class="d-none d-md-flex align-center nav-items-desktop">
                <div class="v-sheet ma-2"><RouterLink to="/" class="nav-link" @click="cerrarMenuYSubir">INICIO</RouterLink></div>
                <div class="v-sheet ma-2"><RouterLink to="/nosotros" class="nav-link" @click="cerrarMenuYSubir">NOSOTROS</RouterLink></div>
                <div class="v-sheet ma-2"><RouterLink to="/compromiso" class="nav-link" @click="cerrarMenuYSubir">COMPROMISO</RouterLink></div>
                <!-- <div class="v-sheet ma-2"><RouterLink to="/sabiasque" class="nav-link" @click="cerrarMenuYSubir">¿SABÍAS QUÉ?</RouterLink></div>-->
                <div class="v-sheet ma-2"><RouterLink to="/contacto" @click="cerrarMenuYSubir"><button>CONTACTO</button></RouterLink></div>
            </div>

      
        </div>
        <div>
  <!-- Menú colapsable SOLO para móvil -->
            <transition name="slide-down" class="text-center mb-4">
                <div v-show="mostrarMenu" class="d-md-none flex-column nav-items-mobile">
                    <div class="v-sheet ma-2"><RouterLink to="/" class="nav-link"  @click="cerrarMenuYSubir">INICIO</RouterLink></div>
                    <div class="v-sheet ma-2"><RouterLink to="/nosotros" class="nav-link" @click="cerrarMenuYSubir">NOSOTROS</RouterLink></div>
                    <div class="v-sheet ma-2"><RouterLink to="/compromiso" class="nav-link" @click="cerrarMenuYSubir">COMPROMISO</RouterLink></div>
                    <!--                    <div class="v-sheet ma-2"><RouterLink to="/sabiasque" class="nav-link" @click="cerrarMenuYSubir">¿SABÍAS QUÉ?</RouterLink></div>-->
                    <div class="v-sheet ma-2 mb-4"><RouterLink to="/contacto" @click="cerrarMenuYSubir"><button class="mb-2">CONTACTO</button></RouterLink></div>
                </div>
            </transition>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const mostrarMenu = ref(false);

function cerrarMenuYSubir() {
  mostrarMenu.value = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style scoped>
.container-header {
  height: auto;
  box-shadow: 0px 4px 4px grey;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
}

img {
  height: 60px;
}

.nav-link {
  text-decoration: none;
  color: black;
  letter-spacing: 4px;
  font-size: 14px;
}

button {
  height: 36px;
  width: 146px;
  background-color: #276918;
  color: white !important;
  border-radius: 18px;
  letter-spacing: 3px;
}

button:hover {
  background-color: #387c27;
  box-shadow: 0px 4px 8px grey;
}

.nav-link:hover {
  color: #276918;
  text-shadow: 2px 5px 5px rgb(199, 196, 196);
}

.menu-toggle {
  font-size: 26px;
  cursor: pointer;
  display: none;
}

.nav-items {
  display: flex;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-items {
    flex-direction: column;
    width: 100%;
    display: none;
    padding-top: 10px;
  }

  .nav-items.show-menu {
    display: flex;
  }

  .nav-items .v-sheet {
    margin: 5px 0;
    text-align: center;
  }
}
/* Transición suave del menú */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.4s ease, opacity 0.3s ease;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 500px; /* Valor suficientemente alto para el contenido */
  opacity: 1;
}
@media (max-width: 768px) {
  .nav-items-mobile {
    width: 100%;
    padding-top: 10px;
    background-color: white;
  }
}
/* nuevo estilo */
/* Estilo por defecto (escritorio) */
.nav-items-desktop {
  display: flex;
}

/* Ocultar en móvil */
@media (max-width: 768px) {
  .nav-items-desktop {
    display: none !important;
  }

  .nav-items-mobile {
    width: 100%;
    padding-top: 10px;
    background-color: white;
  }

  .menu-toggle {
    display: block;
  }
}

/* Ocultar hamburguesa en escritorio */
.menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    font-size: 26px;
    cursor: pointer;
    user-select: none;
    margin-left: auto;
  }
}

/* Transición slide-down */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.4s ease, opacity 0.3s ease;
  overflow: hidden;
}
.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 500px;
  opacity: 1;
}
.menu-toggle {
  width: 40px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-left: auto;
  z-index: 1001;
}

.menu-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: #000;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Estado activo: transformar en X */
.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

</style>



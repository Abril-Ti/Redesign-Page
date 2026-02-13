<template>
  <div class="container-header position-sticky montserrat-font-semibold">
    <div class="container-links">
      <nav>
        <div class="d-flex align-center justify-space-between px-4">

          <!-- Logo -->
          <div class="cont-logo">
            <RouterLink to="/" class="nav-link">
              <img class="logo" src="/Logo-Avohit-cafe.png" alt="Logo" />
            </RouterLink>
          </div>

          <!-- Botón hamburguesa para movil -->
        <div class="menu-toggle d-md-none mr-4" :class="{ active: mostrarMenu }" @click="mostrarMenu = !mostrarMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>

<!-- Enlaces de navegación -->
        <!-- Enlaces -->
            <div class="d-none d-md-flex align-center nav-items-desktop">
                <div class="v-sheet ma-2"><RouterLink to="/" class="nav-link" @click="cerrarMenuYSubir">{{ $t("nav.home") }}</RouterLink></div>
                <div class="v-sheet ma-2"><RouterLink to="/nosotros" class="nav-link" @click="cerrarMenuYSubir">{{ $t("nav.about") }}</RouterLink></div>
                <div class="v-sheet ma-2"><RouterLink to="/compromiso" class="nav-link" @click="cerrarMenuYSubir">{{ $t("nav.comp") }}</RouterLink></div>
                <!-- <div class="v-sheet ma-2"><RouterLink to="/sabiasque" class="nav-link" @click="cerrarMenuYSubir">¿SABÍAS QUÉ?</RouterLink></div>-->
                <div class="v-sheet ma-2"><RouterLink to="/contacto" @click="cerrarMenuYSubir"><button class="btn-contact">{{ $t("nav.conta") }}</button></RouterLink></div>
                <div>
                  <button @click="$setLang('es')"> <img class="btn-leng" src="/mx.png" alt="ESP"></button>
                  <button @click="$setLang('en')"><img class="btn-leng" src="/us.png" alt="ENG"></button>
                </div>
            </div>

      
        </div>
        <div>
  <!-- Vista movil-->
            <transition name="slide-down" class="text-center mb-4">
                <div v-show="mostrarMenu" class="d-md-none flex-column nav-items-mobile">
                    <div class="v-sheet ma-2"><RouterLink to="/" class="nav-link"  @click="cerrarMenuYSubir">{{ $t("nav.home") }}</RouterLink></div>
                    <div class="v-sheet ma-2"><RouterLink to="/nosotros" class="nav-link" @click="cerrarMenuYSubir">{{ $t("nav.about") }}</RouterLink></div>
                    <div class="v-sheet ma-2"><RouterLink to="/compromiso" class="nav-link" @click="cerrarMenuYSubir">{{ $t("nav.comp") }}</RouterLink></div>
                    <!--                    <div class="v-sheet ma-2"><RouterLink to="/sabiasque" class="nav-link" @click="cerrarMenuYSubir">¿SABÍAS QUÉ?</RouterLink></div>-->
                    <div class="v-sheet ma-2 mb-2"><RouterLink to="/contacto" @click="cerrarMenuYSubir"><button class="mb-2 btn-contact">{{ $t("nav.conta") }}</button></RouterLink></div>
                    <div>
                  <button @click="$setLang('es')"> <img class="btn-leng" src="/mx.png" alt="ESP" @click="cerrarMenuYSubir"> </button>
                  <button @click="$setLang('en')"><img class="btn-leng" src="/us.png" alt="ENG" @click="cerrarMenuYSubir">  </button>
                </div>
                </div>
            </transition>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useI18n} from 'vue-i18n';
const mostrarMenu = ref(false);

function cerrarMenuYSubir() {
  mostrarMenu.value = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const {t} =useI18n()

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

.logo {
  height: 60px;
}

.btn-leng{
  height: 40px;
  margin-left: 9px;
}

.nav-link {
  text-decoration: none;
  color: black;
  letter-spacing: 4px;
  font-size: 14px;
  margin-left: 3rem;
}
.cont-logo{
  padding: 8px;
  margin-left: 40px;
}
.btn-contact {
  height: 36px;
  width: 146px;
  background-color: #276918;
  color: white !important;
  border-radius: 18px;
  letter-spacing: 3px;
  margin-left: 3rem;
}

.btn-contact:hover {
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

  .btn-contact{
    margin-left: 0rem;
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
.nav-items-desktop {
  display: flex;
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
  .cont-logo{
    padding: 8px;
    margin-left: 0px;
    margin-right: 15px;
  }
  .nav-link{
    margin-left: 0rem;
  }
  button{
    margin-left: 0rem;
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



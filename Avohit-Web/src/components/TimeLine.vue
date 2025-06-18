<template>
  <div>
    <h2 class="text-center montserrat-regular mt-40">GRUPO AVOHIT DE MÉXICO A TRAVÉS DEL TIEMPO</h2>
    <div class="decorative-line mb-10 mx-auto"></div>
    
    <!--
     <div>
    <div class="text-center">
      

     
      <div class="container-2019 text-center mb-10">
        <img src="/2019.png" alt="" class="year-label mb-6">
        <div class="timeline-item">
          <img src="/avocado.jpg" alt="" class="timeline-image">
          <div class="timeline-dots" >
            <img v-for="n in 5" :key="n" src="/ElipseVerde.png" alt="" data-aos="zoom-in-right">
          </div>
          <p class="timeline-text" data-aos="fade-up">En agosto se colocó la primera piedra de la Mega Planta agroindustrial de AvoHit, en Morelia Michoacán.</p>
        </div>
      </div>


      <div class="container-2022 text-center mb-10" data-aos="fade-up">
        <img src="/2022.png" alt="" class="year-label mb-6" data-aos="zoom-in">
        <div class="timeline-item" data-aos="fade-right">
          <div class="timeline-text-block">
            <p>Febrero, inauguración del empaque.</p>
            <img src="/avocado.jpg" alt="" class="timeline-image mb-3">
          </div>
          <div class="timeline-dots" data-aos="zoom-in-right">
            <img v-for="n in 14" :key="n" src="/ElipseVerde.png" alt="">
          </div>
          <div class="timeline-text-block">
            <p>Mayo, inicio de operaciones.</p>
            <p>Mayo, primer embarque.</p>
          </div>
        </div>
      </div>

      
      <div class="container-2023 text-center mb-10">
        <img src="/2023.png" alt="" class="year-label mb-6">
        <div class="timeline-dots mb-4">
          <img v-for="n in 7" :key="n" src="/ElipseVerde.png" alt="">
        </div>
        <p class="timeline-text">6 de noviembre del 2023, contenedor número 1000.</p>
        <img src="/avocado.jpg" alt="" class="timeline-image mt-3">
      </div>
    </div>
  </div>
    -->

    <div class="timeline">
<!--        2 0 1 9          -->
      <div class="year-label"><img src="/2019.png" alt="" class="year-label mb-6" data-aos="zoom-in"></div>

      <div class="timeline-dots" >
          <span v-for="n in dotCount" :key="n" class="dot" ></span>
      </div>

      <div class="timeline-item" data-aos="fade-down-right">
        <v-container>
          <v-row  class="otro-container-row">
              <div class="timeline-content"></div>
        
              <v-col cols="12" sm="6">
                  <img src="/img-2019.png" alt="" class="timeline-image img-piedra" />
                
              </v-col>
              
              <v-col cols="12" sm="6">
                  <p class="timeline-text txt-piedra">En Agosto se inicio la construcción del empaque de Grupo Avohit de México, en Morelia, Michoacán.</p>
              </v-col>
          </v-row>
        </v-container>
      </div>

      <div class="timeline-dots dos-dot" v-show="mostrarDot">
          <span v-for="n in dotCount" :key="n" class="dot" ></span>
      </div>
      
<!--        2 0 2 2            -->
      <div class="year-label"><img src="/2022.png" alt="" class="year-label mb-6" data-aos="zoom-in"></div>
      <!-- DOTS  TRES -->
      <div class="timeline-dots" >
          <span v-for="n in dotCount" :key="n" class="dot" ></span>
      </div>

      <!--     PRIMER ITEM     -->
        <div class="timeline-item item-2" data-aos="fade-down-right">
        
        <div class="timeline-content">
          <img src="/img-2023-1.png" alt="" class="timeline-image" />
          <p class="timeline-text">
            Febrero, inauguracion del empaque.
          </p>
        </div>
      </div>
      <!--    DOTS    CUATRO-->
      <div class="timeline-dots" >
          <span v-for="n in dotCount" :key="n" class="dot" ></span>
      </div>
      <div class="timeline-dots" >
          <span v-for="n in dotCount" :key="n" class="dot" ></span>
      </div>

      <!--    SEGUNDO ITEM     -->
      <div class="timeline-item" data-aos="fade-down-right">
        <v-container style="margin-right: 10rem;">
          <v-row  class="otro-container-row">
        
              <v-col cols="12" sm="6">
                  <img src="/img-2019.png" alt="" class="timeline-image img-piedra" />
                  <p class="timeline-text txt-piedra">Mayo, inicio de las operaciones.</p>

              </v-col>
              
              <v-col cols="12" sm="6">
              </v-col>
          </v-row>
        </v-container>
      </div>
      
      <!--  DOTS     CINCO style="margin-top: -63rem;"-->
      <div class="timeline-dots dos-dot" v-show="mostrarDot" >
          <span v-for="n in dotCount" :key="n" class="dot " ></span>
      </div>
      <div class="timeline-dots" >
          <span v-for="n in dotCount" :key="n" class="dot" ></span>
      </div>
      <!--     TERCER ITEM     -->
        <div class="timeline-item item-2" data-aos="fade-down-right" style="margin-top: 30rem;">
        
        <div class="timeline-content">
          <img src="/img-2023-1.png" alt="" class="timeline-image" />
          <p class="timeline-text">
            Mayo, primer embarque.
          </p>
        </div>
      </div>
      <!--    DOTS    SEIS-->
      <div class="timeline-dots" style="margin-top: -34rem;">
          <span v-for="n in dotCount" :key="n" class="dot" ></span>
      </div>
      <div class="timeline-dots mt-1" >
          <span v-for="n in dotCount" :key="n" class="dot" ></span>
      </div>
    
      
<!--        2 0 2 3            -->
      <div class="year-label"><img src="/2023.png" alt="" class="year-label mb-6" data-aos="zoom-in"></div>
<div class="timeline-dots" >
          <span v-for="n in dotCount" :key="n" class="dot" ></span>
      </div>
    
      <div class="timeline-item item-2" data-aos="fade-down-right">
        
        <div class="timeline-content">
          <img src="/avocado.jpg" alt="" class="timeline-image" />
          <p class="timeline-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid laborum asperiores odit laboriosam quos, numquam eos, eveniet veritatis architecto ullam necessitatibus expedita est, in temporibus odio recusandae perspiciatis soluta.
          </p>
        </div>
      </div>
      

      <div class="timeline-dots dos-dot" >
          <span v-for="n in dotCount" :key="n" class="dot " ></span>
      </div>
 


    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const dotCount = ref(4)

onMounted(() => {
  if (window.innerWidth <= 768) {
    dotCount.value = 2
  }
})

const mostrarDot = ref(false)

const checkScreenWidth = () => {
  mostrarDot.value = window.innerWidth >= 768
}

onMounted(() => {
  checkScreenWidth()
  window.addEventListener('resize', checkScreenWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenWidth)
})

</script>

<style scoped>
.img-content{
    width: 540px;
}
@media (max-width: 768px) {
    .img-content{
        width: 300px;
    }
}

/*codigo nuevo */
.mt-40 {
  margin-top: 10rem;
}
.decorative-line {
  height: 3px;
  width: 600px;
}
.year-label {
  max-width: 200px;
}

.timeline-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.timeline-image {
  max-width: 100%;
  width: 400px;
  height: auto;
  border-radius: 12px;
}

.timeline-text {
  max-width: 500px;
  font-size: 1.1rem;
  line-height: 1.6;
}

.timeline-text-block {
  max-width: 500px;
  font-size: 1.1rem;
  line-height: 1.5;
}

.timeline-dots {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 280px;
  overflow: hidden;
}

.timeline-dots img {
  width: 50px;
  height: 50px;
  margin: 2px 0;
}

@media (max-width: 768px) {
  .timeline-item {
    flex-direction: column;
  }

  .timeline-image {
    width: 90%;
  }

  .timeline-text,
  .timeline-text-block {
    text-align: center;
    padding: 0 1rem;
  }

  .decorative-line {
    width: 70%;
  }
}
/* codigo nuevo*/
.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
}

.year-label {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.timeline-dots {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.5rem;
}

.dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #9cbd98;
}

.timeline-content {
  max-width: 800px;
}

.timeline-image {
  width: 100%;
  max-width: 500px;
  margin: auto;
  border-radius: 12px;
}

.timeline-text {
  margin-top: 1rem;
  font-size: 1rem;
  padding: 0 1rem;
}

/* RESPONSIVE */

@media (min-width: 1024px) {
  .timeline-item {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
  }

  .year-label {
    flex: 1;
    text-align: center;
  }

  .timeline-dots {
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0;
  }

  .timeline-content {
    flex: 2;
  }
 
  
}
@media (min-width: 870px) {
.otro-container-row{
    margin-top: -10rem;
 }
.dos-dot{
    margin-top: -13rem;
    margin-bottom: 4rem;
}
.img-piedra{
    margin-right: 35rem;
}
.txt-piedra{
    margin-left:10rem ;
}
.item-2{
    margin-right: -55rem;
}
}



</style>
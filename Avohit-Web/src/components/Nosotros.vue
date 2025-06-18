<template>
    <div>
                    <h2 class="text-center montserrat-regular" style="margin-top: 10rem;">NOSOTROS</h2> 
 <div class="decorative-line"></div>
        <v-container>
            <v-row>
                <v-col>
                <P class="txt-description v-sheet ma-7" style="width: 90%;">Somos una empresa pionera en el rubro del aguacate, cuyo propósito inicia desde la selección de las mejores tierras y ubicación geográfica que involucra la diversidad de climas y altitudes con la finalidad de producir la mejor calidad y máximo volumen en el mundo.</P>

                </v-col>
                <v-col class="text-center">
                <img src="/foto-prueba-marcaagu.jpg" alt="" class="v-sheet ma-7 img-content">

                </v-col>
            </v-row>
        </v-container>
      


        <div>
            <h2 class="text-center montserrat-regular" style="margin-top: 11rem;">NUESTRO RUMBO</h2>
            <div class="decorative-line"></div>

            <v-container>
                <v-row>
                    <v-col>
                        <img src="/img-us2.png" alt="" class="v-sheet ma-7 img-content">
                    </v-col>
                    <v-col class="text-center">
                        <P class="txt-description v-sheet ma-7" style="width: 90%;">Grupo Avohit de México fue fundado el 12 de agosto del 2019, Colocando la primera piedra de la Mega planta agroindustrial de Avohit, en Morelia, Michoacán.</P>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <P class="txt-description v-sheet ma-7">Somos una empacadora que apuesta por el trabajo local y la delicadeza que pueden dar las mujeres Mexicanas en el trato y la seleccion de nuestra fruta.</P>
                    </v-col>
                    <v-col>
                        <img src="/img-us3.png" alt="" class="v-sheet ma-7 img-content">
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <img src="/img-us.png" alt="" class="v-sheet ma-7 img-content">
                    </v-col>
                    <v-col>
                        <P class="txt-description v-sheet ma-7">Tenemos claro a donde queremos llegar. Ofrecer la mejor calidad para su mercado y el mejor ambiente de trabajo, con las mejores instalaciones posibles para ello.</P>
                    </v-col>
                </v-row>
            </v-container>
         
        </div>

        <TimeLine/>
        <!--
        <div class="text-center">
            <h2 class="text-center montserrat-regular" style="margin-top: 10rem; ">GRUPO AVOHIT DE MÉXICO A TRAVES DEL TIEMPO</h2>
            <div class="decorative-line mb-10" style="width: 400px;"></div>

            <div class="container-2019 text-center">
               <img src="/2019.png" alt="">
                <div class="v-sheet d-flex mb-6 text-center">
                    <img src="/avocado.jpg" alt="" class="v-sheet ma-10 justify-start d-flex text-center" style="width: 480px; margin-left: 10px; margin-right: 5px;">
                    <div>
                        <img v-for="n in 7" :key="n" class="d-flex flex-column mt-1 text-center" src="/ElipseVerde.png" alt="">
                    </div>
                    <p class="v-sheet d-felx justify-end txt-description ma-10" style="width: 500px;">En agosto se coloco la primera piedra de la Mega Planta agroindustrial de AvoHit, en Morelia Michoacán.</p>
                </div>
            </div>

            <div class="container-2022">
                 <img src="/2022.png" alt="">
             <div class="v-sheet d-flex mb-6 text-center">
                <div>
                    <p>Febrero, inauguracion del empaque.</p>
                    <img src="/avocado.jpg" alt="" style="width: 570px;" class="ma-3">
                </div>
                <div>
                    <img v-for="n in 14" :key="n" src="/ElipseVerde.png" alt="" class="d-flex flex-column mt-1 text-center">
                </div>
                <div>
                    <p>Mayo, inicio de las operaciones.</p>
                </div>
                <div>
                    <p>Mayo, primer embarque.</p>
                </div>
            </div>

            </div >
                
             <div class="container-2023">
                <img src="/2023.png" alt="">
               <br>
            
                <div v-for="n in 7" :key="n">
                    <img src="/ElipseVerde.png" alt="">
                </div>
                <p>6 de noviembre del 2023 contenedor numero 1000.</p>
                <img src="/avocado.jpg" alt="">
            </div>
         
            Posible seccion del 3er aniversario del empaque (depende de si se llega  hacer algo)
            <div>
                <img src="/2025.png" alt="">
              
            </div>  
        </div>
        -->
        
    </div>
</template>
<script setup>
import TimeLine from '../components/TimeLine.vue';
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

</style>
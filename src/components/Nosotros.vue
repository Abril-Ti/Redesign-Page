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

        
        <timeline2/>
       
    </div>
</template>
<script setup>
import TimeLine from '../components/TimeLine.vue';
import Timeline2 from './Timeline2.vue'
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
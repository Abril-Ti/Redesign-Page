<template>
<div>
    <h2 class="text-center montserrat-regular" style="margin-top: 10rem;">NUESTRO COMPROMISO</h2> 
    <div class="decorative-line"></div>
    <v-container>
            <v-row>
                <v-col>
                <P class="txt-description ma-7" >Somos una empresa comprometida, solidaria, responsable con el medio ambiente y población, al conservar desde el inicio de la cosecha, hasta el último proceso con la industria cumpliendo con todas las reglas de índole socio ambiental</P>
                </v-col>
                <v-col class="text-center">
                <img src="/foto-prueba-marcaagu.jpg" alt="" class="ma-7 img-content" >
                </v-col>
            </v-row>
    </v-container>

  
    <div class="container-vision text-center">
        <h2 class="montserrat-regular txt-val">VISIÓN </h2>
        <div class="decorative-line"></div>
        <p class="txt-description txt-val">Nuestra misión es ser una empresa completamente comprometida desde el cultivo, cosecha, empaque y traslado del aguacate hasta el contacto con el cliente, con los estándares más exigentes en la calidad e inocuidad, mediante la tecnología más vanguardista del mercado, satisfaciendo así el paladar por medio de la calidad en todo el mundo, sin distinción de temporadas.</p>
    </div>
    <div class="container-mision text-center">
        <h2 class="montserrat-regular mt-10 txt-val">MISIÓN</h2>
        <div class="decorative-line"></div>
        <p class="txt-description txt-val">Crecer como la empresa líder en el mercado Internacional con el proceso de trazabilidad más íntegro, que preserva la calidad desde el cultivo hasta la exportación, por medio de la tecnología más vanguardista, obteniendo así la mayor eficiencia confianza y capacidad de acuerdo a la demanda de cualquier temporada.</p>
    </div>

    <div class="container-valores">
        <h2 class="text-center montserrat-regular">NUESTROS VALORES</h2>
        <div class="decorative-line"></div>

        <p class="txt-description txt-val">Socialmente somos una empresa que no distingue cuestiones culturales, creencias, incluyendo diversidad de preferencias en la sociedad, caracterizándonos principalmente por:</p>

        <div class="text-center">
            <v-container >
                <v-row no-gutters>
                    <v-col v-for="(foto, index) in fotos" :key="index" cols="12" sm="3" style="padding: 20px;" data-aos="flip-down"> 
                        <img :src="foto.url" :alt="foto.texto"  class="icon-valor">
                        <p class="txt-description text-center valor">{{foto.texto}}</p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>

</div>
</template>
<script setup>
const fotos = [
  { url: 'valores/val-1.png', texto: 'Calidad' },
  { url: 'valores/val-2.png', texto: 'Honestidad' },
  { url: 'valores/val-3.png', texto: 'Gratitud' },
  { url: 'valores/val-4.png', texto: 'Responsabilidad' },
  { url: 'valores/val-5.png', texto: 'Ética' },
  { url: 'valores/val-6.png', texto: 'Pasión' },
  { url: 'valores/val-7.png', texto: 'Trabajo en equipo' },
  { url: 'valores/val-8.png', texto: 'Respeto' },
];
</script>
<style scoped>
.txt-val{
    padding: 1rem 15rem;
}
.icon-valor{
    width: 200px;
}
.valor{
    font-size: 20px;
}
@media (min-width: 768px) {
    .img-content{
        width: 600px;
    }
}
@media (max-width: 768px) {
    .img-content{
        width: 300px;
    }
    .icon-valor{
    width: 150px;
    padding: 10px;
   }
   .valor{
    font-size: 15px;
   }
}
@media (min-width: 768px) and (max-width: 1024px){
   .icon-valor{
    width: 150px;
    padding: 10px;
   }
   .valor{
    font-size: 15px;
   }
}

</style>
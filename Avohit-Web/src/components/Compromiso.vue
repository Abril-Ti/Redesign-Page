<template>
<div>
    <h2 class="text-center montserrat-regular" style="margin-top: 10rem;">NUESTRO COMPROMISO</h2> 
    <div class="v-sheet d-flex mb-6">
                <P class="txt-description v-sheet ma-7" style="width: 655px;">Somos una empresa comprometida, solidaria, responsable con el medio ambiente y población, al conservar desde el inicio de la cosecha, hasta el último proceso con la industria cumpliendo con todas las reglas de índole socio ambiental</P>
                <img src="/avocado.jpg" alt="" class="v-sheet ma-7 img-content" >
    </div>
    <div class="container-vision">
        <h2 class="montserrat-regular mt-10 txt-val">VISIÓN</h2>
        <p class="txt-description txt-val">Nuestra misión es ser una empresa completamente comprometida desde el cultivo, cosecha, empaque y traslado del aguacate hasta el contacto con el cliente, con los estándares más exigentes en la calidad e inocuidad, mediante la tecnología más vanguardista del mercado, satisfaciendo así el paladar por medio de la calidad en todo el mundo, sin distinción de temporadas.</p>
    </div>
    <div class="container-mision">
        <h2 class="montserrat-regular mt-10 txt-val">MISIÓN</h2>
        <p class="txt-description txt-val">Crecer como la empresa líder en el mercado Internacional con el proceso de trazabilidad más íntegro, que preserva la calidad desde el cultivo hasta la exportación, por medio de la tecnología más vanguardista, obteniendo así la mayor eficiencia confianza y capacidad de acuerdo a la demanda de cualquier temporada.</p>
    </div>

    <div class="container-valores">
        <h2 class="text-center montserrat-regular mt-10">NUESTROS VALORES</h2>

        <p class="txt-description txt-val">Socialmente somos una empresa que no distingue cuestiones culturales, creencias, incluyendo diversidad de preferencias en la sociedad, caracterizándonos principalmente por:</p>

        <div class="text-center">
            <v-container >
                <v-row no-gutters>
                    <v-col v-for="(foto, index) in fotos" :key="index" cols="12" sm="3" style="padding: 20px;">
                        <img :src="foto.url" :alt="foto.texto" style="width: 200px;">
                        <p class="txt-description">{{foto.texto}}</p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</div>
</template>
<script setup>
const fotos = [
  { url: '/val-1.png', texto: 'Calidad' },
  { url: '/val-2.png', texto: 'Honestidad' },
  { url: '/val-3.png', texto: 'Gratitud' },
  { url: '/val-4.png', texto: 'Responsabilidad' },
  { url: '/val-5.png', texto: 'Ética' },
  { url: '/val-6.png', texto: 'Pasión' },
  { url: '/val-7.png', texto: 'Trabajo en equipo' },
  { url: '/val-8.png', texto: 'Respeto' },
];
</script>
<style scoped>
.txt-val{
    padding: 10px;
    margin: 3rem;
}
</style>
<template>
    <div>
        <div class="banner-container">
            <div class="position-relative">
                <img src="/Logo-avohit-BLANCO.png" alt="" class="logo-bl">
                <div class="capa-oscura"></div>
                <img src="/banner-panoramica.JPG" alt="" class="banner-gif">
            </div>
        </div>

        <div>
            <h2>BIENVENIDOS</h2>
            <P>Trabajamos con el objetivo de mantener el liderazgo en la producción y exportación de aguacates en México.</P>

            <div>
                <v-sheet class="d-flex flex-wrap">
                    <v-sheet class="flex-1-0 ma-2 pa-2">
                        IMG
                    </v-sheet>

                    <v-sheet class="ma-2 pa-2">
                         <P>Nos esforzamos por ofrecer al mercado nacional e internacional un producto de primera calidad, con un sabor excepcional, altos estándares de inocuidad y un proceso de trazabilidad confiable de principio a fin.</P>
                    </v-sheet>

                </v-sheet>
            </div>
            <v-sheet class="d-flex flex-wrap">
                    <v-sheet class="flex-1-0 ma-2 pa-2">
                        <P>Nuestra producción se basa en prácticas eficientes y sustentables que no solo garantizan la calidad del aguacate, sino que también generan beneficios económicos para nuestros asociados.</P>
                    </v-sheet>

                    <v-sheet class="ma-2 pa-2">
                        IMG
                    </v-sheet>

                </v-sheet>
                <v-sheet class="d-flex flex-wrap">
                    <v-sheet class="flex-1-0 ma-2 pa-2">
                        IMG
                    </v-sheet>

                    <v-sheet class="ma-2 pa-2">
                         <P>Al mismo tiempo, impulsamos el desarrollo y la prosperidad de las comunidades donde operamos, reafirmando nuestro compromiso social y ambiental.</P>
                    </v-sheet>

                </v-sheet>
        </div>
        
        <div class="carousel-container">
            <h2>DESCUBRE</h2>
            <P>¡Conoce parte de nuestras instalaciones y lo que hacemos para entregarte la mejor calidad!</P>
            IMG
        </div>
        <div class="certificaciones-container">
            <h2>CERTIFICACIONES</h2>
            <ul>
                <li>Programa de Exportaciones de Aguacate Hass de México a los E.U.A.</li>
                <li>Norma GLOBALG.A.P. para Cadena de Custodia (CoC).</li>
                <li>Sistemas de Reducción de Riesgos de Contaminación.</li>
                <li>Sedex Members Ethical Trade Audit (SMETA).</li>
                <li>PrimusGFS.</li>
            </ul>
            FUTURO AVOCATIN
        </div>  
        <div class="video-container">
            <p>Somos expertos en empacar la mejor elección de sabor para tu hogar, manejamos la mejor calidad, permítenos hacerte experimentar el verdadero sabor del aguacate y darte un golpe de sabor.</p>
        </div>
    </div>
</template>
<script>

</script>
<style>
.banner-container{
    position: relative;
    width: 100%;
    overflow: hidden;
}
.banner-gif{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.logo-bl{
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    z-index: 2;
} 
.capa-oscura {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  background-color: rgba(0, 0, 0, 0.2); /* 50% opacidad */
  z-index: 1;
}
</style>
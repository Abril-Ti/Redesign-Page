<template>
    <div class="container-header position-sticky">
        
        <div class="container-links">
            <nav>
                <v-sheet class="d-flex mb-6 ">
                    <v-sheet class="ma-2 pa-3 me-auto">
                        <div>
                            <img src="/Logo-avohit-GRIS.png" alt="">
                        </div>
                    </v-sheet>

                    <v-sheet class="ma-8 "><RouterLink v-sheet to="/" class="text-center nav-link">INICIO</RouterLink></v-sheet>
                    <v-sheet class="ma-8 "><RouterLink v-sheet to="/nosotros"class="nav-link">NOSOTROS</RouterLink></v-sheet>
                    <v-sheet class="ma-8 "><RouterLink to="/compromiso" class="nav-link">COMPROMISO</RouterLink></v-sheet>
                    <v-sheet class="ma-8 "><RouterLink to="/sabiasque" class="nav-link">¿SABÍAS QUÉ?</RouterLink></v-sheet>
                    <v-sheet class="ma-8 "><RouterLink to="/contacto" class="nav-link">CONTACTO</RouterLink></v-sheet>

                </v-sheet>
            </nav>
        </div>
    </div>
    <RouterView/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
.container-header{
    height: 96px;
    box-shadow: 0px 5px 5px grey;
    position: sticky;
}
img{
    height: 72px;
}
.nav-link {
    text-decoration: none;
    color: black;
    font-size: 14;
    letter-spacing: 2px;
    text-shadow: 2px 1px 4px grey;
}
.v-sheet{
    background: none;
}
</style>
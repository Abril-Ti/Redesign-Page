<template>
    <div class="container-header position-sticky montserrat-font-semibold">    
        <div class="container-links">
            <nav>
                <div class="v-sheet d-flex mb-6 ">
                    <div class="v-sheet ma-2 pa-3 me-auto">
                        <div>
                            <img src="/Logo-avohit-GRIS.png" alt="">
                        </div>
                    </div>

                    <div class="v-sheet ma-7 "><RouterLink to="/" class="text-center nav-link">INICIO</RouterLink></div>
                    <div class="v-sheet ma-7 "><RouterLink to="/nosotros"class="nav-link">NOSOTROS</RouterLink></div>
                    <div class="v-sheet ma-7 "><RouterLink to="/compromiso" class="nav-link">COMPROMISO</RouterLink></div>
                    <div class="v-sheet ma-8 "><RouterLink to="/sabiasque" class="nav-link">¿SABÍAS QUÉ?</RouterLink></div>
                    <!--                    <div class="v-sheet ma-8  contact-class text-center"><RouterLink to="/contacto" class="nav-link" style="color: white;">CONTACTO</RouterLink></div>
 -->                <div class="v-sheet ma-6">
                        <RouterLink to="/contacto" class=""><button class="">CONTACTO</button></RouterLink>
                    </div>                                        
                </div>
            </nav>
        </div>

    </div>
     <!-- <RouterView/>--> 
</template>

<script>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.container-header{
    height: 96px;
    box-shadow: 0px 4px 4px grey;
    position: sticky;
}
img{
    height: 60px;
}
.nav-link {
    text-decoration: none;
    color: black;
    letter-spacing: 4px;
    /*text-shadow: 2px 1px 3px grey;*/
    font-size: 14px;
}

button{
    height: 36px;
    width: 146px;
    background-color: #276918;
    color: white!important;
    border-radius: 18px;
    /*box-shadow: 0px 4px 8px grey;*/
    letter-spacing: 3px;
}
button:hover{
    background-color: #387c27;
    box-shadow: 0px 4px 8px grey;
}
.nav-link:hover{
    color: #276918;
    text-shadow: 2px 5px 5px rgb(199, 196, 196);   
}
</style>
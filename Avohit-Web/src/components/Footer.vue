<template>
    <div class="footer-container">
    <div class="">     
        <v-container >
            <v-row>
                <v-col>
                    <div class="mt-15 p-5 text-center">
                        <img src="/Logo-avohit-BLANCO.png" alt="" class="logo-bl">
                    </div>
                </v-col>

                <v-col>
                    <div class="">
                        <div>
                            <h4 class="text-center">Contacto</h4>
                            <div class="d-flex mb-5">
                                <img src="/phone.png" alt="" class="icons i-phone">
                                <p style="font-size: 18px;" class="mt-2">4438989099</p>
                            </div>

                            <div class="d-flex mb-6">
                                <img src="/mail.png" alt="" class="icons i-mail">
                                <a href="mailto:direccion@grupoavohitdemexico.com"> 
                                    <p style="font-size: 18px;" class="mt-2 p-mail">direccion@grupoavohitdemexico.com</p>
                                </a>
                               
                            </div>
                        </div>
                
                        <div>
                            <h4 class="text-center">¡Síguenos en nuestras redes sociales!</h4>
                            <div class="d-flex justify-center flex-wrap">
                                <a href="https://www.facebook.com/share/16HVJLtXSv/" target="_blank">
                                    <img src="/icon-facebook.png" alt="" class="icons icons-social-media text-center">
                                </a>
                                <a href="https://www.linkedin.com/company/grupoavohitdemexico/" target="_blank">
                                    <img src="/icon-linkedin.png" alt="" class="icons icons-social-media text-center">
                                </a>
                            </div>
                        </div>
                        </div>
                </v-col>

                <v-col>
                    <div class="">
                        <h4 class="text-center">Ubicación</h4>
                    <div class="d-flex mb-2">
                        <img src="/icon-maps.png" alt="" class="icons">
                        <p class="mt-4">Carr. Pátzcuaro - Morelia 16651 La Estancia, 58345 Morelia, Mich.</p>
                    </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1580.65458914937!2d-101.30071419321334!3d19.588388652752684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d75f2df8479d1%3A0x2b4196f1e6d7c278!2sGrupo%20Avohit%20de%20M%C3%A9xico!5e1!3m2!1ses-419!2smx!4v1749741262704!5m2!1ses-419!2smx" width="400px" height="220px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <div class="copyright text-center mt-5">
            <p>© {{currentYear}} Copyright Grupo AvoHit de México. Todos los derechos reservados. </p>
        </div>
    </div>
    </div>
</template>

<script setup>
    const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer-container{
    background-color: #276918!important;
    color: white;
}
h4{
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 1rem;
}
img{
    width: 250px;
}
.logo-bl{
    width: 344px; 
    height: 184px;
    margin-top: 5rem;
}
.icons{
    width: 35px;
    height: 30px;
    margin: 10px;
}
.icons-social-media{
    margin: 1rem;
    width: 40px;
    height: 35px;
}
.footer-container {
  background-color: #276918 !important;
  color: white;
  padding: 2rem 1rem;
}
a{
    color: white;
    text-decoration: none;
}

@media (max-width: 768px) {
  .footer-container .col-4 {
    width: 100% !important;
    text-align: center;
    margin-bottom: 2rem;
    padding: 1px;
  }

  iframe {
    width: 100% !important;
    height: auto;
  }

  .icons {
    margin: 5px;
  }
  .logo-bl{
    width: 270px;
    height: 131px;
    align-items:center;
    margin-top: 0px;
  }
  .icons-social-media{
    margin: 15px;
  }
  /*este estilo es del texto */
  .p-mail{
    font-size: 15px;
  }
  /*estos de los iconos */
 .i-mail{
    width: 25px;
    height: 20px;
    margin-top: 5px;
}
.i-phone{
    width: 25px;
    height: 20px;
}
.v-col{
    padding: 1px;
}
}


</style>
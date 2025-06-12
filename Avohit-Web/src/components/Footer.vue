<template>
    <div class="footer-container">
         <div class="d-flex justify-space-between row">
            <div class="ma-13 pa-9 col-4 col-sm-12">
                <img src="/Logo-avohit-BLANCO.png" alt="" style="width: 344px; height: 184px;">
            </div>
            <div class="ma-2 pa-2 col-4 col-sm-12">
                <div>
                    <h4 class="text-center">Contacto</h4>
                    <div class="d-flex mb-6">
                        <img src="/phone.png" alt="" class="icons">
                        
                        <p style="font-size: 18px;">4438989099</p>
                        
                    </div>
                    <div class="d-flex mb-6">
                        <img src="/mail.png" alt="" class="icons">
                        <p style="font-size: 18px;">direccion@grupoavohitdemexico.com</p>
                    </div>
                </div>
                
                 <div>
                    <h4>¡Siguenos en nuestras redes sociales!</h4>
                    <div class="d-flex text-center">
                        <a href="https://www.facebook.com/share/16HVJLtXSv/" target="_blank">
                            <img src="/icon-facebook.png" alt="" class="icons icons-social-media text-center">
                        </a>
                        <a href="https://www.linkedin.com/company/grupoavohitdemexico/" target="_blank">
                            <img src="/icon-linkedin.png" alt="" class="icons icons-social-media text-center">
                        </a>
                    </div>
                 </div>
            </div>

            <div class="ma-2 pa-2 col-4 col-sm-12">
                <h4 class="text-center">Ubicación</h4>
                <div class="d-flex mb-6">
                    <img src="/icon-maps.png" alt="" class="icons">
                     <p>Carr. Pátzcuaro - Morelia 16651 La Estancia, 58345 Morelia, Mich.</p>
                </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1580.65458914937!2d-101.30071419321334!3d19.588388652752684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d75f2df8479d1%3A0x2b4196f1e6d7c278!2sGrupo%20Avohit%20de%20M%C3%A9xico!5e1!3m2!1ses-419!2smx!4v1749741262704!5m2!1ses-419!2smx" width="400px" height="220px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>

        <div class="copyright text-center">
            <p>© {{currentYear}} Copyright Grupo AvoHit de México. Todos los derechos reservados. </p>
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
    margin-top: 2rem;
    margin-bottom: 1rem;
}
img{
    width: 250px;
}

.icons{
    width: 35px;
    height: 30px;
    margin-right: 10px;
}
.icons-social-media{
    margin: 1rem;
    width: 40px;
    height: 35px;
}

</style>
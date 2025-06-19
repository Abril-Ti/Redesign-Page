<template>
  <div class="footer-container">
    <v-container fluid>
      <v-row no-gutters>
        <!--            Logo            -->
        <v-col cols="12" md="3" class="text-center mt-1">
          <img src="/Logo-avohit-BLANCO.png" alt="Logo" class="logo-bl" />
        </v-col>

        <!--            Contacto y redes            -->
        <v-col cols="12" md="5" class="text-center mb-3 contact-container">
            <h4 class="title-contacto">Contacto</h4>
            <v-row class="text-center">
                <v-col cols="12" md="6" sm="6">
                    <div class="d-flex align-center justify-center mb-1">
                        <img src="/phone.png" alt="Teléfono" class="icons" />
                        <p class="contact-text">+52 (443) 898-9099</p>
                    </div>
                </v-col>
                <v-col cols="12" md="6" sm="6">
                    <div class="d-flex align-center justify-center mb-1">
                        <img src="/mail.png" alt="Correo" class="icons" />
                        <a href="mailto:direccion@avohit.com.mx" class="contact-text">direccion@avohit.com.mx</a>
                    </div>
                </v-col>
            </v-row>
          
            <h4>¡Síguenos en redes sociales!</h4>
            <div class="d-flex justify-center">
                <a href="https://www.facebook.com/share/16HVJLtXSv/" target="_blank">
                    <img src="/icon-facebook.png" alt="Facebook" class="icons-social-media" />
                </a>
                <a href="https://www.linkedin.com/company/grupoavohitdemexico/" target="_blank">
                    <img src="/icon-linkedin.png" alt="LinkedIn" class="icons-social-media" />
                </a>
            </div>
        </v-col>

        <!--            Ubicación           -->
        <v-col cols="12" md="4" class="text-center">
          <h4 class="title-ubi">Ubicación</h4>
          <div class="d-flex align-center justify-center">
            <img src="/icon-maps.png" alt="Mapa" class="icons" />
            <p class="contact-text">
              Carr. Pátzcuaro - Morelia 16651 La Estancia, 58345 Morelia, Mich.
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1580.65458914937!2d-101.30071419321334!3d19.588388652752684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d75f2df8479d1%3A0x2b4196f1e6d7c278!2sGrupo%20Avohit%20de%20M%C3%A9xico!5e1!3m2!1ses-419!2smx!4v1749741262704!5m2!1ses-419!2smx"
            width="100%" height="180" style="border:0;" allowfullscreen loading="lazy"
          ></iframe>
        </v-col>
      </v-row>

      <!--          Copyright           -->
      <div class="copyright text-center">
        <p>© {{ currentYear }} Grupo AvoHit de México. Todos los derechos reservados.</p>
      </div>
    </v-container>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer-container {
    position: relative;
    background-color: #276918;
    color: white;
    overflow: hidden;
    z-index: 1;
  width: 100%;
}

.footer-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/img-footer.png"); /* Reemplaza con tu imagen */
  background-size: cover;
  background-position: center;
  opacity: 0.1; /* Ajusta según el nivel de visibilidad deseado */
  z-index: 0;
  pointer-events: none;
}

.footer-container > * {
  position: relative;
  z-index: 1;
}

h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 1rem 0;
}

.logo-bl {
  width: 100%;
  max-width: 320px;
  height: auto;
}

.icons {
  width: 28px;
  height: 28px;
  margin-right: 10px;
}

.icons-social-media {
  width: 36px;
  height: 36px;
  margin: 0 8px;
}

.contact-text {
  font-size: 1rem;
  color: white;
  margin: 0;
  line-height: 1.4;
}

a {
  color: white;
  text-decoration: none;
}

h4{
    margin-top: 0;
}
.v-container{
    padding: 16px 15px 5px 13px;
}
.contact-container{
    margin-top: 1px;
    padding-top: 1px;
}
@media (max-width: 768px) {
  .logo-bl {
    max-width: 240px;
  }

  .contact-text {
    font-size: 0.95rem;
  }

  .icons-social-media {
    width: 32px;
    height: 32px;
  }
  .contact-container{
    margin-top: 1px;
  }
}
</style>

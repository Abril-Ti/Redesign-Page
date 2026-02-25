<template>
  <section class="certificaciones-container mt-10 mb-10">
    <h2 class="montserrat-regular title-line">{{ $t("home.title3") }}</h2>
    <div class="decorative-line line-cert"></div>

    <div class="text-container">
      <p class="txt-description text-center">{{ $t("home.cert") }}</p>
    </div>

    <!-- CARDS CERTIFICACIONES -->
    <v-container >
      <v-row class="d-flex align-center justify-center mb-6">

        <v-col cols="12" sm="6" md="4" class="mt-1">
          <div class="cert-card" data-aos="fade-up" data-aos-delay="0">
            <div class="cert-card-top">
              <img src="/APEAM.png" alt="Certificación" class="cert-logo" />
            </div>
            <div class="cert-card-bottom">
              <p class="cert-text">
                Programa de Exportaciones de Aguacate Hass de México a los E.U.A.
              </p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="mt-1">
          <div class="cert-card" data-aos="fade-up" data-aos-delay="100">
            <div class="cert-card-top">
              <img src="/SENASICA.jpg" alt="Certificación" class="cert-logo" />
            </div>
            <div class="cert-card-bottom">
              <p class="cert-text">
                Sistemas de Reducción de Riesgos de Contaminación.
              </p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="mt-1">
          <div class="cert-card" data-aos="fade-up" data-aos-delay="200">
            <div class="cert-card-top">
              <img src="/Primus-GFS.jpg" alt="Certificación" class="cert-logo" />
            </div>
            <div class="cert-card-bottom">
              <p class="cert-text">PrimusGFS.</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="mt-1">
          <div class="cert-card" data-aos="fade-up" data-aos-delay="300">
            <div class="cert-card-top">
              <img src="/Global.jpg" alt="Certificación" class="cert-logo" />
            </div>
            <div class="cert-card-bottom">
              <p class="cert-text">
                Norma GLOBALG.A.P. para Cadena de Custodia (CoC).
              </p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="mt-1">
          <div class="cert-card" data-aos="fade-up" data-aos-delay="400">
            <div class="cert-card-top">
              <img src="/SMETA.jpeg" alt="Certificación" class="cert-logo" />
            </div>
            <div class="cert-card-bottom">
              <p class="cert-text">
                Sedex Members Ethical Trade Audit (SMETA).
              </p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="mt-1">
          <div class="cert-card" data-aos="fade-up" data-aos-delay="500">
            <div class="cert-card-top">
              <img src="/PROFOREST.jpeg" alt="Certificación" class="cert-logo" />
            </div>
            <div class="cert-card-bottom">
              <p class="cert-text">Pro Forest Avocado.</p>
            </div>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>

<script setup>

</script>

<style>

.text-container {
  display: flex;
  justify-content: center;
  margin: 3rem 2rem;
}

.decorative-line {
  height: 2px;
  background-color: #000;
  margin: 0 auto 1.5rem;
}

.line-cert { width: 490px; }
.line-inst { width: 690px; }

.list-certificaciones li {
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .txt-description {
    font-size: 1.1rem;
    text-align: justify;
    width: 90%;
  }

  .decorative-line {
    width: 200px !important;
  }

}
@media (min-width: 1920px) {
    .v-container {
        max-width: 1250px;
    }
}   
.img-content {
  transition: transform 0.4s ease;
}
.img-content:hover {
  transform: scale(1.05);
   box-shadow: 0 12px 24px rgba(112, 148, 101, 0.3);
}
</style>
<style scoped>
.cert-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08); /* borde*/
  border-radius: 35px;
  padding: 26px 15px 26px 15px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* sombra flotada */
  transition: transform 0.25s ease, box-shadow 0.25s ease;
   display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 100%;
  /*margin: 35px 30px 40px 20px;*/
}

.cert-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
.cert-card-top {
  height: 100px; 
  display: flex;
  align-items: center;
  justify-content: center;
}


.cert-logo {
  width: auto;
  object-fit: contain;
}
.cert-card-bottom {
  height: 100px; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-text {
  color: #444;
  line-height: 1.4;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  line-height: 1.3;
  margin: 0;
  max-width: 700px;
  text-align: center;
}
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 40px 0;
}

@media (max-width: 768px) {
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cert-grid {
    grid-template-columns: 1fr;
  }
}
</style>
<style>
.cert-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px; /* altura consistente */
}

.cert-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.cert-card-top {
  height: 130px; /* espacio para logos */
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-logo {
  max-height: 100px;
  width: auto;
  object-fit: contain;
}

.cert-card-bottom {
  height: 70px; /* alinea textos */
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-text {
  color: #444;
  font-size: 0.95rem;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  line-height: 1.3;
  margin: 0;
  text-align: center;
}
</style>
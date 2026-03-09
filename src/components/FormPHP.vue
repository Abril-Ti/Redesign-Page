<template>
  <div class="contact-container">
    <h2 class="text-center montserrat-regular">
     {{ $t("contact.title") }}
    
    </h2>
    <div class="decorative-line line-contact mb-5"></div>

    <div class="contact-card mt-3">
      <form class="form-contact" @submit.prevent="enviarFormulario">
        
        <div>
          <label class="txt-description">   {{ $t("contact.name") }}    </label>
          <input
            type="text"
            v-model="form.nombre"
            :placeholder="$t('placeh.nam')"
            required
          />
        </div>

        <div>
          <label class="txt-description"> {{ $t("contact.mail") }} </label>
          <input
            type="email"
            v-model="form.correo"
            :placeholder="$t('placeh.mail')"
            required
          />
        </div>

        <div>
          <label class="txt-description"> {{ $t("contact.sub") }}</label>
          <input
            type="text"
            v-model="form.asunto"
            :placeholder="$t('placeh.sub')"
            required
          />
        </div>

        <div>
          <label class="txt-description">{{ $t("contact.message") }}</label>
          <textarea
            rows="6"
            v-model="form.mensaje"
            :placeholder="$t('placeh.mess')"
            required
          ></textarea>
        </div>

        <button type="submit" class="montserrat-regular" :disabled="loading">
          {{ loading ? "Enviando..." : $t("contact.submit") }}
        </button>

      </form>

      <div class="contact-image">
        <img src="/Avocatin en escritorio.png" alt="imagen contacto" />
      </div>
    </div>

    <!-- Modal -->
    <div v-if="modalAbierto" class="modal-overlay" @click="cerrarModal">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">{{ $t("modal.title")  }}</h3>
        <p class="modal-text">{{ $t("modal.mess") }}</p>

        <div>
          <img
            src="https://www.grupoavohitdemexico.com/Personaje-Avocatin-version-2.jpg"
            alt="logo"
            style="width: 30%; margin-bottom: 30px"
          />
        </div>

        <button class="modal-btn montserrat-regular" @click="cerrarModal">
          {{ $t("modal.btn") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      loading: false,
      modalAbierto: false,  
      form: {
        nombre: "",
        correo: "",
        asunto: "",
        mensaje: ""
      }
    }
  },

  methods: {
    async enviarFormulario() {
      this.loading = true

      try {
        const response = await axios.post(
          "https://www.grupoavohitdemexico.com/send-mail.php",
           this.form)

        if (response.data.success) {

          this.abrirModal()

          this.form = {
            nombre: "",
            correo: "",
            asunto: "",
            mensaje: ""
          }
          
        } else {
          alert("No se pudo enviar el mensaje")
        }

      } catch (error) {
        console.error(error)
        alert("Error de conexión con el servidor")
      }

      this.loading = false
    },

    abrirModal() {
      this.modalAbierto = true
    },

    cerrarModal() {
      const modal = document.querySelector(".modal-content")
      if (modal) {
        modal.style.animation = "slideDown 0.3s ease forwards"
        setTimeout(() => {
          this.modalAbierto = false
        }, 280)
      }
    }
  }
}
</script>

<style scoped>

.contact-container {
  padding: 1rem 1rem;
  text-align: center;
  margin-bottom: 5rem;
}
.line-contact{
  width: 400px;
}

.contact-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2rem;
  background-color: #fff;
  max-width: 1100px;
  margin: 0 auto;
}

.form-contact {
  flex: 1 1 400px;
  padding: 1rem;
}

.contact-image {
  flex: 1 1 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.contact-image img {
  width: 100%;
  max-width: 464px;
  border-radius: 8px;
}

input,
textarea {
  width: 100%;
  max-width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  border: 2px solid #aeacac;
  border-radius: 18px;
  box-sizing: border-box;
  font-size: 1rem;
  resize: none;
}

button {
  height: 36px;
  width: 146px;
  background-color: #276918;
  color: white !important;
  border-radius: 18px;
  letter-spacing: 3px;
  
}

button:hover {
  background-color: #3a8b2d;
  box-shadow: 0px 4px 8px grey;
}


@media (max-width: 768px) {
  .contact-card {
    flex-direction: column;
    align-items: center;
  }

  .form-contact,
  .contact-image {
    width: 100%;
    padding: 1rem 0;
  }

  button {
    width: 156px;
  }
}

/*  Estilos del modal  */

/* Fondo oscuro */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: flex-end; /* aparece desde abajo */
  animation: fadeIn 0.3s ease forwards;
  z-index: 9999;
}


.modal-content {
  background: #fff;
  width: 90%;
  max-width: 380px;
  padding: 24px;
  border-radius: 16px 16px 0 0;
  text-align: center;
  animation: slideUp 0.35s ease forwards;
}


.modal-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 600;
}


.modal-text {
  font-size: 1rem;
  margin-bottom: 20px;
  color: #444;
}

/* Boton */
.modal-btn {
  background: #2a6f3b;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  /*transition: background 0.2s ease;*/
}

.modal-btn:hover {
  background: #1d4d29;
}

/* Animaciones */
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
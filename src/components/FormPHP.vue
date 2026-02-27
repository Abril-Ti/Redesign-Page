<template>
  <div class="contact-container">
    <h2 class="text-center montserrat-regular">
    PRUEBA  {{ $t("contact.title") }}
    
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
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      loading: false,
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
          this.form
        )

        if (response.data.success) {
          alert("Mensaje enviado correctamente")
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
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
  resize: none;
}

button {
  width: 211px;
  height: 40px;
  background-color: #276918;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #3a8b2d;
  box-shadow: 0px 4px 8px grey;
}

/* Responsivo */
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
    width: 100%;
  }
}

</style>
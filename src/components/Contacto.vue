<template>
  <div class="contact-container">
    <h2 class="text-center montserrat-regular">CONTACTANOS</h2>
    <div class="decorative-line"></div>

    <div class="contact-card">
      <form
        class="form-contact"
        action="https://formsubmit.co/soporte@avohit.com.mx"
        target="_blank"
        method="POST"
      >
        <div>
          <label for="nombre" class="txt-description">Nombre</label>
          <input type="text" name="nombre" placeholder="Escriba su nombre" required />
        </div>
        <div>
          <label for="correo" class="txt-description">Correo electrónico</label>
          <input type="email" name="correo" placeholder="Escriba su correo" required />
        </div>
        <div>
          <label for="asunto" class="txt-description">Asunto</label>
          <input type="text" name="asunto" placeholder="Escriba el asunto" required />
        </div>
        <div>
          <label for="mensaje" class="txt-description">Mensaje</label>
          <textarea rows="6" name="Mensaje" placeholder="Escriba su mensaje" required></textarea>
        </div>
        <button type="submit" class="montserrat-regular">Enviar</button>
      </form>

      <div class="contact-image">
        <img src="/Aguacate-mascota-pc-dos.PNG" alt="imagen contacto" />
      </div>
      
    </div>
  </div>
</template>

<script>

</script>
<style scoped>
.contact-container {
  padding: 4rem 1rem;
  text-align: center;
}

h2 {
  margin-bottom: 1.5rem;
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
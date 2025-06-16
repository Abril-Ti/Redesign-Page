<template>
    <div>
        <h2 class="text-center montserrat-regular" style="margin-top: 10rem; margin-bottom: 40px;">PONTE EN CONTACTO</h2>
        <div class="decorative-line"></div>
        <div  class="d-flex mb-6 text-center" style="box-shadow: 4px 4px 4px grey; width: 70%;">
            <div class="form-contact">
               <form action="https://grupoavohitdemexico.com/Contactanos.html" target="_blank" method="POST">
                <div class="">
                    <label for="nombre" class=" justify-start  txt-description">Nombre</label><br>
                    <input type="text"  name="nombre" placeholder="Escriba su nombre" required>
                </div>
                <div>
                    <label for="correo" class=" txt-description">Correo electronico</label><br>
                    <input type="email"  name="correo" placeholder="Escriba su correo electronico" required>
                </div>
                <div>
                    <label for="asunto" class=" txt-description">Asunto</label><br>
                    <input type="text"  name="asunto" placeholder="Escriba el asunto" required>
                </div>
                <div>
                    <label for="mensaje" class=" txt-description">Mensaje</label><br>
                    <textarea rows="8" name="Mensaje" id="" placeholder="Escriba su mensaje" style="width: 521px;" required></textarea>
                </div>
                <div>
                    <button type="submit" class="montserrat-regular mt-3 mb-8">Enviar</button>
                </div>
               </form>
            </div>
            <div >
                <img src="/avocado.jpg" alt="" style="width: 464px;">
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
input{
    width: 521px;
    height: 38px;
    margin: 1rem 3rem;
    box-sizing: border-box;
    border: 2px solid #AEACAC;
    border-radius: 4px;
}
textarea{
    resize: none;
    box-sizing: border-box;
    border: 2px solid #AEACAC;
    border-radius: 4px;
}
button{
    width: 211px;
    height: 40px;
    color: white;
    background-color: #276918;
    border-radius: 4px;
    
}

</style>
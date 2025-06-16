<template>
            <div class="banner-container">
            <div class="position-relative">
                <img src="/Logo-avohit-BLANCO.png" alt="" class="logo-bl img-f">
                <div class="capa-oscura"></div>
                <img src="/banner-panoramica.JPG" alt="" class="banner-gif img-c">
            </div>
        </div>

</template>
<script>

</script>
<style scoped>
.banner-container{
    position: relative;
    width: 100%;
    overflow: hidden;
}
.banner-gif{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.logo-bl{
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    z-index: 2;
    animation: fadeIn 2s ease-in-out forwards;
} 
.capa-oscura {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  background-color: rgba(0, 0, 0, 0.2); /* 50% opacidad */
  z-index: 1;
}
@media (max-width: 768px) {
    .logo-bl{
        width: 50%;
    }
}




</style>
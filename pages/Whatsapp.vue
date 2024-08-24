<template>
    <a class="float-right-whatsapp" target="_blank" href="https://wa.me/5554999243818?text=Ol%C3%A1%2C%20acessei%20o%20seu%20site%20e%20estou%20interessado%20em%20desenvolver%20um%20software%20">
        <svg class="icon-float-whatsapp text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 32 32">
            <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
            <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
        </svg>
    </a>
</template>

<style scoped>
  .float-right-whatsapp {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 10px;
    right: 25px;
    background-color: #4A7C59;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
    animation: pulse 1.4s infinite;
  }
  
  .icon-float-whatsapp {
    margin-top: 10px;
    margin-left: 12px;
    color: #fff;
  }
  
  .float-right-whatsapp:hover {
    transform: scale(1.03);
  }
  
  .tool:hover {
    transform: scale(1.03);
  }
  
  .float-right-whatsapp:hover {
    background-color: #25d366;
    transform: scale(1.03);
  }
  
  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 #4A7C59;
      transform: scale(0.95);
    }
    70% {
      -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      transform: scale(1);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      transform: scale(0.95);
    }
  }
  @keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 #4A7C59;
      transform: scale(0.95);
    }
    70% {
      -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      transform: scale(1);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      transform: scale(0.95);
    }
  }
</style>
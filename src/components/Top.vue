<template>
  <div class="top-group wrapper-full">
    <div class="content vw-80">
      <div class="picture" :style="{backgroundImage: `url(${aboutMe.avatar1})`}"></div>
      <div class="detail">
        <h1>HI, 我是{{aboutMe.name}}</h1>
        <h2>{{aboutMe.position}}</h2>
      </div>
    </div>
    <i class="fas fa-chevron-down"></i>
  </div>  
</template>

<script>
export default {
  props: {
    aboutMe: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  h1 {
    border-bottom: solid 2px #101010;
    margin-bottom: .5em;
    padding-bottom: .5em;
  }
  h2 {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .top-group {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
  }
  .top-group::after {
    background: url('../../public/img/writing-in-notebook.jpg') no-repeat top 100% center/cover fixed;
    opacity: .8;
    position: absolute;
    top: 0; 
    bottom: 0;
    right: 0; 
    left: 0; 
    content: "";
    z-index: -1; 
  }
  .content {
    padding: 10px;
    background-color: #fff;
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .detail {
    width: 60%;
  }
  .picture {
    border: 8px solid #e4e6db;
    border-radius: 270px;
    background-color: #969799;
    background-size: cover;
    background-repeat: no-repeat;
    width: 270px;
    height: 270px;
    margin-bottom: 2em;
  }
  .fa-chevron-down {
    position: absolute;
    bottom: 1.5em;
    color: #fff;
    font-size: 1.5em;
    animation: slidedown 1.5s infinite;
    /* animation-delay:2s; */
  }
  @keyframes slidedown{
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(25px);
    }
    /* 50% {
      transform: translateY(0);
    } */
    100% {
      transform: translateY(0px);
    }
  }
    /* from{
      bottom: 3em;
    }
    to{
      down:100px;
      bottom: 1em;
    } */
  
  @media (max-width: 768px) {
    .detail {
      width: 80%;
    }
    .picture {
      width: 150px;
      height: 150px;
      border: 5px solid #e4e6db
    }
    
   }
</style>
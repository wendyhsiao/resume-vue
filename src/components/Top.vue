<template>
  <div class="top-group wrapper-full">
    <div class="content vw-80">
      <div class="picture"></div>
      <div class="detail">
        <h1>HI, 我是 XXX Wendy </h1>
        <h2>前端工程師 實習</h2>
      </div>
    </div>
  </div>  
</template>

<style scoped>
  h1 {
    font-size: 2.5em;
    font-weight: bold;
    text-align: center;
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
    height: 100vh;
    background:  url('../../public/img/writing-in-notebook.jpg') no-repeat top 100% center/cover fixed;
    opacity: .8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
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
    width: 270px;
    height: 270px;
    margin-bottom: 2em;
  }
</style>
<template>
  <div class="wrapper">
    <div class="vw-80">
      <h2>關於我 About Me</h2>
      <div class="content">
        <div class="picture" :style="{backgroundImage: `url(${aboutMe.avatar2})`}"></div>
        <ul class="detail">
          <li>{{aboutMe.address}}</li>
          <li>{{aboutMe.phone}}</li>
          <li>{{aboutMe.email}}</li>
          <li>{{aboutMe.github}}</li>
          <li>{{aboutMe.introduction}}</li>
        </ul>
      </div>
    </div>
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
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detail {
    width: 60%;
    margin-left: 40px;
    list-style: disc;
  }
  .picture {
    background-color: #969799;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow:0 0 30px rgba(0, 0, 0, .1);
    width: 180px;
    height: 270px;
  }

  @media (max-width: 768px) {
    .detail {
      width: 100%;
      margin-left: 15px;
    }
    .picture {
      display: none;
    }
  }
</style>
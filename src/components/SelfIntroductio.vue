<template>
  <div class="wrapper">
    <div class="vw-80">
      <h2>關於我 About Me</h2>
      <div class="content">
        <div class="picture" :style="{backgroundImage: `url(${aboutMe.avatar2})`}"></div>
        <div class="detail">
          <p>{{aboutMe.introduction}}</p>
          <div class="detail-item">
            <p><i class="fas fa-map-marker-alt"></i>{{aboutMe.address}}</p>
            <p><i class="far fa-envelope"></i>{{aboutMe.email}}</p>
            <p><i class="fas fa-mobile-alt"></i>{{aboutMe.phone}}</p>
            <a :href="aboutMe.github" target="_blank">
              <i class="fab fa-github"></i>{{aboutMe.github}}
            </a>
          </div>
        </div>
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
  .detail-item {
    display: flex;
    flex-flow: row wrap;
    margin-top: 15px;
  }
  .detail-item p, .detail-item a {
    flex: 1 0 30%;
    color: #448E96;
  }
  .detail-item p:nth-child(2), .detail-item a {
    flex: 1 0 70%;
  }
  .detail-item i {
    margin-right: 5px;
  }
  .picture {
    background-color: #969799;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow:0 0 30px rgba(0, 0, 0, .1);
    width: 180px;
    height: 270px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    .detail {
      width: 100%;
      margin-left: 15px;
    }
    .detail-item {
      display: flex;
      flex-flow: column;
    }
    .detail-item p:nth-child(2), .detail-item a {
      order: 1;
    }
    .picture {
      display: none;
    }
  }
</style>
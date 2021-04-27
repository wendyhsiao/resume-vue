<template>
    <router-link id="back-to-top" class="btn-top" @click.native="scrollToTop" to="/resume">TOP</router-link>
</template>

<script>
export default {
  methods: { 
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
  .btn-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #bec8a7;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
</style>
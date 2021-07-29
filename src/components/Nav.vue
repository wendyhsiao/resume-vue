<template>
  <nav>
    <input type="checkbox" id="menu-checkbox">
    <label for="menu-checkbox" class="menu-list">
      <i class="fas fa-bars"></i>
      <ul>
        <li @click="toBlock(1)">關於我 About Me</li>
        <li @click="toBlock(2)">技能 Skill</li>
        <li @click="toBlock(3)">專案 Project</li>
        <li @click="toBlock(4)">工作經驗 Work Experience</li>
        <li @click="toBlock(5)">學歷 Educatione</li>
      </ul>
    </label>
  </nav>
</template>

<script>

export default{
  data() {
    return {
      target: 0
    }
  },
  methods: {
    toBlock(index) {
      let h2 = document.getElementsByTagName("h2")[index]     
      this.target = h2.offsetTop - 64
      window.scrollTo({
        top: this.target,
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
  nav {
    position: fixed;
    width: 100%;
    z-index: 99;
  }
  #menu-checkbox {
    display: none;
  }
  .menu-list {
    width: 100%;
    position: relative;
  }
  .menu-list i {
    padding: 1em;
    width: 100%;
    color: #fff;
    background-color: #448E96;
  }
  .menu-list ul {
    position: absolute;
    top: -300px;
    width: 100%;
    transition: .5s;
    z-index: -1;
  }
  #menu-checkbox:checked + .menu-list ul {
    top: 28px;
    transition: .5s;
  }
  .menu-list li {
    display: block;
    padding: .5em 1em;
    color: #fff;
    border-bottom: 1px solid rgb(255, 255, 255, 0.5);
    background-color: #448E96;
  }
  @media screen and (min-width: 768px) {
    .menu-list i {
      display: none;
    }
    .menu-list ul {
      position: static;      
      display: flex;
      flex-flow: row;
      justify-content: flex-end;
      background-color: #448E96;
    }
    #menu-checkbox:checked + .menu-list ul {
      transition: none;
    }
    .menu-list li {
      border-bottom: none;
    }
  }
</style>
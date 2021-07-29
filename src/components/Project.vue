<template>
  <div class="wrapper">
    <div class="project-group vw-80">
      <h2>專案 Project</h2>
      <div class="project-list">
        <div v-for="(item, index) in project" :key="index" class="project-card"> 
          <div class="card-img" :style="{backgroundImage: `url(${item.image})`}"></div>
          <div class="card-body">
            <h3 class="card-title">{{item.projectName}}</h3>
            <ul>
              <li v-for="(content, index2) in item.content" :key="index2">{{content}}</li>
            </ul>
            <div class="card-btn">
              <a :href="item.frontdesk" v-if="item.frontdesk" target="_blank">前台 Demo</a>
              <a :href="item.backstage" v-if="item.backstage" target="_blank">後台 Demo</a>
            </div>
            <small class="card-small" v-if="item.frontdesk">
              <p>預設帳號</p>
              <p v-if="item.defaultUser">使用者: {{item.defaultUser}}</p>
              <p v-if="item.defaultUser2">管理者: {{item.defaultUser2}}</p>
              <p v-if="item.password">密碼: {{item.password}}</p>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .project-list {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
  }
  .project-card {
    display: flex;
    flex-flow: row;
    align-items: center;
    margin: 2em 1em;
    width: 100%;
  }
  .card-img {
    position: relative;
    width: 40%;
    height: 100%;
    background-color: #f3f3f3;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow:0 0 30px rgba(0, 0, 0, .1);
  }
  .project-card:nth-child(4) .card-img, .project-card:nth-child(5) .card-img {
    background-size: 100%;
    height: 200px;
  }
  .card-img::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    bottom: -20px;
    right: -20px;
    z-index: -1;
    background-color: #e4e6db;
  }
  .card-body {
    width: 60%;
    margin-left: 30px;
    padding: 1em 2em;
  }
  .card-body ul {
    list-style-type: disc;
    padding-left: 2em;
  }
  .card-btn {
    padding: 1em 0 0 2em;
    width: 60%;
  }
  .card-btn a {
    display: inline-block;
    margin-right: .5em;
    padding: .2em .5em;
    width: calc(50% - .5em);
    color: #fff;
    font-size: .8em;
    text-align: center;
    background-color: #448E96;
    border-radius: 5px;
  }
  .card-btn a:hover {
    background-color: #32767e;
  }
  .card-small {
    display: flex;
    flex-flow: column;
    margin: .5em 2em 0;
    padding: .2em .5em;
    width: calc(60% - 2.5em);
    border: 1px solid #448E96;
    border-radius: 5px;
  }
  .card-small p {
    font-size: .8em;
    line-height: 1.6em;
    color: #448E96;
  }
  @media (max-width: 768px) {
    .project-list {
      width: 100%;
    }
    .project-card {
      flex-flow: column;
      width: 100%;
      margin: .8em 0;
    }
    .card-img {
      width: 100%;
      padding-bottom: 56%;
    }
    .card-img::before {
      top: 10px;
      left: 10px;
      bottom: -10px;
      right: -10px;
    }
    .card-body {
      margin: 0;
      padding: .8em;
      width: 100%;
    }
    .card-body ul {
      padding-left: 1.2em;
    }
    .card-btn {
      padding: 1em 0 0 1.2em;
      width: 100%;
    }
    .card-small {
      margin: .5em 0 0 1.2em;
      width: calc(100% - 1.5em);
    }
  }
</style>
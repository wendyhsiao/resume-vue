<template>
  <div class="wrapper">
    <div class="project-group vw-80">
      <h2>專案 Project</h2>
      <div class="project-list">
        <div v-for="(item, index) in project" :key="index" class="project-card bg-color">
          <div class="card-img" :style="{backgroundImage: `url(${item.image})`}"></div>
          <div class="card-body">
            <h3 class="card-title">{{item.projectName}}</h3>
            <ul>
              <li v-for="(content, index2) in item.content" :key="index2">{{content}}</li>
            </ul>
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
    width: calc(50% - 2em);
    margin: 2em 1em;
    box-shadow:0 0 30px rgba(0, 0, 0, .1);
  }
  .card-img {
    position: relative;
    padding-bottom: 56%;
    background-color: #f3f3f3;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .card-body {
    padding: 1em 2em;
  }
  .card-body ul {
    list-style-type: disc;
    padding-left: 2em;
  }
  @media (max-width: 768px) {
    .project-list {
      width: 100%;
    }
    .project-card {
      width: 100%;
      margin: .8em 0;
    }
    .card-body {
      padding: .8em;
    }
    .card-body ul {
      padding-left: 1.2em;
    }
  }
</style>
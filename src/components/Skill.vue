<template>
  <div class="skill-group">
    <div class="skill-bg"></div>
    <h1>技能 Skill</h1>
    <div class="skill-list">
      <div class="skill-item">
        <p>前端</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Vue.js</li>
        </ul>
      </div>
      <div class="skill-item">
        <p>後端</p>
        <ul>
          <li>Node.js / Express.js</li>
          <li>MySQL / Sequelize</li>
          <li>MongoDB / Mongoose</li>
          <li>RESTful API</li>
        </ul>
      </div>
      <div class="skill-item">
        <p>其他</p>
        <ul>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .skill-bg {
    width: 100%;
    height: 40vh;
    background:  url('../../public/img/writing-in-notebook.jpg') no-repeat top 100% center/cover fixed;
    margin-bottom: 3em;
  }
  .skill-group {
    width: 100vw;
    height: 100vh;
    text-align: center;
    line-height: 2em;
    color: #333;
  }
  .skill-group h1 {
    width: 80vw;
    margin: 0 auto;
    font-size: 1.5em;
    border-bottom: solid 2px #101010;
    margin-bottom: 1em;
  }
  .skill-list {
    width: 80vw;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
    justify-content: center;
  }
  .skill-item {
    padding: 0 5em;
  }
</style>
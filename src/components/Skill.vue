<template>
  <div class="wrapper bg-color">
    <div class="skill-group vw-80">
      <h2>技能 Skill</h2>
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
  </div>
</template>

<style scoped>
  .skill-group {
    text-align: center;
  }
  .skill-list {
    display: flex;
    align-items: stretch;
    justify-content: center;
  }
  .skill-item {
    padding: 0 5em;
  }
</style>
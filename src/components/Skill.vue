<template>
  <div class="wrapper bg-color">
    <div class="skill-group vw-80">
      <h2>技能 Skill</h2>
      <div class="skill-list">
        <div class="skill-item">
          <h3>/ 前端 /</h3>
          <ul>
            <li v-for="(skill, index) in skills.frontEnd" :key="index">{{skill}}</li>
          </ul>
        </div>
        <div class="skill-item">
          <h3>/ 後端 /</h3>
          <ul>
            <li v-for="(skill, index) in skills.backEnd" :key="index">{{skill}}</li>
          </ul>
        </div>
        <div class="skill-item">
          <h3>/ 其他 /</h3>
          <ul>
            <li v-for="(skill, index) in skills.others" :key="index">{{skill}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: {
      type: Object,
      required: true
    }
  }
}
</script>

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

  @media (max-width: 768px) {
    .skill-list {
      flex-direction: column;
    }
    .skill-item {
      padding: 0;
      margin-bottom: 10px;
    }
  }
</style>
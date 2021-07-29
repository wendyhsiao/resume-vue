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
    align-items: center;
    justify-content: center;
  }
  .skill-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    padding: 10px 0;
    width: 230px;
    height: 230px;
    background-color: #fff;
    border-radius: 200px;
  }
  .skill-item h3 {
    color: #448E96;
  }
  @media (max-width: 768px) {
    .skill-list {
      flex-direction: column;
    }
    .skill-item {
      padding: 0;
      margin-bottom: 10px;
      max-width: 160px;
      max-height: 160px;
    }
  }
</style>
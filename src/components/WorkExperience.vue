<template>
  <div class="wrapper bg-color">
    <div class="experience-group vw-80">
      <h2>工作經驗 Work Experience</h2>
      <ul class="experience-list">
        <li class="experience-item" v-for="(experience, index) in workExperience" :key="index">
          <div class="item-dot">
            <span></span>
          </div>
          <div class="item-text">
            <h3>{{experience.workPosition}}</h3>
            <p>{{experience.workDescription}}</p>
            <ul>
              <li v-for="(item, index2) in experience.workItem" :key="index2">{{item}}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    workExperience: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .experience-list {
    width: 80%;
    margin: 0 auto;
    padding: 1em 2em;
  }
  .experience-item {
    display: flex;
  }
  .experience-item .item-dot {
    position: relative;
    display: flex;
    justify-content: center;
    width: 5%;
  }
  .experience-item .item-dot::before {
    content: "";
    width: 4px;
    height: 100%;
    position: absolute;
    left: 50%;
    background-color: #ccc;
    transform: translateX(-50%);
  }
  .experience-item .item-dot span {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #ec6867;
    z-index: 1;
  }
  .experience-item  .item-text {
    padding: 0 0 1em 2em;
    width: 95%;
  }
  .experience-item  .item-text ul {
    list-style-type: disc;
    padding-left: 2em;
  }
</style>
<template>
  <div>
    <SelfIntroductio />
    <Skill />
    <Project />
  </div>
</template>

<script>
import SelfIntroductio from '../components/SelfIntroductio.vue'
import Skill from '../components/Skill.vue'
import Project from '../components/Project.vue'

export default {
  components: {
    SelfIntroductio,
    Skill,
    Project
  }
}
</script>
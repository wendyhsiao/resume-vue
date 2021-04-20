<template>
  <div>
    <SelfIntroductio />
    <Skill />
    <Project />
    <WorkExperience />
  </div>
</template>

<script>
import SelfIntroductio from '../components/SelfIntroductio.vue'
import Skill from '../components/Skill.vue'
import Project from '../components/Project.vue'
import WorkExperience from '../components/WorkExperience.vue'

export default {
  components: {
    SelfIntroductio,
    Skill,
    Project,
    WorkExperience
  }
}
</script>
<template>
  <div>
    <Top />
    <SelfIntroductio />
    <Skill />
    <Project />
    <WorkExperience />
    <Education />
    <Footer />
  </div>
</template>

<script>
import Top from '../components/Top.vue'
import SelfIntroductio from '../components/SelfIntroductio.vue'
import Skill from '../components/Skill.vue'
import Project from '../components/Project.vue'
import WorkExperience from '../components/WorkExperience.vue'
import Education from '../components/Education.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Top,
    SelfIntroductio,
    Skill,
    Project,
    WorkExperience,
    Education,
    Footer
  }
}
</script>
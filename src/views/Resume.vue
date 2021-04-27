<template>
  <div id="resume">
    <Top />
    <SelfIntroductio />
    <Skill />
    <Project />
    <WorkExperience />
    <Education />
    <Footer />
    <div v-if="isShow">
      <BtnTop />
    </div>
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
import BtnTop from '../components/BtnTop.vue'

export default {
  components: {
    Top,
    SelfIntroductio,
    Skill,
    Project,
    WorkExperience,
    Education,
    Footer,
    BtnTop
  },
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    const vm = this;
    window.onscroll = function(e) {
      const scrollTop = e.target.scrollingElement.scrollTop
      vm.showBtnTop(scrollTop)
    };
  },
  methods: {
    showBtnTop(top) {
      if (top > 400) {
        this.isShow = true
      } else {
        this.isShow = false
      } 
    }
  }
}
</script>
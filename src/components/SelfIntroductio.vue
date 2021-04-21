<template>
  <div class="introductio wrapper-full">
    <div class="catch">
      <div class="content">
        <div class="picture"></div>
        <div class="detail">
          <h2>關於我 About Me</h2>
          <p>蕭琬蓉 Wendy Hsiao</p>
          <p>新北市，台灣</p>
          <p>0932-209-127</p>
          <p>wendy19940331@gmail.com</p>
          <p>https://github.com/wendyhsiao</p>
          <p>在職業探索中發現對程式的興趣，而進入學習。透過 ALPHA Camp 的課程習得全端開發的技能，並與組員協作討論、開發，相互分工合作，共同完成兩項專案及多項個人練習。 對於前端領域較有興趣，雖無相關工作經驗，但期望踏入前端領域後，能接觸各種新知識及挑戰、熟練所學的技術，且實際應用於工作上，一步步解決問題，邁向能獨立作業的前端工程師。</p>
        </div>
      </div>
      <div class="elm"></div>
    </div>
  </div>  
</template>

<style scoped>
  .introductio {
    height: 100vh;
    background:  url('../../public/img/writing-in-notebook.jpg') no-repeat top 100% center/cover fixed;
    opacity: .8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    background-color: #fff;
    width: 80vw;
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detail {
    width: 60%;
    margin-left: 30px;
  }
  .picture {
    background-color: #333;
    width: 180px;
    height: 250px;
  }
</style>
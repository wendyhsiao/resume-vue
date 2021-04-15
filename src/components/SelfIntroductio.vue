<template>
  <div class="introductio">
    <div class="catch">
      <div class="content">
        <div class="picture"></div>
        <div class="detail">
          <h1>蕭琬蓉 Wendy Hsiao</h1>
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
    width: 100vw;
    height: 100vh;
    background-color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    margin: 0 auto;
    background-color: #fff;
    height: 75vh;
    width: 80vw;
    /* width: 1000px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detail {
    display: inline-block;
    width: 40vw;
    margin-left: 30px;
    line-height: 2em;
    color: #333;
  }
  .detail h1 {
    font-size: 1.5em;
    border-bottom: solid 2px #101010;
    margin-bottom: 1em;
  }
  .picture {
    display: inline-block;
    background-color: #333;
    width: 150px;
    height: 150px;
  }
</style>
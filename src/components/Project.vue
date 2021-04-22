<template>
  <div class="wrapper">
    <div class="project-group vw-80">
      <h2>專案 Project</h2>
      <div class="project-list">
        <div class="project-card bg-color">
          <div class="card-img"></div>
          <div class="card-body">
            <h3 class="card-title">GreatSmile 電商網頁</h3>
            <ul>
              <li class="catd-subtitle">三人協作</li>
              <li class="card-text">復刻 GoodSmile 電商網頁，三人協作開發。使用者可以在網上瀏覽選購商品，可透過會員功能查詢訂單資訊。</li>
              <li class="card-text">前端：Handlebar, Bootstrap</li>
              <li class="card-text">後端：Node.js, Express.js, MySQL</li>
              <li class="card-text">開發項目：前台商品瀏覽頁、購物車頁、會員頁面、訂單確認頁、後台交易紀錄頁</li>
            </ul>
          </div>
        </div>

        <div class="project-card bg-color">
          <div class="card-img"></div>
          <div class="card-body">
            <h3 class="card-title">GreatSmile 電商網頁</h3>
            <ul>
              <li class="catd-subtitle">三人協作</li>
              <li class="card-text">復刻 GoodSmile 電商網頁，三人協作開發。</li>
              <li class="card-text">前端：Handlebar, Bootstrap</li>
            </ul>
          </div>
        </div>
        
        <div class="project-card bg-color">
          <div class="card-img"></div>
          <div class="card-body">
            <h3 class="card-title">GreatSmile 電商網頁</h3>
            <ul>
              <li class="catd-subtitle">三人協作</li>
              <li class="card-text">復刻 GoodSmile 電商網頁，三人協作開發。使用者可以在網上瀏覽選購商品，可透過會員功能查詢訂單資訊。</li>
              <li class="card-text">前端：Handlebar, Bootstrap</li>
              <li class="card-text">後端：Node.js, Express.js, MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .project-list {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
  }
  .project-card {
    width: calc(50% - 2em);
    margin: 2em 1em;
    box-shadow:0 0 30px rgba(0, 0, 0, .1);
  }
  .card-img {
    position: relative;
    padding-bottom: 56%;
    background-color: #f3f3f3;
    background-image: url('../../public/img/screencapture-greatsmile-herokuapp-products-2021-01-28-19_43_34.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .card-body {
    padding: 1em 2em;
  }
  .card-body ul {
    list-style-type: disc;
    padding-left: 2em;
  }
</style>
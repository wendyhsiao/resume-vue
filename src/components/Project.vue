<template>
  <div class="project-group">
    <h1>專案 Project</h1>
    <div class="project-list">
      <div class="project-card">
        <div class="card-img"></div>
        <div class="card-body">
          <h5 class="card-title">GreatSmile 電商網頁</h5>
          <p class="catd-subtitle">三人協作</p>
          <p class="card-text">復刻 GoodSmile 電商網頁，三人協作開發。使用者可以在網上瀏覽選購商品，可透過會員功能查詢訂單資訊。</p>
          <ul>
            <li class="card-text">前端：Handlebar, Bootstrap</li>
            <li class="card-text">後端：Node.js, Express.js, MySQL</li>
            <li class="card-text">開發項目：前台商品瀏覽頁、購物車頁、會員頁面、訂單確認頁、後台交易紀錄頁</li>
          </ul>
        </div>
      </div>

      <div class="project-card">
        <div class="card-img"></div>
        <div class="card-body">
          <h5 class="card-title">GreatSmile 電商網頁</h5>
          <p class="catd-subtitle">三人協作</p>
          <p class="card-text">復刻 GoodSmile 電商網頁，三人協作開發。使用者可以在網上瀏覽選購商品，可透過會員功能查詢訂單資訊。</p>
          <ul>
            <li class="card-text">前端：Handlebar, Bootstrap</li>
            <li class="card-text">後端：Node.js, Express.js, MySQL</li>
            <li class="card-text">開發項目：前台商品瀏覽頁、購物車頁、會員頁面、訂單確認頁、後台交易紀錄頁</li>
          </ul>
        </div>
      </div>
      
      <div class="project-card">
        <div class="card-img"></div>
        <div class="card-body">
          <h5 class="card-title">GreatSmile 電商網頁</h5>
          <p class="catd-subtitle">三人協作</p>
          <p class="card-text">復刻 GoodSmile 電商網頁，三人協作開發。使用者可以在網上瀏覽選購商品，可透過會員功能查詢訂單資訊。</p>
          <ul>
            <li class="card-text">前端：Handlebar, Bootstrap</li>
            <li class="card-text">後端：Node.js, Express.js, MySQL</li>
            <li class="card-text">開發項目：前台商品瀏覽頁、購物車頁、會員頁面、訂單確認頁、後台交易紀錄頁</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .project-group {
    width: 80vw;
    margin: 0 auto;
    background-color: #e3e3e3;
    padding-top: 3em;
  }

  .project-group h1 {
    font-size: 1.5em;
    text-align: center;
    border-bottom: solid 2px #101010;
    margin-bottom: 1em;
  }

  .project-list {
    width: 80%;
    margin: 0 auto;
  }

  .project-card {
    width: 50%;
    padding: 1em 2em;
    margin-bottom: 2em;
    display: inline-block;
  }

  .card-img {
    position: relative;
    padding-bottom: 55%;
    background-image: url('../../public/img/screencapture-greatsmile-herokuapp-products-2021-01-28-19_43_34.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  .card-body {
    padding: 1em 2em;
    line-height: 2em;
    color: #333;
    background-color: beige;
  }

  .card-body ul {
    list-style-type: disc;
    padding-left: 1em;
  }
</style>
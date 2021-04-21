<template>
  <div class="education-group">
    <h1>學歷 Educatione</h1>
    <ul class="education-list">
      <li class="education-item">
        <div class="item-dot">
          <span></span>
        </div>
        <div class="item-text">
          <h5>學校 科系，YYYY 年 MM 月 - YYYY 年 MM 月</h5>
        </div>
      </li>

      <li class="education-item">
        <div class="item-dot">
          <span></span>
        </div>
        <div class="item-text">
          <h5>學校 科系，YYYY 年 MM 月 - YYYY 年 MM 月</h5>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .education-group {
    width: 80vw;
    margin: 0 auto;
    background-color: #f0f0f0;
    padding: 3em 0;
  }

  .education-group h1 {
    font-size: 1.5em;
    text-align: center;
    border-bottom: solid 2px #101010;
    margin-bottom: 1em;
  }

  .education-list {
    width: 80%;
    margin: 0 auto;
    line-height: 2em;
    padding: 1em 2em;
  }

  .education-item {
    display: flex;
    flex-direction: row;
  }

  .education-item .item-dot {
    position: relative;
    display: flex;
    justify-content: center;
    width: 5%;
  }

  .education-item .item-dot::before {
    content: "";
    width: 4px;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 1em;
    background-color: #ccc;
    transform: translateX(-50%);
  }

  .education-item .item-dot span {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #ec6867;
  }

  .education-item  .item-text {
    margin-left: 1em;
    padding-bottom: 1em;
    width: 100%;
  }

  .education-item  .item-text h5 {
    font-size: 1.5em;
    font-weight: bold;
    padding-bottom: 0.5em;
  }
</style>
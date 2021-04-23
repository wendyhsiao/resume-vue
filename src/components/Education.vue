<template>
  <div class="wrapper">
    <div class="education-group vw-80">
      <h2>學歷 Educatione</h2>
      <ul class="education-list">
        <li class="education-item">
          <div class="item-dot">
            <span></span>
          </div>
          <div class="item-text">
            <h3>學校 科系，YYYY 年 MM 月 - YYYY 年 MM 月</h3>
          </div>
        </li>

        <li class="education-item">
          <div class="item-dot">
            <span></span>
          </div>
          <div class="item-text">
            <h3>學校 科系，YYYY 年 MM 月 - YYYY 年 MM 月</h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .education-list {
    width: 80%;
    margin: 0 auto;
    padding: 1em 2em;
  }
  .education-item {
    display: flex;
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
    background-color: #ccc;
    transform: translateX(-50%);
  }
  .education-item .item-dot span {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #ec6867;
    z-index: 1;
  }
  .education-item  .item-text {
    padding: 0 0 1em 2em;
    width: 95%;
  }
</style>
<template>
  <div class="experience-group">
    <h1>工作經驗 Work Experience</h1>
    <ul class="experience-list">
      <li class="experience-item">
        <div class="item-dot">
          <span></span>
        </div>
        <div class="item-text">
          <h5>職位，YYYY 年 MM 月 - YYYY 年 MM 月</h5>
          <p>主要工作內容確認客戶的需求
            主要工作內容確認客戶的需求主要工作內容確認客戶的需求主要工作內容確認客戶的需求主要工作內容確認客戶的需求
            主要工作內容確認客戶的需求主要工作內容確認客戶的需求主要工作內容確認客戶的需求
          </p>
          <ul>
            <li>主要工作內容確認客戶的需求</li>
            <li>主要工作內容確認客戶的需求</li>
            <li>主要工作內容確認客戶的需求</li>
            <li>主要工作內容確認客戶的需求</li>
            <li>主要工作內容確認客戶的需求</li>
          </ul>
        </div>
      </li>

      <li class="experience-item">
        <div class="item-dot">
          <span></span>
        </div>
        <div class="item-text">
          <h5>職位，YYYY 年 MM 月 - YYYY 年 MM 月</h5>
          <p>主要工作內容確認客戶的需求。
            主要工作內容確認客戶的需求主要工作內容確認客戶的需求主要工作內容確認客戶的需求
          </p>
          <ul>
            <li>主要工作內容確認客戶的需求</li>
            <li>主要工作內容確認客戶的需求</li>
            <li>主要工作內容確認客戶的需求</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .experience-group {
    width: 80vw;
    margin: 0 auto;
    background-color: #f0f0f0;
    padding: 3em 0;
  }

  .experience-group h1 {
    font-size: 1.5em;
    text-align: center;
    border-bottom: solid 2px #101010;
    margin-bottom: 1em;
  }

  .experience-list {
    width: 80%;
    margin: 0 auto;
    line-height: 2em;
    padding: 1em 2em;
  }

  .experience-item {
    display: flex;
    flex-direction: row;
  }

  .experience-item .item-dot {
    position: relative;
    display: flex;
    justify-content: center;
    width: 5%;
  }

  .experience-item .item-dot::before {
    content: "";
    width: 4px;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 1em;
    background-color: #ccc;
    transform: translateX(-50%);
  }

  .experience-item .item-dot span {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #ec6867;
  }

  .experience-item  .item-text {
    margin-left: 1em;
    padding-bottom: 1em;
    width: 100%;
  }

  .experience-item  .item-text h5 {
    font-size: 1.5em;
    font-weight: bold;
    padding-bottom: 0.5em;
  }

  .experience-item  .item-text ul {
    list-style-type: disc;
    padding-left: 2em;
  }
</style>
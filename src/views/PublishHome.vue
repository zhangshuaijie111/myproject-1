<template>
  <div>
    <div class="user">
      <img src="../assets/individual.png" />
      <div class="writing" style="margin: 20px">
        <h4>不爱吃麻酱</h4>
        <span style="color:#666;font-size:12px;">关注</span>&nbsp;<span style="font-size:12px;">14</span>&nbsp;
        <span style="color:#666;font-size:12px;">粉丝</span>&nbsp;<span style="font-size:12px;">0</span>
        <p style="color:#666;">还没有简介</p>
      </div>
    </div>
    <!--数据-->
    <div class="data">
        <p style="font-size:20px;padding:20px;">数据总览</p>
        <div class="box">
            <div>
                <p style="color:white;font-size:12px;margin:10px;">新增粉丝</p>
                <p style="font-size:20px;margin-left:10px;">0</p>
            </div>
            <div><p style="color:white;font-size:12px;margin:10px;">主页访客</p>
                <p style="font-size:20px;margin-left:10px;">0</p></div>
            <div><p style="color:white;font-size:12px;margin:10px;">观看数</p>
                <p style="font-size:20px;margin-left:10px;">0</p></div>
            <div><p style="color:white;font-size:12px;margin:10px;">互动数</p>
                <p style="font-size:20px;margin-left:10px;">0</p></div>
        </div>
        <p style="font-size:20px;padding:20px;">最新发布笔记数据</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.user {
  display: flex;
  width: 975px;
  margin-left: 25px;
  height: 120px;
  background-color: #999;
  border-radius: 15px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
}
.data {
  width: 975px;
  margin-left: 25px;
  height: 400px;
  background-color: cornflowerblue;
  margin: 20px;
  border-radius: 15px;
  .box{
    display:flex;
    justify-content:space-around ;
    div{
        width: 180px;
        height: 80px;
        border-radius:10px;
       background-color: #666;
    }
  }
}
</style>
<template>
  <div class="message">
    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <img src="../assets/individual.png" /></div
      ></el-col>
      <el-col :span="16"
        ><div class="grid-content bg-purple-light">
          <h3>不爱吃麻酱</h3>
          <span>小红书号:9441700909 | IP属地:陕西</span><br />
          <h4>还没有简介</h4>
          <span>关注:14</span>
          <span>粉丝:0</span>
          <span>获赞与收藏:0</span>
        </div></el-col
      >
    </el-row>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="笔记" name="first"><Findlist /></el-tab-pane>
      <el-tab-pane label="收藏" name="second"><Findlist /></el-tab-pane>
      <el-tab-pane label="点赞" name="third"><Findlist /></el-tab-pane>
    </el-tabs>
    <!-- <el-empty :image-size="200"></el-empty> -->
  </div>
</template>
<script>
import Findlist from "./Findlist";
export default {
  components: {
    Findlist,
  },
};
</script>
<style lang="less" scoped>
.message {
  width: 1100px;
  height: 1000px;
  background-color: red;
  margin: auto;
  overflow: hidden;
}
img {
  width: 260px;
  height: 260px;
}
.el-empty {
  height: 300px;
  width: 1100px;
}
</style>
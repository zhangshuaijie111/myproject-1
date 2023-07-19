<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="推荐" name="first">推荐</el-tab-pane>
    <el-tab-pane label="穿搭" name="second">穿搭</el-tab-pane>
    <el-tab-pane label="美食" name="third">美食</el-tab-pane>
    <el-tab-pane label="彩妆" name="fourth">彩妆</el-tab-pane>
    <el-tab-pane label="影视" name="fifth">影视</el-tab-pane>
    <el-tab-pane label="职场" name="sixth">职场</el-tab-pane>
    <el-tab-pane label="情感" name="seventh">情感</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab);
      console.log(event);
    },
  },
};
</script>

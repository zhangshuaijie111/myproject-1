<template>
  <div>
    <el-container>
      <el-header style="height: 100px">
        <CommonHeader />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import CommonHeader from "../components/CommonHeader.vue";
export default {
  components: {
    CommonHeader,
  },
};
</script>
<style lang="less">
.el-container {
  .el-header {
    width: 100vw;
    background-color: pink;
  }
}
</style>
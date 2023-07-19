<template>
  <div>
    <el-container>
      <el-header style="height: 100px">
        <CommonHeader />
      </el-header>
      <el-main>
        <CommonMain />
      </el-main>
      <el-footer>
        <CommonFooter />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import CommonHeader from "../components/CommonHeader.vue";
import CommonMain from "../components/CommonMain.vue";
import CommonFooter from "../components/CommonFooter.vue";
export default {
  components: {
    CommonHeader,
    CommonMain,
    CommonFooter,
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
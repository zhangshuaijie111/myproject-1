<template>
  <div>
    <el-container>
      <el-header style="height: 100px">
        <CommonHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
       <CommonFooter />
      </el-footer>
    </el-container> 
  </div>
</template>
<script>
import CommonHeader from "../components/CommonHeader.vue";
import CommonFooter from "../components/CommonFooter.vue";
export default {
  components: {
    CommonHeader,
    CommonFooter,
  },
};
</script>
<style lang="less" scoped>
.el-container {
  .el-header {
    width: 100vw;
    background-color: pink;
  }
}
</style>
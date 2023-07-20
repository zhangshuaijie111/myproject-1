<template>
  <ul>
    <li>
      <el-link icon="el-icon-switch-button" @click="findJump()">发现</el-link>
    </li>
    <li>
      <el-link icon="el-icon-circle-plus-outline" @click="publishJump()"
        >发布</el-link
      >
    </li>
    <li><el-link icon="el-icon-bell" @click="noticeJump()">通知</el-link></li>
    <li><el-link icon="el-icon-user" @click="individualJump()">我</el-link></li>
  </ul>
</template>
<script>
import Publish from "../views/Publish.vue";
import Notice from "../views/Notice.vue";
export default {
  components: {
    Publish,
    Notice,
  },
  methods: {
    publishJump() {
      this.$router.push("/publish");
    },
    noticeJump() {
      this.$router.push("/notice");
    },
    individualJump() {
      this.$router.push("/individual");
    },
    findJump() {
      this.$router.push("/home");
    },
  },
  //   watch:{
  //   publishJump(newval,oldval){
  //     if(newval===oldval)return;
  //     this.$router.push(newval)
  //   }
  //   }
};
</script>
<style scoped lang="less">
ul {
  width: 100%;
  height: 48px;
  li {
    display: inline-block;
    width: 300px;
    height: 48px;
    list-style-type: none;
    .el-link {
      font-size: 22px;
    }
  }
}
</style>
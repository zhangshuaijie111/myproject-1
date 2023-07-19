<template>
  <div>
    <el-container>
      <el-header>
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
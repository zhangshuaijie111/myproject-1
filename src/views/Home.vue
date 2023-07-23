<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="推荐" name="first"><Findlist /></el-tab-pane>
    <el-tab-pane label="穿搭" name="second"><Findlist /></el-tab-pane>
    <el-tab-pane label="美食" name="third"><Findlist /></el-tab-pane>
    <el-tab-pane label="彩妆" name="fourth"><Findlist /></el-tab-pane>
  </el-tabs>
</template>
<script>
import Findlist from './Findlist.vue'

export default {
  components:{
    Findlist,
    
  }
}
</script>
<style lang="less" scoped>
    
</style>
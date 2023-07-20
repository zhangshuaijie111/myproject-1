<template>
  <div>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="评论和@" name="first">
      <Noticelist />
    </el-tab-pane>
    
    <el-tab-pane label="赞和收藏" name="third"><Noticelist /></el-tab-pane>
    <el-tab-pane label="新增关注" name="fourth"><Noticelist /></el-tab-pane>
  </el-tabs>
</div>
</template>
<script>
import Noticelist from './Noticelist.vue'
export default {
  components:{
    Noticelist
  }
}
</script>
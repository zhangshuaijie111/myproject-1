<template>
  <div>
    <p style="font-size: 20px;">笔记管理</p>
    <el-tabs v-model="activeName" style="margin-top:10px;">
      <el-tab-pane label="全部笔记" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="已发布" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="审核中" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="未通过" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

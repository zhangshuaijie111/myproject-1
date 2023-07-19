<template>
  <ul>
    <li><el-link icon="el-icon-switch-button">发现</el-link></li>
    <li><el-link icon="el-icon-circle-plus-outline">发布</el-link></li>
    <li><el-link icon="el-icon-bell">通知</el-link></li>
    <li><el-link icon="el-icon-user">我</el-link></li>
  </ul>
</template>
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
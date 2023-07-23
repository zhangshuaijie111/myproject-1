<template>
  <div class="publish">
    <div class="aside">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @select="selectHandle"
      >
        <el-menu-item index="publishmain">
          <i class="el-icon-menu"></i>
          <span slot="title">发布笔记</span>
        </el-menu-item>
        <el-menu-item index="publishHome">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="notemanagement">
          <i class="el-icon-document"></i>
          <span slot="title">笔记管理</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据看板</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="notedata">笔记数据</el-menu-item>
            <el-menu-item index="fandata">粉丝数据</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">创作百科</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    Jump(name) {
      this.$router.push({ name });
    },
    selectHandle(name) {
      this.Jump(name);
    },
  },
};
</script>
<style style="less" scoped>
.publish {
  display: flex;

  width: 1200px;
  background-color: pink;
  height: 600px;
}
.aside {
  width: 200px;
  height: 400px;
}
.main {
  width: 1000px;
  height: 400px;
  background-color: blue;
}
.el-menu-item [class^="el-icon-"],
.el-submenu [class^="el-icon-"],
[class*=" el-icon-"],
[class^="el-icon-"] {
  margin-left: 0;
}
.el-menu-vertical-demo {
  width: 200px;
}
.navigation {
  height: 60px;
  width: 1000px;
  background-color: blanchedalmond;
}
.upload {
  width: 1000px;
  height: 340px;
  background-color: azure;
}
</style>
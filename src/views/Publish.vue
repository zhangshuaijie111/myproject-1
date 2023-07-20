<template>
  <div class="publish">
    <div class="aside">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">笔记管理</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据看板</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">笔记数据</el-menu-item>
            <el-menu-item index="1-2">粉丝数据</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">笔记灵感</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <div class="navigation">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="上传视频" @click="uploadVideo">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-tab-pane>

          <el-tab-pane label="上传图文" @click="uploadPicture">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件,且不超过500kb
              </div>
            </el-upload>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="upload"></div>
    </div>
  </div>
</template>
<style>
.publish {
  display: flex;

  width: 1200px;
  background-color: pink;
  height: 400px;
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
[class*=" el-icon-"], [class^=el-icon-]  {
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
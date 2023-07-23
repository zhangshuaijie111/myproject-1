<template>
  <div>
    <div class="navigation">
      <el-tabs>
        <el-tab-pane label="上传视频">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog>
            <img width="100%" />
          </el-dialog>
        </el-tab-pane>

        <el-tab-pane label="上传图文">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
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
  </div>
</template>
<style lang="less" scoped>
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
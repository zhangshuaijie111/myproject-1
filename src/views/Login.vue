<template>
  <div>
    <el-form
      ref="form"
      label-width="70px"
      class="login_container"
      :model="form"
      :rules="rules"
    >
      <h3 class="login_title">系统登录</h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>

        <el-button @click="submit" type="primary" class="login_sign"
          >登录</el-button
        >
      </el-form-item>
      <p
        style="color: red; font-size: 12px; display: inline; margin-left: 150px"
        @click="registerJump"
      >
        没有账号？快来注册一个吧
      </p>
    </el-form>
  </div>
</template>
<script>
import Mock from 'mockjs'
import Cookie from "js-cookie";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submit() {
        //token信息
        const token = Mock.Random.guid()
        //token信息存入cookie用于不同页面间的通信
        Cookie.set('token',token)
    },
    registerJump() {
      this.$router.push("/register");
    },
  },
};
</script>
<style lang="less" scoped>
.login_container {
  width: 300px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: boredr-box;
  .login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
  .el-input {
    width: 198px;
  }
  .login_sign {
    margin-left: 50px;
    margin-top: 20px;
  }
}
</style>
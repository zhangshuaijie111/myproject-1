<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h3 class="login_title">系统注册</h3>
      <el-form-item label="用户名" prop="username">
        <el-input
          type="username"
          v-model="ruleForm.username"
          autocomplete="off"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login_sign">提交</el-button>
        <el-button class="login_sign">重置</el-button>
      </el-form-item>
      <p style="color: blue; font-size: 12px" @click="loginJump">
        已有账号,去登录
      </p>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        pass: "",
        checkPass: "",
      },
    };
  },
  methods: {
    loginJump() {
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="less" scoped>
.demo-ruleForm {
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
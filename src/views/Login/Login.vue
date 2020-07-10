<template>
  <div class="login">
    <div class="login-form">
      <div class="login-header">
        <img src="../../assets/images/logo.png" width="100" height="50" alt="">
       
      </div>
      <el-input
          placeholder="请输入用户名"
          suffix-icon="fa fa-user"
          v-model="userNmae"
          style="margin-bottom: 18px"
      >
      </el-input>

      <el-input
          placeholder="请输入密码"
          suffix-icon="fa fa-keyboard-o"
          v-model="password"
          type="password"
          style="margin-bottom: 18px"
          @keyup.native.enter="login"
      >
      </el-input>

      <el-button
          type="primary" :loading="loginLoading"
          style="width: 100%;margin-bottom: 18px"
          @click.native="login"
      >登录
      </el-button>
    

    </div>
  </div>
</template>

<script>
import {getLogin} from '../../network/Login/login.js'
  export default {
    data() {
      return {
        userNmae: '',
        password: '',
        Remenber: true,
        loginLoading: false
      }
    },
    methods: {
      login() {
        let APP = this;
        APP.loginLoading = true;

        getLogin(APP.userNmae,APP.password).then(res=>{
          console.log(res)
              if(res.data.status==1){
                APP.$message({
                    message: res.data.info,
                    type: 'success'
                  });
                setTimeout(() => {
              sessionStorage.setItem(APP.$Config.tokenKey, '123456789');
              APP.$notify({
                title: '登录成功',
                message: '很高兴你的使用！别忘了给个Star哦。',
                type: 'success'
              });
              APP.loginLoading = false;
              APP.$router.push({path: '/'});
               this.$store.commit("increment",res.data.data.uid)
               this.$store.commit("appname",res.data.data.g_name)
               console.log(this.$store.state.uid)
            }, 1000);
          }else{
            APP.$message.error(res.data.info);
            setTimeout(() => {
              APP.loginLoading = false;
              }, 500);
          }
        })
      }
    }
  }
</script>

<style lang="less">
  @import "Login.less";
</style>

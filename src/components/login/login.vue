<template>
  <div id="login-container" :style="{backgroundImage:'url('+require('/public/login/back.png')+')'}">
    <div class="login-area">
      <h1>Hello！</h1>
      <p>
        <span><font color="#bfbfbf">欢迎登陆&nbsp;</font></span>
        <span><font color="#6495ed">幼信通大数据看板</font></span>
      </p>
      <div class="input-box">
        <el-input prefix-icon="el-icon-user" placeholder="请输入您的手机号" v-model="userName" maxlength=11 minlength=11 show-word-limit></el-input>
        <el-input prefix-icon="el-icon-arrow-right" placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-button type="primary" plain @click="login" :disabled="login_btn_bool" :loading="login_btn_load">登陆</el-button>
      </div>
      <p class="bottom-word">欧啦大数据有限公司技术支持</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",

  data(){
    return {
      userName: '',
      password: '',
      login_btn_bool: false,
      login_btn_load: false
    }
  },

  methods: {
    login(){
        if (this.userName === '' || this.password === '') {
          this.$message.error('请输入用户名和密码！')
        }
        this.login_btn_bool = true; this.login_btn_load = true;
        this.axios.get('https://1841782901739441.cn-shenzhen.fc.aliyuncs.com/2016-08-15/proxy/loginAction/loginCheck/', {
          params: {
            userName: this.$data.userName,
            password: this.$data.password
          }
        })
            .then(resp => {
              console.log(resp)
              this.$message({
                message: '登录成功',
                type: 'success'
            })
            this.$data.login_btn_load=false
            this.$router.push('/index')
          })
          .catch(error => {
            console.log(error)
            this.$message.error('登录错误，请检查用户名和密码')
            this.$data.login_btn_load=false
          })
    },
  }
}
</script>

<style lang="less">
#login-container {
  height: 100%;
  width: 100%;
  background-repeat:no-repeat;
  background-size:100%;
  position: fixed;


  .login-area {
    height: 460px;
    width: 300px;
    position: absolute;
    right:80px;margin-left:-w/2;
    top:50%;
    margin-top: -200px;
    display: flex;
    flex-direction: column;

    h1 {
      display: flex;
      justify-content: flex-start;
      padding: 0;
      margin: 0;
    }

    p {
      display: flex;
      justify-content: flex-start
    }

    .bottom-word {
      font-size: 12px;
      margin-left: 32px;
    }

    .input-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .el-input {
        padding: 0;
        margin: 15px 0 0;
        width: 225px;
      }
      .el-button {
        width: 125px;
        margin: 15px 0 0 50px;
      }
    }
  }
}
</style>
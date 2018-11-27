<template>
  <div class="login-container">
    <section class="input-wrap">
      <label class="label-wrap">手机：</label><input type="text" v-model="mobile" placeholder="请输入手机号码" />
    </section>
    <section class="input-wrap">
      <label class="label-wrap">密码：</label><input type="password" v-model="password" placeholder="请输入登录密码" />
    </section>
    <div class="button-wrapper" @click="login">登录</div>
    <div class="register-wrapper" @click="goRegister">还没账号，点击去注册吧！</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import api from '@/api';

export default {
  data() {
    return {
      mobile: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['setToken', 'setUserInfo']),
    goRegister() {
      this.$router.push({ name: 'register' });
    },
    toast(str) {
      this.$createToast({
        time: 1000,
        txt: str,
      }).show();
    },
    login() {
      if (!/^\d{11}$/.test(this.mobile) || !this.mobile) {
        this.toast('手机号码有误，请重填');
        return;
      }
      if (!/^.{6,}$/.test(this.password) || !this.password) {
        this.toast('密码不足6位，请重填');
        return;
      }
      const params = { mobile: this.mobile, password: this.password };
      api.login(params).then((res) => {
        if (res.data.code === 0) {
          const fomatToken = `Bearer ${res.data.data.token}`;
          this.setToken(fomatToken);
          this.setUserInfo(res.data.data.userInfo);
          this.$router.push({ name: 'home' });
        } else {
          this.toast(res.data.msg);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .login-container {
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;

    .input-wrap {
      width: 80%;
      margin: 0 10%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e0e6ed;
      font-size: 20px;

      .label-wrap{
        width: 60px;
        white-space: nowrap;
      }

      input {
        font-size: 16px;
        padding: 10px;
        background: none;
        border: none;
      }

      input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 100px white inset;
      }
    }

    .button-wrapper {
      width: 80%;
      height: 40px;
      line-height: 40px;
      margin: 50px 10%;
      background: blue;
      color: #fff;
    }

    .register-wrapper {
      color: red;
      text-align: center;
      text-decoration: underline;
    }
  }
</style>

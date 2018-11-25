<template>
  <div class="register">
    <form-items :formConfigs="formConfigs"></form-items>
    <foot-button @onClick="submit" btnText="点击注册"></foot-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import formItems from '@/components/inputs';
import FootButton from '@/components/FootButton';
import api from '@/api';

export default {
  components: {
    formItems,
    FootButton,
  },
  data() {
    return {
      formConfigs: [
        {
          itemName: 'name', type: 'text', leftText: '昵称', rightValue: '', placeholder: '请输入',
        },
        {
          itemName: 'realname', type: 'text', leftText: '真实姓名', rightValue: '', placeholder: '请输入',
        },
        {
          itemName: 'mobile', type: 'text', leftText: '登录手机', rightValue: '', placeholder: '请输入',
        },
        {
          itemName: 'password', type: 'password', leftText: '登录密码', rightValue: '', placeholder: '请输入',
        },
        {
          itemName: 'confirmPass', type: 'password', leftText: '确认密码', rightValue: '', placeholder: '请确认',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      options: state => state.base.options,
    }),
  },
  methods: {
    ...mapActions(['setToken', 'setUserInfo']),
    toast(str) {
      this.$createToast({ time: 1000, txt: str }).show();
    },
    submit() {
      const params = {};
      for (const config of this.formConfigs) {
        params[config.itemName] = config.rightValue;
      }
      const {
        realname, password, confirmPass, mobile,
      } = params;

      if (!/^\d{11}$/.test(mobile) || !mobile) {
        this.toast('手机号码有误，请重填');
        return;
      }
      if (!/^.{6,}$/.test(password) || !password) {
        this.toast('密码不足6位，请重填');
        return;
      }
      if (password !== confirmPass) {
        this.toast('两次密码不一致，请重填');
        return;
      }
      if (!realname) {
        this.toast('请输入真实姓名！');
        return;
      }
      delete params[confirmPass];
      api.register(params).then((res) => {
        if (res.data.code === 0) {
          const fomatToken = `Bearer ${res.data.data.token}`;
          this.setToken(fomatToken);
          this.setUserInfo(res.data.data.userInfo);
          this.$router.replace({ name: 'home' });
        } else {
          this.toast(res.data.msg);
        }
      });
    },
  },
};
</script>

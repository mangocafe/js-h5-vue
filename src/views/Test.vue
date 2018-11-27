<template>
  <div class="register">
    <form-items :formConfigs="formConfigs"></form-items>
    <foot-button @onClick="submit" btnText="点击提交"></foot-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
          itemName: 'oldpassword', type: 'password', leftText: '原密码', rightValue: '', placeholder: '请输入',
        },
        {
          itemName: 'password', type: 'password', leftText: '新密码', rightValue: '', placeholder: '请输入',
        },
        {
          itemName: 'confirmPass', type: 'password', leftText: '确认密码', rightValue: '', placeholder: '请确认',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
    }),
  },
  methods: {
    submit() {
      const password = this.formConfigs[1].rightValue;
      if (!/^.{6,}$/.test(password) || !password) {
        this.$toast('密码不足6位，请重填');
        return;
      }
      const confirmPass = this.formConfigs[2].rightValue;
      if (password !== confirmPass) {
        this.$toast('两次密码不一致，请重填');
        return;
      }
      const id = this.userInfo.id;
      const params = {
        oldPassword: this.formConfigs[0].rightValue,
        password,
      };
      api.updatePassword(id, params).then((res) => {
        if (res.data.code === 0) {
          this.$router.replace({ name: 'login' });
        } else {
          this.toast(res.data.msg);
        }
      });
    },
    toast(str) {
      this.$createToast({
        time: 1000,
        txt: str,
      }).show();
    },
  },
};
</script>

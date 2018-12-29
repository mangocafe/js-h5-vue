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
          itemName: 'newMobile', type: 'text', leftText: '新的手机', rightValue: '', placeholder: '请输入',
        },
        {
          itemName: 'password', type: 'password', leftText: '登录密码', rightValue: '', placeholder: '请确认',
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
      const params = {};
      for (const config of this.formConfigs) {
        params[config.itemName] = config.rightValue;
      }
      const {
        newMobile, password,
      } = params;
      if (!/^.{6,}$/.test(password) || !password) {
        this.toast('密码不足6位，请重填');
        return;
      }
      if (!/^\d{11}$/.test(newMobile)) {
        this.toast('手机号码有误');
        return;
      }
      api.updateMobile(this.userInfo.id, params).then((res) => {
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

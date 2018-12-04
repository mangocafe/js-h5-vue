<template>
  <div class="mine-container">
    <form-items :formConfigs="formConfigs"></form-items>
    <foot-button @onClick="submit" btnText="提交更新"></foot-button>
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
          itemName: 'profilePhoto', type: 'photo', photoName: '', leftText: '头像', rightValue: '',
        },
        {
          itemName: 'name', type: 'text', leftText: '昵称', rightValue: '',
        },
        {
          itemName: 'mobile', type: 'show', leftText: '手机', rightValue: '',
        },
        {
          itemName: 'birthday', type: 'birth', leftText: '生日', rightValue: '',
        },
        {
          itemName: 'sex', type: 'select', leftText: '性别', rightValue: '请选择', rightText: '请选择', options: [],
        },
        {
          itemName: 'address', type: 'text', leftText: '住址', rightValue: '', placeholder: '请输入住址',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      options: state => state.options,
      userInfo: state => state.userInfo,
    }),
  },
  created() {
    this.prepareInfo();
  },
  methods: {
    ...mapActions(['setUserInfo']),
    prepareInfo() {
      const { id, name, mobile, address, birthday, sex, profilePhoto } = this.userInfo;

      this.formConfigs[0].photoName = id ? `p-${id}` : 'p-n'; // 用于上传文件时重命名，便于后端区分存储
      this.formConfigs[0].rightValue = profilePhoto;
      this.formConfigs[1].rightValue = name;
      this.formConfigs[2].rightValue = mobile;
      this.formConfigs[3].rightValue = birthday || '请选择';
      this.formConfigs[4].rightValue = sex;
      this.formConfigs[4].options = this.options.sexOpts;
      if (sex !== null) {
        this.formConfigs[4].rightText = this.options.sexOpts[sex].text;
      }
      this.formConfigs[5].rightValue = address;
    },
    submit() {
      const { id, role } = this.userInfo;
      const params = {};
      for (const config of this.formConfigs) {
        params[config.itemName] = config.rightValue;
      }

      const { birthday, sex, address } = params;
      if (!birthday || sex === null || !address) {
        this.$createToast({
          time: 1000,
          txt: '有信息数为空，请填写完毕再提交！',
        }).show();
        return;
      }
      api.updateUser(id, params).then((res) => {
        if (res.data.code === 0) {
          params.id = id;
          params.role = role;
          this.setUserInfo(params);
          this.$router.go(-1);
        }
      });
    },
  },
};
</script>

<template>
  <div class="mine">
    <profile-item :profileInfo="profileInfo"></profile-item>
    <form-items :formConfigs="formConfigs" style="margin-top: 15px"></form-items>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import formItems from '@/components/inputs';
import ProfileItem from '@/components/ProfileItem.vue';
// import api from '@/api';

export default {
  components: {
    formItems,
    ProfileItem,
  },
  data() {
    return {
      formConfigs: [],
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
    }),
  },
  created() {
    this.profileInfo = this.userInfo;
    this.formConfigs = [{
      type: 'route',
      leftText: '修改密码',
      onClick: () => this.goPage('updatePassword'),
    }, {
      type: 'route',
      leftText: '退出登录',
      onClick: () => this.logout(),
    }];
  },
  methods: {
    ...mapActions(['setSignOut']),
    logout() {
      this.setSignOut();
      this.$router.replace({ name: 'login' });
    },
    goPage(pageName) {
      this.$router.push({ name: pageName });
    },
  },
};
</script>

<style lang="scss">
  .mine {
    display: flex;
    flex-direction: column;
  }
</style>

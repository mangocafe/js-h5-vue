<template>
<div class="profile-item-container" @click="goPage">
  <div class="profile-photo-wrap">
    <img :src="defaultProfilePhoto" />
    <!-- <img :src="profileInfo.profilePhoto || defaultProfilePhoto" /> -->
  </div>
  <!-- <div class="profile-info-wrap">
    {{profileInfo.name}}-{{profileInfo.mobile}}
  </div> -->
</div>
</template>

<script lang="ts">
// import { Component, Provide, Prop, Vue } from 'vue-property-decorator';
import defaultProfilePhoto from '../assets/img/defaultProfilePhoto.png';

// @Component
export default {
//   @Prop() private profileInfo!: object;
//   @Provide() private defaultProfilePhoto: string = defaultProfilePhoto;

//   goPage() {
//     this.$router.push({ name: 'userDetail' });
//   }
  props: {
    defaultProfilePhoto: {
      type: String,
      default: defaultProfilePhoto,
    },
  },
  methods: {
    goPage() {
      this.$router.push({ name: 'userDetail' });
    },
  },
};
</script>

<style lang="scss" >
@import "../assets/css/common";
.profile-item-container {
  @include flexbox;
  width: 100%;
  height: px2rem(160px);
  background-color: $bgfff;
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;

  .profile-photo-wrap {
    margin-left: 15px;

    img {
      height: px2rem(120px);
      width: px2rem(120px);
      border-radius: px2rem(120px);
    }
  }
  .profile-info-wrap {
    @include flexbox;
    align-items: center;
    font-size: px2rem(36px);
    margin-right: 15px;
  }
}
</style>

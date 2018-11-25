<template>
  <div class="header-container">
    <div v-show="isShowBack" class="img-wrap" @click="goBack">
      <img class="back-icon" :src="backIcon"/>
    </div>
    <div class="title-wrap">{{title}}</div>
  </div>
</template>

<script>
import backIcon from '../assets/img/back.png';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    backIcon: {
      type: String,
      default: backIcon,
    },
    isShowBack: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" >
  @import "../assets/css/common";

  .header-container {
    height: px2rem(100px);
    width: 100%;
    background: $bgblue;
    color: $fontfff;
    display: flex;
    align-items: center;
    justify-content: center;

    .img-wrap {
      position: fixed;
      left: 10px;
      .back-icon {
        width: px2rem(40px);
        height: px2rem(44px);
      }
    }

    .add-wrap {
      position: fixed;
      right: 10px;
      font-size: px2rem(56px);
    }

    .title-wrap {
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: px2rem(36px);
    }
  }
</style>

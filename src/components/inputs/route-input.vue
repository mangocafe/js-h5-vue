<template>
  <div @click="onClick" class="text-input-container" :class="{line: isShowLine}">
    <div class="left-text-wrap">
      {{config.leftText}}
    </div>
    <div class="right-value-wrap">
      <img src="../../assets/img/arrow-r.png" />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    isNotShowLine: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    isShowLine() {
      if (this.config.isNotShowLine) {
        return false;
      }
      return !this.isNotShowLine;
    },
  },
  methods: {
    onClick() {
      this.config.onClick();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common";
.text-input-container {
  @include flexbox;
  @include  font-dpr(28px);
  height:px2rem(80px);
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;

  .left-text-wrap {
    flex: 1;
  }
  .right-value-wrap {
    margin-right: 15px;

    img {
      width: px2rem(20px);
      height:px2rem(30px);
    }
  }
}

.line {
  border-bottom: 1px solid #E0E6ED;
}
</style>

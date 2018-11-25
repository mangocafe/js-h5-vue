<template>
  <div class="text-input-container" :class="{line: isShowLine}" @click="tipToast">
    <div class="left-text-wrap">
      {{config.leftText}}
    </div>
    <div class="right-value-wrap">
      {{config.rightValue}}
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
    tipToast() {
      this.$createToast({
 type: 'error', mask: true, time: 1500, txt: '请去 设置 -> 修改手机',
}).show();
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
    flex: 4;
    text-align: right;
    margin-right: 15px;
  }
}

.line {
  border-bottom: 1px solid #E0E6ED;
}
</style>

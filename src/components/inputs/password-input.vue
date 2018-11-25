<template>
  <div class="text-input-container" :class="{line: isShowLine}">
    <div class="left-text-wrap">
      {{config.leftText}}
    </div>
    <div class="right-value-wrap">
      <input type="password" class="text-input-item" :placeholder="config.placeholder" v-model="config.rightValue" />
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
    margin-right: 15px;

    .text-input-item {
      width: 100%;
      text-align: right;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: px2rem(28px);

      &.placeholder {
        color: $fontgrey;
        font-size: px2rem(28px);
      }
    }
  }
}

.line {
  border-bottom: 1px solid #E0E6ED;
}
</style>

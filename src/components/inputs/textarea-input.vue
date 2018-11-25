<template>
  <div class="textarea-input-container" :class="{line: isShowLine}">
    <div class="left-text-wrap">
      {{config.leftText}}
    </div>
    <div class="textarea-wrap">
      <div>{{inputedChars}}/{{120}}</div>
      <textarea placeholder="请输入" v-model="config.rightValue"></textarea>
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
    inputedChars() {
      return this.config.rightValue ? this.config.rightValue.length : 0;
    },
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
.textarea-input-container {
  @include flexbox;
  @include  font-dpr(28px);
  flex-direction: column;
  height: 120px;
  margin-left: 15px;

  .left-text-wrap {
    height: 30px;
    line-height: 30px;
  }

  .textarea-wrap {
    width: calc(100% - 15px);
    height: 100%;
    margin-right: 15px;
    position:relative;

    textarea {
      @include  font-dpr(28px);
      margin-right: 15px;
      width: 100%;
      height: 80px;
      border: none;
      background: #f5f5f5;
      outline: none;
    }
    div {
      position: absolute;
      right: 0px;
      bottom: 8px;
      text-align: right;
      font-size: px2rem(28px);
      color: #C0CCDA;
    }
  }
}

.line {
  border-bottom: 1px solid #E0E6ED;
}
</style>

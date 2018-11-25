<template>
  <div>
    <div class="select-input-container" :class="{line: isShowLine}" @click="showPicker">
      <div class="left-text-wrap">
        {{config.leftText}}
      </div>
      <div class="right-value-wrap">
        {{config.rightText}}
      </div>
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
      default() {},
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
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.config.rightValue = selectedVal[0];
      this.config.rightText = selectedText[0];
      this.picker.hide();
    },
    showPicker() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: '请选择',
          data: [this.config.options],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle,
        });
      }
      this.picker.show();
    },
    cancelHandle() {
      this.picker.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common";
.select-input-container {
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
    color: $fontgrey;
    text-align: right;
  }
}
.line {
  border-bottom: 1px solid #E0E6ED;
}

.popup-wrap {
  background: #E6E6E7 !important;

  div {
    height:px2rem(98px);
    line-height:px2rem(98px);
    @include  font-dpr(36px);
    color: $fontblack;
    font-family: PingFangSC-Regular;
    text-align:center;
    border-bottom:1px solid  #E0E6ED;
    background:$bgfff;
  }

  .cancel{
    margin-top:px2rem(14px)
  }
}
</style>

<template>
  <div>
    <div class="select-input-container" :class="{line: isShowLine}" @click="showDatePicker">
      <div class="left-text-wrap">
        {{config.leftText}}
      </div>
      <div class="right-value-wrap">
        {{config.rightValue}}
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
    showDatePicker() {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: '请选择上课日期',
          min: new Date(2017, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle,
        });
      }

      this.datePicker.show();
    },
    selectHandle(date, selectedVal) {
      this.config.rightValue = selectedVal.join('-');
      this.config.onClick && this.config.onClick();
    },
    cancelHandle() {
      this.$createToast({
        type: 'correct',
        txt: '取消选择',
        time: 1000,
      }).show();
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

<template>
  <div class="text-input-container" :class="{line: isShowLine}">
    <div class="left-text-wrap" @click="sendSms">
      {{sendSmsTxt}}
    </div>
    <div class="right-value-wrap">
      <input type="text" class="text-input-item" :placeholder="config.placeholder" v-model="config.rightValue" />
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
  data() {
    return {
      sendSmsTxt: this.config.leftText,
    };
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
    sendSms() {
      if (this.sendSmsTxt !== '发送验证码') {
        return;
      }
      const isSended = this.config.sendSms();
      if (isSended) {
        this.setTime(60);
      }
    },
    setTime(time) {
      if (!time) {
        this.sendSmsTxt = '发送验证码';
        return;
      }
      this.sendSmsTxt = `重新发送(${time})`;
      time--;
      setTimeout(() => {
        this.setTime(time);
      }, 1000);
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
    flex: 2;
    color: blue;
  }
  .right-value-wrap {
    flex: 3;
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

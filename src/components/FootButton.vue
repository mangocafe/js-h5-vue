<template>
  <div class="foot-button-container" @click="onClick">
    {{btnText}}
  </div>
</template>

<script>
  export default {
    props: {
      btnText: {
        type: String,
        default: '',
      },
    },
    methods: {
      onClick() {
        this.$emit('onClick');
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/common";
  .foot-button-container {
    @include  font-dpr(30px);
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    line-height: px2rem(88px);
    height: px2rem(88px);
    background: $bgblue;
    color: $fontfff;
    text-align: center;
  }
</style>

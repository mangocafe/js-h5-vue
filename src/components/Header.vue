<template>
  <div class="header-container">
    <div class="title-wrap">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
@function px2rem($px, $base-font-size: 75px) {
  @return ($px / $base-font-size) * 1rem;
}

.header-container {
  height: px2rem(100px);
  width: 100%;
  background: blue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  .title-wrap {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: px2rem(36px);
   }
 }
</style>

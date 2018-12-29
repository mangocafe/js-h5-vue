<template>
  <div class="form-items-container">
    <div v-if="!listConfigs.length" class="nodata-wrap">
      还没有数据哦
    </div>
    <div v-else v-for="(config, index) in listConfigs" :key="index">
      <user-item v-if="config.type === 'user'" :config="config" :isNotShowLine="++index === listConfigs.length"></user-item>
    </div>
  </div>
</template>

<script>
import userItem from '@/components/listitems/user-item';

export default {
  props: {
    listConfigs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    userItem,
  },
};
</script>

<style lang="scss" scoped>

.form-items-container {
  width: 100%;
  // height: 100%;
  background: #fff;

  .nodata-wrap {
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
  }
}
</style>

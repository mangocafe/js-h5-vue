<template>
  <div class="text-input-container" @click="goToDetail">
    <div class="role-wrap">
      {{config.role}}
    </div>
    <div class="username-wrap">
      {{config.name}}
    </div>
    <div class="mobile-wrap">
      {{config.mobile}}
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

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
  .text-input-container {
    height: 120px;
    align-items: center;
    justify-content: space-between;
    margin: 0 15px;

    .username-wrap {
      flex: 1;
    }
    .mobile-wrap {
      flex: 1.5;
      margin-left: 10px;
    }
    .role-wrap {
      flex: 1;
    }
    .delete-wrap {
      flex: 1;
      text-align: right;
      color: red;
      margin-left: 10px;
    }
  }

  .line {
    border-bottom: 1px solid #E0E6ED;
  }
</style>

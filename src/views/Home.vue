<template>
  <div class="home">
    <cube-scroll
      ref="scrollList"
      :data="listData"
      :options="scrollOptions"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp">
      <ul v-if="isShowList">
        <div v-for="(item, index) in listData" :key="index" style="background: #fff; height: 60px;line-height: 60px; text-align: center">
          姓名：{{item.name}}
          手机：{{item.mobile}}
          地址：{{item.address}}
        </div>
      </ul>
      <div v-else style="background: #fff; flex: 1">没有数据</div>
    </cube-scroll>
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'home',
  data() {
    return {
      listData: [],
      scrollOptions: {
        pullDownRefresh: {
          threshold: 90,
          stop: 60,
          stopTime: 800,
          txt: '刷新成功',
        },
        pullUpLoad: {
          threshold: 0,
          txt: {
            more: '加载更多',
            noMore: '没有更多数据啦',
          },
        },
        click: true,
        bounceTime: 1000,
      },
      offset: 0,
      limit: 10,
      currentPage: 1,
      totalPage: 0,
    };
  },
  computed: {
    isShowList() {
      return this.listData.length;
    },
  },
  created() {
    this.getUsers();
  },
  methods: {
    onPullingDown() {
      this.currentPage = 1;
      this.listConfigs = [];
      this.getUsers();
    },
    onPullingUp() {
      this.currentPage = this.currentPage + 1;
      if (this.currentPage <= this.totalPage) {
        this.getUsers();
      } else {
        this.$refs.scrollList.forceUpdate();
      }
    },
    getUsers() {
      const params = {};
      this.offset = (this.currentPage - 1) * this.limit;
      params.offset = this.offset;
      params.limit = this.limit;
      api.getUsers(params).then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          this.totalPage = Math.ceil(res.data.data.count / this.limit);
          this.listData = res.data.data.rows;
        }
      });
    },
  },
};
</script>

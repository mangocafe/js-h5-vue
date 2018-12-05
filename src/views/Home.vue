<template>
  <div class="home"><!--抱着home页面的总div，由类选择器控制布局-->
    <cube-scroll ref="scrollList" :data="listData" :options="scrollOptions" @pulling-down="onPullingDown" @pulling-up="onPullingUp">
      <!--滴滴滚动组件 后端请求回来的listdata动态绑定给data，绑定上拉下拉方法给options-->
      <ul v-if="isShowList"><!--无序标签，里面绑定了v-if条件渲染，isshowlist为ture才把下面内容渲染出来-->
        <div class="list" v-for="(item, index) in listData" :key="index">
          <!--用v-for把listdata这个数组里面的对象遍历出来使用，isshow为ture才把下面内容渲染出来-->
          <!-- <div>
          <span v-for="n in 10">{{ n }} </span>
          </div> -->
          <!--这是个vfor取整数的用法-->
          姓名：{{item.name}}<!--拿到对象item中的value-->
          手机：{{item.mobile}}
          地址：{{item.address}}
        </div>
      </ul>
      <div v-else style="background: #fff; flex: 1">没有数据</div><!--如果isshowlist为false就展示没有数据-->
    </cube-scroll>
  </div>
</template>

<script>
import api from '@/api'; // 引入api接口

export default {
  name: 'home', // 不知道这个命名干啥用的！
  data() {
    return {
      listData: [], // 定义一个空数组，定以后才能在上面引用
      scrollOptions: { // 定义滑动组件，里面包括上拉和下拉的方法
        pullDownRefresh: { // 下拉刷新方法
          threshold: 90, // 下拉刷新动作的距离阈值，默认一般90比较好用
          stop: 60, // 回弹时显示的元素高度
          stopTime: 800, // 刷新成功的文案显示时间
          txt: '刷新成功', // 刷新成功显示的文案
        },
        pullUpLoad: { // 上拉加载方法
          threshold: 0, // 上拉加载动作的距离阈值，一般上拉时希望不显示滑动的效果
          txt: { // 上拉加载时候的显示文案
            more: '加载更多', // 上拉加载有数据时
            noMore: '没有更多数据啦', // 上拉加载没有数据时
          },
        },
        click: true, // 是否允许在组件里有点击事件
        bounceTime: 1000, // 回弹动画的时间
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

<style lang="scss">
.list {
  background: #fff;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-bottom: 1px solid #E0E6ED;
}
</style>

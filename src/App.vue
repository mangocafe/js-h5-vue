<template>
  <div id="app">
    <com-header :title="title"/>
    <div class="content">
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </div>
    <footer-tab v-if="isShowTabbar" :tabNames="tabNames"></footer-tab>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ComHeader from '@/components/Header.vue';
import FooterTab from '@/components/FooterTab.vue';

// 引入底部菜单栏的图片
import homeIcon from '@/assets/image/tabs/tabbar_home_normal@2x.png';
import homeIconActive from '@/assets/image/tabs/tabbar_home_selected@2x.png';
import mineIcon from '@/assets/image/tabs/tabbar_my_normal@2x.png';
import mineIconActive from '@/assets/image/tabs/tabbar_my_selected@2x.png';

import api from '@/api';

export default {
  name: 'home',
  components: {
    ComHeader,
    FooterTab,
  },
  data() {
    return {
      tabNames: [
        {
          name: '首页', icon: homeIcon, iconActive: homeIconActive, routeName: 'home',
        },
        {
          name: '我的', icon: mineIcon, iconActive: mineIconActive, routeName: 'mine',
        },
      ],
      title: '',
      transitionName: '',
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      loginStatus: state => state.user.loginStatus,
      currentPageTitle: state => state.base.currentPageTitle,
    }),
    isShowTabbar() {
      return this.$route.meta.isTab;
    },
  },
  watch: {
    $route(to, from) {
      const toLevel = Number(to.meta.level);
      const fromLevel = Number(from.meta.level);
      this.title = to.meta.title;
      this.setRouteTransiton(toLevel, fromLevel);
    },
  },
  created() {
    this.getOptions();
  },
  methods: {
    ...mapActions(['setOptions']),
    getOptions() {
      api.getOptions().then((res) => {
        this.setOptions(res.data.data);
      });
    },
    setRouteTransiton(toLevel, fromLevel) {
      // 如果是切换底部tab或首次打开h5 不加动画
      if (!fromLevel) {
        this.transitionName = '';
      } else if (toLevel === 1 && fromLevel === 1) {
        this.transitionName = '';
      } else {
        // 根据路由 元信息的层级判断 切换的动画
        this.transitionName = toLevel < fromLevel ? 'slide-right' : 'slide-left';
      }
    },
  },
};
</script>

<style lang="scss">
  @mixin font-dpr($font-size){
    $font:$font-size/2;
    font-size: $font;
    [data-dpr="2"] & { font-size: $font+2px;}
    [data-dpr="3"] & { font-size: $font+4px;}
  }
  html,body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin:0;
    padding:0;
  }
  input:focus {
    outline: none;
  }
  #app {
    height: 100%;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    @include font-dpr(30px);

    .content {
      flex: 1;
    }

    .slide-left-enter-active {
      animation: slideLeft .3s;
    }
    .slide-right-enter-active {
      animation: slideRight .3s;
    }
    .fold-enter-active, .fold-leave-active {
      transition: transform .3s ease-in;
    }
    .fold-enter, .fold-leave-active {
      transform: translate3d(0, 100%, 0);
    }

    @keyframes slideLeft {
      from {
        transform: translate3d(100%, 0, 0);
        visibility: visible;
      }
      to {
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes slideRight {
      from {
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
      }
      to {
        transform: translate3d(0, 0, 0);
      }
    }
  }
</style>

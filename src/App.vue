<template>
  <div id="app">
    <com-header title="首页"/>
    <div class="content">
      <router-view/>
    </div>
    <footer-tab :tabNames="tabNames"></footer-tab>
  </div>
</template>

<script>
import ComHeader from '@/components/Header.vue';
import FooterTab from '@/components/FooterTab.vue';

// 引入底部菜单栏的图片
import homeIcon from '@/assets/image/tabs/tabbar_home_normal@2x.png';
import homeIconActive from '@/assets/image/tabs/tabbar_home_selected@2x.png';
import mineIcon from '@/assets/image/tabs/tabbar_my_normal@2x.png';
import mineIconActive from '@/assets/image/tabs/tabbar_my_selected@2x.png';

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
          name: '首页', icon: homeIcon, iconActive: homeIconActive, url: '/home',
        },
        {
          name: '我的', icon: mineIcon, iconActive: mineIconActive, url: '/mine',
        },
      ],
    };
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

  #app {
    height: 100%;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    @include font-dpr(30px);

    .content {
      flex: 1;
    }
  }
</style>

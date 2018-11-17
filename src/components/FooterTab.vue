<template>
	<div class="tabar">
		<div class="tab-item" v-for="(tab, index) in tabNames" :key="index" @click="switchTab(tab)">
			<img class="tab-icon" :src="navIndex === index ? tab.iconActive : tab.icon"/>
			<div class="tabName" :class="{ textActive: navIndex === index }">{{tab.name}}</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'footer-tabs',
  props: {
    tabNames: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    navIndex() {
      const CurRouteArray = this.$route.path.split('/');
      switch (CurRouteArray[1]) {
        case 'home':
          return 0;
        case 'mine':
          return 1;
        default:
          return 0;
      }
    },
	},
	methods: {
		switchTab(tab) {
			this.$router.replace({ name: tab.routeName });
		},
	},
};
</script>

<style scoped lang="scss">
  @function px2rem($px, $base-font-size: 75px) {
    @return ($px / $base-font-size) * 1rem;
  }
	.tabar {
		z-index: 999;
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: px2rem(120px);
		background: #fff;
		box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);

		.tab-item{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 5px;

			.tab-icon{
				width: 27px;
				height: 27px;
			}

			.tabName {
				margin-top: 0px;
				color: #2c2c2c;
			}
			.textActive {
				color: blue;
			}
		}
	}
</style>

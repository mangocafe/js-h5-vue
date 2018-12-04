<template>
  <div class="text-input-container" :class="{line: isShowLine}">
    <div class="left-text-wrap">
      {{config.leftText}}
    </div>
    <div class="right-value-wrap">
      <img :src="config.rightValue || defaultProfilePhoto" />
    </div>
    <input ref="fileUpload" @change="imgUpload" type="file" accept="image/*;" />
  </div>
</template>

<script>
import defaultProfilePhoto from '@/assets/img/defaultProfilePhoto.png';
import utils from '@/utils';

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
      defaultProfilePhoto,
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
    imgUpload() {
      const img = this.$refs.fileUpload.files[0];
      // 重命名文件，如果提供了新名字则使用新名字，否则用原有的名字
      const imgType = img.name.split('.')[1];
      const now = Math.round(Date.now() / 1000); // 当前第几秒
      const rename = this.config.photoName ? `${this.config.photoName}-${now}.${imgType}` : img.name;
      utils.compressImage(img, rename, (res) => {
        if (res.status === 200 && res.data.code === 0) {
          this.config.rightValue = res.data.data;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common";
.text-input-container {
  @include flexbox;
  @include  font-dpr(28px);
  height:px2rem(160px);
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;

  input {
    width: 100%;
    height: 70px;
    opacity: 0;
    position:absolute;
    top: 40px;
    right:0;
    font-size: 0;
  }

  .left-text-wrap {
    font-size: font-dpr(30px);
  }
  .right-value-wrap {
    flex-direction: row;
    margin-right: 10px;

    img {
      border-radius: 60px;
      width: 60px;
      height: 60px;
    }
  }
}

.line {
  border-bottom: 1px solid #E0E6ED;
}
</style>

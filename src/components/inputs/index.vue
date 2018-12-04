<template>
  <div class="form-items-container">
    <div v-for="(config, index) in formConfigs" :key="index" class="items-wrap">
      <textarea-input v-if="config.type === 'textarea'" :config="config" :isNotShowLine="++index === formConfigs.length"></textarea-input>
      <photo-input v-if="config.type === 'photo'" :config="config" :isNotShowLine="++index === formConfigs.length"></photo-input>
      <date-input v-if="config.type === 'date'" :config="config" :isNotShowLine="++index === formConfigs.length"></date-input>
      <text-input v-if="config.type === 'text'" :config="config" :isNotShowLine="++index === formConfigs.length"></text-input>
      <password-input v-if="config.type === 'password'" :config="config" :isNotShowLine="++index === formConfigs.length"></password-input>
      <select-input v-if="config.type === 'select'" :config="config" :isNotShowLine="++index === formConfigs.length"></select-input>
      <route-input v-if="config.type === 'route'" :config="config" :isNotShowLine="++index === formConfigs.length"></route-input>
      <show-input v-if="config.type === 'show'" :config="config" :isNotShowLine="++index === formConfigs.length"></show-input>
      <birth-input v-if="config.type === 'birth'" :config="config" :isNotShowLine="++index === formConfigs.length"></birth-input>
    </div>
  </div>
</template>

<script>
import textareaInput from '@/components/inputs/textarea-input';
import textInput from '@/components/inputs/text-input';
import passwordInput from '@/components/inputs/password-input';
import selectInput from '@/components/inputs/select-input';
import dateInput from '@/components/inputs/date-input';
import photoInput from '@/components/inputs/photo-input';
import routeInput from '@/components/inputs/route-input';
import showInput from '@/components/inputs/show-input';
import birthInput from '@/components/inputs/birth-input';

export default {
  props: {
    formConfigs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    textareaInput,
    textInput,
    passwordInput,
    selectInput,
    dateInput,
    photoInput,
    routeInput,
    showInput,
    birthInput,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common";
.form-items-container{
  background: $bgfff;
  width: 100%;
}
</style>

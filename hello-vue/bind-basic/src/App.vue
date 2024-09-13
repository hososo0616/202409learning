<script setup lang="ts">
  import { computed, ref } from 'vue';

  const url = ref('https://vue.js.org/');
  const isSendButtonDisabled = ref(true);

  const widthOrHeight = ref('height');
  const widthOrHeightValue = ref(100);

  const msg = ref('こんにちは世界');
  const isTextColorRed = ref(true);
  const isBgColorBlue = ref(false);
  const styles = ref({
    textColorRed: false,
    bgColorBlue: true,
  })
  const computedStyles = computed( ():{textColorRed: boolean; bgColorBlue: boolean;} => {
    const randText = Math.round(Math.random());
    let textColorFlg = true;
    if(randText == 0) {
      textColorFlg = false;
    }

    const randBg = Math.round(Math.random());
    let bgColorFlg = true;
    if(randBg == 0) {
      bgColorFlg = false;
    }
    return {
      textColorRed: textColorFlg,
      bgColorBlue: bgColorFlg
    }
  })
</script>

<template>
  <p><a v-bind:href="url" target="_blank">Vue.jsのサイト</a></p>
  <p><a :href="url" target="_blank">Vue.jsのサイト(省略形)</a></p>
  <p><button type="button" v-bind:disabled="isSendButtonDisabled">送信</button></p>
  <p><img src="./assets/logo.svg" alt="Vuelogo" v-bind:[widthOrHeight]="widthOrHeightValue"></p>
</template>

<style scoped>
</style>

<script setup lang="ts">
  import { ref } from 'vue';

  const randValue = ref('まだです');
  const onButtonClick = ():void => {
    const rand = Math.round(Math.random() * 10);
    randValue.value = String(rand);
  }

  const mousePointerX = ref(0);
  const mousePointerY = ref(0);
  const onImgMousemove = (event: MouseEvent):void => {
    mousePointerX.value = event.offsetX;
    mousePointerY.value = event.offsetY;
  }
</script>

<template>
 <section>
  <button v-on:click="onButtonClick">クリック</button>
  <button @click="onButtonClick">クリック</button>
  <p>クリックの結果:{{ randValue }}</p>
 </section>
 <section>
  <img src="./assets/logo.svg" alt="logo" width="200" @mousemove="onImgMousemove">
  <p>ポインタの位置：x={{ mousePointerX }} y={{ mousePointerY }}</p>
 </section>
</template>

<style scoped>

</style>

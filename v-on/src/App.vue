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

  const msg = ref('まだです');
  const onEnterKey = ():void => {
    msg.value = 'エンターキーが押下されました';
  }
  const onRightButtonClick = ():void => {
    msg.value = 'ボタンが右クリックされました';
  }
  const onShiftClick = ():void => {
    msg.value = 'シフトを押しながらクリックされました';
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
 <section>
  <p>{{ msg }}</p>
  <input type="text" @keydown.enter="onEnterKey"><br>
  <button @click.right="onRightButtonClick">右クリック</button><br>
  <button @click.shift="onShiftClick">シフトを押しながらクリック</button><br>

 </section>
</template>

<style scoped>

</style>

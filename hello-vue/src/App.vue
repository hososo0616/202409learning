<script setup lang="ts">
  import { ref, computed } from 'vue';

  const name =  ref('田中太郎');

  const now = new Date();
  const nowStr = now.toLocaleTimeString();
  let timeStr = nowStr;
  const timeStrRef = ref(nowStr);

  function changeTime():void {
    const newTime = new Date();
    const newTimeStr = newTime.toLocaleTimeString();
    timeStr = newTimeStr;
    timeStrRef.value = newTimeStr;
  }

  setInterval(changeTime, 1000);

  const radiusInit = Math.round(Math.random() * 10);
  const PI = 3.14;
  const radius = ref(radiusInit);
  const area = computed(():number => {
    return radius.value * radius.value * PI;
  })

  setInterval(():void => {
    radius.value = Math.round(Math.random() * 10);
  }, 1000);
</script>

<template>
  <h1>こんにちは{{ name }}さん</h1><br>
  <p>現在時刻：{{ timeStr }}</p>
  <p>現在時刻(ref)：{{ timeStrRef }}</p>
  <p>半径{{ radius }}の円の面積を円周率{{ PI }}で計算すると、{{ area }}
  </p>
</template>

<style scoped>

</style>

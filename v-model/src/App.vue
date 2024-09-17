<script setup lang="ts">
  import { ref } from 'vue';

  const inputNameModel = ref('双方向');

  const inputNameBind = ref('しんちゃん');
  const inputNameOn = ref('ななし');
  const onInputName = (event:Event):void => {
    const element = event.target as HTMLInputElement;
    inputNameOn.value = element.value;
  }
</script>

<template>
  <section>
    <input type="text" v-model="inputNameModel">
    <p>{{ inputNameModel }}</p>
  </section>
  <section>
    <input type="text" :value="inputNameBind">
  </section>
  <section>
    <input type="text" @input="onInputName">
    <p>{{ inputNameOn }}</p>
  </section>
</template>

<style scoped>

</style>

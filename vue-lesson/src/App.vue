<script setup>
import { ref } from 'vue';

const isShow = ref(true);
</script>

<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <Transition name="v">
    <div v-if="isShow">Hello</div>
  </Transition>
</template>
<style scoped>
  .v-enter-from {
    opacity: 0;
  }

  .v-enter-active {
    transition: opacity 2s;
  }

  .v-enter-to {
    opacity: 1;
  }

  .v-leave-from {
    opacity: 1;
  }

  .v-leave-active {
    transition: opacityy 2s;
  }

  .v-leave-to {
    opacity: 0;
  }
</style>



















<!-- <script setup>
import { ref } from "vue";

const title = 'Vue.js Course';
let price = ref(9.9);

function increment() {
  price.value += 1;
}
</script>

<template>
  <h1>Title: {{ title }}</h1>
  <h1>Price: {{ price }}</h1>
  <button @click="increment">button</button>
</template> -->


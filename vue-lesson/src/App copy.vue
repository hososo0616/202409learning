<script setup>
import { ref } from 'vue';

const isShow = ref(true);
</script>

<template>
  <h1>Animation</h1>
  <div :class="{'opacity-80': isShow, 'opacity-20': !isShow}">Hello</div>
  <button @click="isShow = !isShow">Show</button>
</template>
<style scoped>
div {
  transition: opacity 2s;
  animation: slide 3s infinite;
}

.opacity-80 {
  opacity: 0.8;
}

.opacity-20 {
  opacity: 0.2;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
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


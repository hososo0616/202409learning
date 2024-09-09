<script setup>
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
</template>



<script setup lang="ts">
  import { ref } from 'vue';
  
  const name = ref('名無し');
  </script>

<template>
  <section class="section1">
    <p>{{ name }}さんですね</p>
    <input type="text" v-model="name">
  </section>
</template>

<style scoped>
  .section1 {
    border: orange 1px dashed;
    margin: 10px;
  }
</style>

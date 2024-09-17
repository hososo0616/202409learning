<script setup lang="ts">
  import OneSection from './components/OneSection.vue'; 
  import WithModel from './components/WithModel.vue'; 
</script>

<template>
  <h1>コンポーネント基礎</h1><br>
  <section>
    <h2>コンポーネント1個</h2>
    <OneSection />
  </section><br>
  <section>
    <h2>コンポーネントが複数</h2>
    <OneSection />
    <OneSection />
    <OneSection />
  </section><br>
  <section>
    <h1>コンポーネントの独立性</h1>
    <section>
      <h2>v-modelを含むコンポーネント</h2>
      <WithModel />
      <WithModel />
    </section>
  </section>

</template>

<style scoped>
  section {
    border: blue 1px solid;
    margin: 10px;
  }
</style>

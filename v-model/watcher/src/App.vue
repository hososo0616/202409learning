<script setup lang="ts">
  import { ref, computed } from 'vue';
  
  const cocktailList = new Map<number, Cocktail>();
  cocktailList.set(1, {id: 1, name: 'ホワイトレディ', price: 1200});
  cocktailList.set(2, {id: 2, name: 'ブルーハワイ', price: 1500});
  cocktailList.set(3, {id: 3, name: 'ニューヨーク', price: 1100});
  cocktailList.set(4, {id: 4, name: 'マティーニ', price: 1000});
  
  const number = ref(1);

  const priceMsg = computed(():string => {
    const cocktail = cocktailList.get(number.value);
    let msg = '該当のカクテルはありません';
    if (cocktail != undefined) {
      msg = `該当するカクテルは${cocktail.name}で、価格は${cocktail.price}円です`;
    }
    return msg;
  })

  setInterval(():void => {
    number.value = Math.round(Math.random() * 3) + 1;
  }, 1000);

  interface Cocktail {
    id: number;
    name: string;
    price: number;
  }
</script>

<template>
  <section>
    <p>現在のカクテル番号：{{ number }}</p>
    <p>{{ priceMsg }}</p>
  </section>
</template>

<style scoped>

</style>

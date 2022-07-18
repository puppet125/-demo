<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
const add = () => {
  count.value++;
  console.log(count);
};
</script>
<template>
  <div>
    121212
    <!-- <button>{{'count:'count}}</button> -->
  </div>
</template>
<style scoped lang="less"></style>

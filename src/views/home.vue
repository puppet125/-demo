<template>
  <div>
    <el-button @click="add"> count: {{count}}</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
const count = ref(0);
const store = useStore()
const add = () => {
  count.value++;
  console.log(count.value);
  console.log(store.state.count++);
  
};
</script>
<style scoped lang="less"></style>

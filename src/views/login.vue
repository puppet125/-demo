<template>
  <div>
    <el-button @click="add"> 登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
const store = useStore();
const route = useRoute();
const router = useRouter();
const add = () => {
  router.push({
    name: "home",
    query: {
      ...route.query,
    },
  });
  console.log(route, router);
};
</script>
<style scoped lang="less"></style>

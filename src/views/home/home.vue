<template>
  <div>我是home页面</div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();
const router = useRouter();
onMounted(() => {
  console.log(router);
});
</script>
<style scoped lang="less"></style>

<template>
  <div>
    <el-button @click="add"> 登录 {{ count }}</el-button>
    <el-input v-model="obj.name" :placeholder="obj.age"></el-input>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRef } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
const store = useStore();
const route = useRoute();
const router = useRouter();
const count = ref(12);
const obj = reactive({
  name: "我是周海",
  age: "25",
});
const toRefName = toRef(obj, "name");
console.log(toRefName);

setTimeout(() => {
  count.value = 1;
  obj.name = '12121212'
  // toRefName.value = "周海是刘佳琪爸爸";
}, 1000);
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

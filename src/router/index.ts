import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/home.vue"),
  },
  {
    path: "/",
    redirect: { name: "login" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;

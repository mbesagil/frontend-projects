import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // render url page
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/remote",
    component: () => import("@/views/Remote.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

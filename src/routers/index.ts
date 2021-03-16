import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/crud",
    name: "crud",
    component: () => import("../components/crud.vue"),
  },
  {
    path: "/one",
    name: "one",
    component: () => import("../components/one.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
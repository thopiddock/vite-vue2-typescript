import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  { path: "", component: () => import("@/pages/index.vue") },
  { path: "about", component: () => import("@/pages/about.vue") },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

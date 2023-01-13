import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "TheMenu",
    component: () => import("../components/TheMenu.vue"),
  },
  {
    path: "/pxtorem",
    name: "pxtorem",
    component: () => import("../views/PxToRem.vue"),
  },
  {
    path: "/remtopx",
    name: "remtopx",
    component: () => import("../views/RemToPx.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

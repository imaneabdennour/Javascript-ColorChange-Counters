import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/colorChanger",
    name: "ColorChanger",
    component: () => import("../views/ColorChanger.vue"),
  },
  {
    path: "/letterCounter",
    name: "LetterCounter",
    component: () => import("../views/LetterCounter.vue"),
  },
  {
    path: "/numberCounter",
    name: "NumberCounter",
    component: () => import("../views/NumberCounter.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

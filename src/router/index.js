import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import TestPage from "@/pages/TestPage.vue";
import ResultTestPage from "@/pages/ResultTestPage.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/about",
    name: "about",
    component: MainPage,
  },
  {
    path: "/test",
    name: "test",
    component: TestPage,
  },
  {
    path: "/result",
    name: "result",
    component: ResultTestPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

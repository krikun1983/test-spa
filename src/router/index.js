import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import TestPage from "@/pages/TestPage.vue";
import ResultTestPage from "@/pages/ResultTestPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

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
    redirect: "/test/1",
    component: TestPage,
  },
  {
    path: "/test/:id",
    name: "test/:id",
    component: TestPage,
  },
  {
    path: "/result",
    name: "result",
    component: ResultTestPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFoundPage",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

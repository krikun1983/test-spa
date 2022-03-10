import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import TestPage from "@/views/TestPage.vue";
import TestResultPage from "@/views/TestResultPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

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
    component: TestResultPage,
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

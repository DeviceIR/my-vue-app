import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Dashboard from "../views/layouts/Dashboard.vue";
import Weather from "../views/layouts/Weather.vue";
import TodoList from "../views/layouts/TodoList.vue";
import Profile from "../views/layouts/Profile.vue";

// define routes with correct typing
const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/dashboard" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/weather", name: "Weather", component: Weather },
  { path: "/todo", name: "TodoList", component: TodoList },
  { path: "/profile", name: "Profile", component: Profile },
];

// create router with inferred types
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

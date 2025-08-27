import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Dashboard from "../views/layouts/Dashboard.vue";
import Weather from "../views/layouts/Weather.vue";
import TodoList from "../views/layouts/TodoList.vue";
import Profile from "../views/layouts/Profile.vue";

const Empty = { template: "" };

const routes = [
  // its main route => its App.vue and inside it is Home
  { path: "/", name: "Empty", component: Empty },

  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/Weather", name: "Weather", component: Weather },
  { path: "/todo", name: "todolist", component: TodoList },
  { path: "/profile", name: "profile", component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

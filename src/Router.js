import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CollatzComponent from "./components/CollatzComponent.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const routes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/collatz",
    component: CollatzComponent,
  },
  {
    path: "/tablaMultiplicar",
    component: TablaMultiplicar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

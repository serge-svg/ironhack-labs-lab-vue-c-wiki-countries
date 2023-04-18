import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/list/:alpha3Code",
        name: "list",
        component: () => import("../components/CountryDetails.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

//https://flagpedia.net/data/flags/icon/72x54/ca.png

export default router;
import { createWebHistory, createRouter } from "vue-router";

import Line from "../views/Line";
import Bar from "../views/Bar.vue";
import Doughnut from "../views/Doughnut.vue";
import Pie from "../views/Pie.vue";
import Radar from "../views/Radar.vue";
import PolarArea from "../views/PolarArea.vue";
import Bubble from "../views/Bubble.vue";
import Scatter from "../views/Scatter.vue";

const routes = [
  {
    path: "/",
    name: "Line",
    meta: { title: "Line" },
    component: Line,
  },
  {
    path: "/bar",
    name: "Bar",
    meta: { title: "Bar" },
    component: Bar,
  },
  {
    path: "/doughnut",
    name: "Doughnut",
    meta: { title: "Doughnut" },
    component: Doughnut,
  },
  {
    path: "/pie",
    name: "Pie",
    meta: { title: "Pie" },
    component: Pie,
  },
  {
    path: "/radar",
    name: "Radar",
    meta: { title: "Radar" },
    component: Radar,
  },
  {
    path: "/polar-area",
    name: "PolarArea",
    meta: { title: "Polar Area" },
    component: PolarArea,
  },
  {
    path: "/bubble",
    name: "Bubble",
    meta: { title: "Bubble" },
    component: Bubble,
  },
  {
    path: "/scatter",
    name: "Scatter",
    meta: { title: "Scatter" },
    component: Scatter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

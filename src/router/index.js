import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/AboutView.vue";
import EventDetail from "../views/EventDetail.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "EventDetail",
    props: true,
    component: EventDetail,
  },
  {
    path: "/about",
    name: "about",
    component: About
     
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

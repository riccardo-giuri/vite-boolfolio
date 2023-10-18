import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";
import indexPage from "./pages/Index.vue";
import ProjectPage from "./pages/ProjectShow.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/projects",
        name: "index",
        component: indexPage
    },
    {
        path: "/projects/:project",
        name: "projects",
        component: ProjectPage
    }
] 

const router = createRouter({
    history: createWebHistory(),
    routes
});

export {router};
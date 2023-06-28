import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)


import Home from "@/views/Home";
import TodoPage from "@/views/TodoPage";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/todos",
        component: TodoPage
    }
] 

export default new VueRouter({
    mode: "history",
    routes
  })

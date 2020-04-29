import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Main"),
    children: [
      { path: "/", component: () => import("@/views/Home/Home"), name: "home" },
      { path: "/user", component: () => import("@/views/UserManage/UserManage"), name: "user" },
      { path: "/page1", component: () => import("@/views/Other/PageOne"), name: "page1" },
      { path: "/page2", component: () => import("@/views/Other/PageTwo"), name: "page2" },
    ],
  },
];

const router = new VueRouter({
  routes,
});
//防止点击同一个路由多次控制台报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;

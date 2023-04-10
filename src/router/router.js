const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("../view/homePage/index.vue"),
  },
  // {
  //   name: "build",
  //   path: "/build",
  //   component: () => import("../view/homePage/components/building.vue"),
  // },
  {
    name: "build",
    path: "/build",
    component: () => import("../components/building.vue"),
  },
];

export default routes; //导出

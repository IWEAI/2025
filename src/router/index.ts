import { createRouter, createWebHistory } from "vue-router";

//路由对应表

const router = createRouter({
  history: createWebHistory("/2024/"),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      meta: { isAuth: false },
      //懒加载
      component: () => import("@/views/HomeView/index.vue"),
    },
    {
      path: "/keynotes",
      name: "keynotes",
      meta: { isAuth: false },
      //懒加载
      component: () => import("@/views/KeyNotes/index.vue"),
    },
    {
      path: "/program",
      name: "program",
      meta: { isAuth: false },
      //懒加载
      component: () => import("@/views/ProgramView/index.vue"),
    },
    {
      path: "/organization",
      name: "organization",
      meta: { isAuth: false },
        // redirect: "/organization/committee",
        children: [
          {
            path: "/organization/committee",
            name: "committee",
            meta: { isAuth: false },
            component: () => import("@/views/OrgView/Committee.vue"),
          },
          {
            path: "/organization/pcmembers",
            name: "pcmembers",
            meta: { isAuth: false },
            component: () => import("@/views/OrgView/PCMembers.vue"),

          },
        ],
      },
    {
      path: "/abstracts",
      name: "abstracts",
      meta: { isAuth: false },
      component: () => import("@/views/PaperView/index.vue"),
    },
    // {
    //   path: "/attending",
    //   name: "attending",
    //   meta: { isAuth: false },
    //   component: () => import("@/views/VenueView/index.vue"),
    // },
    {
      path: "/local",
      name: "local",
      meta: { isAuth: false },
      component: () => import("@/views/LocalView/index.vue"),
    },
    // {
    //   path: "/submission",
    //   name: "submission",
    //   meta: { isAuth: false },
    //   component: () => import("@/views/KeyNotes/index.vue"),
    // },
        {
      path: "/past",
      name: "past",
      meta: { isAuth: false },
      component: () => import("@/views/PastView/index.vue"),
    },
  ]
});

// // 回到顶部
// router.afterEach(() => {
//   window.scrollTo(0, 0);
// });

export default router;

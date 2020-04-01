export default [
  {
    path: "/tag/:id/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/huntly/code/personal-site/src/templates/Tag.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/huntly/code/personal-site/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/huntly/code/personal-site/node_modules/gridsome/app/pages/404.vue")
  },
  {
    path: "/:title/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/huntly/code/personal-site/src/templates/Post.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/huntly/code/personal-site/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/huntly/code/personal-site/node_modules/gridsome/app/pages/404.vue")
  }
]


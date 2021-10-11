import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  Router,
  RouteRecordRaw,
} from "vue-router"
import observations from "../screens/Observations.vue"
import RealTime from "../screens/RealTime.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../screens/birds.vue"),
    children: [
      {
        path: "/:birdId",
        component: () => import("../screens/birdDetail.vue"),
      },
    ],
    meta: {
      role: { name: "visitor" },
    },
  },
  {
    path: "/observations",
    component: observations,
    meta: {
      role: { name: "visitor" },
    },
  },
  {
    path: "/realtime",
    component: RealTime,
    meta: {
      role: { name: "visitor" },
    },
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(
  (route: any, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (route.meta.role!.name!) {
      const user = { role: "visitor" }
      if (user.role == route.meta.role.name) {
        next()
      } else {
        router.push(from.path)
      }
    }
  },
)

export default router

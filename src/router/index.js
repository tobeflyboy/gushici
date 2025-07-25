import {createRouter, createWebHistory} from 'vue-router'
import Layout from '../layout/index.vue'
import {getAuthRouters} from "@/router/authRouter";
import {getDynamicRoutes} from '@/utils/getData.js'
import {useAuthRouterStore} from '@/stores/authRouter.js'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '首页',
      component: Layout,
      redirect: '/dashboard',
      meta: {
        staticRouter: true // 静态路由
      },
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard/index.vue'),
        meta: {
          breadcrumbName: '首页',
          icon: 'dashboard',
          staticRouter: true // 静态路由
        }
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/index.vue'),
    }
  ],
})

// 验证token
router.beforeEach(async (to, from, next) => {
  // 设置页面标题
  document.title = to.meta?.breadcrumbName || to.meta?.title || '诗词文集';
  let token = sessionStorage.token
  // if (!token) {
  //   token = '111'
  //   // 成功后将token存到session
  //   sessionStorage.token = token;
  // }
  if (to.path !== '/login' && !token) {
    next('/login')
  } else {
    const authRouterStore = useAuthRouterStore()
    let {routerList} = authRouterStore
    if (!routerList.length) {
      let dynamicRoutes = await getDynamicRoutes()
      // 动态添加路由
      let newRoutes = getAuthRouters(dynamicRoutes)
      authRouterStore.addRouterList(newRoutes)
      newRoutes.forEach(val => {
        router.addRoute(val)
      })
      next({path: to.path})

    } else {
      next()
    }

  }
})
export default router

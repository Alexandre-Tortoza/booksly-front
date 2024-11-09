import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/app'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      meta: { needLogin: true, appLayout: true },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/LoginPage.vue'),
      meta: { needLogin: false, appLayout: false },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterPages.vue'),
      meta: { needLogin: false, appLayout: false },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const appStore = useAppStore()

  if (to.meta.needLogin && !appStore.userLogin) {
    next('/login')
  } else if (!to.meta.needLogin && appStore.userLogin && to.name === 'Login') {
    next('/')
  } else {
    if (to.meta.appLayout) {
      appStore.changeToApp()
    } else {
      appStore.changeToPublic()
    }
    next()
  }
})

export default router

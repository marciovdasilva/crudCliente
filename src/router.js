import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Auth/Login.vue'
import Register from './views/Auth/Register.vue'
import ClientEdit from './views/Client/ClientEdit.vue'
import Dashboard from './views/Dashboard.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const router = new Router({
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/client_edit',
    name: 'ClientEdit',
    component: ClientEdit,
    props: true   
  }

  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(ruta => ruta.meta.requiresAuth)) {
    const user = firebase.auth().currentUser;
    if (user) {
      next();
    }else{
      next({
        name: 'login'
      })
    }
  }else{
    next();
  }
})

export default router;
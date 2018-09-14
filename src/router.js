import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/index'
  },
  {
    name: 'user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'index',
    component: () => import('./view/index'),
    redirect: '/index/project',
    children: [{
        path: 'project',
        name: 'project',
        component: () => import('./view/project'),
        meta: {
            title: '项目宝'
        }
    },{
        path: 'subscibe',
        name: 'subscibe',
        component: () => import('./view/subscibe'),
        meta: {
            title: '项目宝'
        }
    }],
    meta: {
      title: '项目宝'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};

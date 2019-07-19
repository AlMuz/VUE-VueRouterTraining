import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {

    // if user goes back - scroll to previous position
    if (savedPosition) {
      return savedPosition
    }

    // if there are # in url scroll to this
    if (to.hash) {
      return { selector: to.hash };
    }

    // else scroll to top
    return {x:0, y:0};
  }
});

router.beforeEach((to, from, next) => {
  console.log('global');
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

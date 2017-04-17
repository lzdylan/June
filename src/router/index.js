import Vue from 'vue';
import Router from 'vue-router';
import iview from 'iview';
import index from '@/components/index';

Vue.use(Router);
Vue.use(iview);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        }
    ]
});

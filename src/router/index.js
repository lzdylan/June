import Vue from 'vue';
import Router from 'vue-router';
import iview from 'iview';
import welcome from '@/components/welcome';

Vue.use(Router);
Vue.use(iview);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: welcome
        }
    ]
});

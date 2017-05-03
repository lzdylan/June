import Vue from 'vue';
import Router from 'vue-router';
import iview from 'iview';
import axios from 'axios';
import login from '@/components/login';
import index from '@/components/index';
import welcome from '@/components/welcome';
import goodsType from '@/components/goodsType';
import editGoodsType from '@/components/editGoodsType';

Vue.use(Router);
Vue.use(iview);
Vue.prototype.axios = axios;
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            children: [
                {
                    path: '',
                    component: welcome
                },
                {
                    path: '/goodsType',
                    name: 'goodsType',
                    component: goodsType
                },
                {
                    path: '/editGoodsType',
                    name: 'editGoodsType',
                    component: editGoodsType
                }
            ]
        }
    ]
});

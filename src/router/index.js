import Vue from 'vue';
import Router from 'vue-router';
import iview from 'iview';
import axios from 'axios';
import login from '@/components/login';
import index from '@/components/index';
import welcome from '@/components/welcome';
import goodsType from '@/components/goodsType';
import editGoodsType from '@/components/editGoodsType';
import category from '@/components/category';
import editCategory from '@/components/editCategory';
import goodsList from '@/components/goodsList';
import users from '@/components/users';
import orderList from '@/components/orderList';
import customerService from '@/components/customerService';
import orderCount from '@/components/orderCount';
import usersCount from '@/components/usersCount';
import salesCount from '@/components/salesCount';
import usersDetail from '@/components/usersDetail';

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
                    name: 'welcome',
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
                },
                {
                    path: '/category',
                    name: 'category',
                    component: category
                },
                {
                    path: '/editCategory',
                    name: 'editCategory',
                    component: editCategory
                },
                {
                    path: '/goodsList',
                    name: 'goodsList',
                    component: goodsList
                },
                {
                    path: '/users',
                    name: 'users',
                    component: users
                },
                {
                    path: '/orderList',
                    name: 'orderList',
                    component: orderList
                },
                {
                    path: '/customerService',
                    name: 'customerService',
                    component: customerService
                },
                {
                    path: '/orderCount',
                    name: 'orderCount',
                    component: orderCount
                },
                {
                    path: '/usersCount',
                    name: 'usersCount',
                    component: usersCount
                },
                {
                    path: '/salesCount',
                    name: 'salesCount',
                    component: salesCount
                },
                {
                    path: '/usersDetail',
                    name: 'usersDetail',
                    component: usersDetail
                }
            ]
        }
    ]
});

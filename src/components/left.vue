<template>
    <div class="left-menu">
        <Menu :theme="theme" width="210px" class="doc_hei" :open-names="['1','2','3','4','5']">
            <Menu-item name="1">
                <Icon type="home" size="20"></Icon>
                <router-link tag="span" to="/index">首页</router-link>
            </Menu-item>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-rose" size="20"></Icon>
                    我的商品
                </template>
                <Menu-item name="2-1"><router-link tag="span" to="/goodsList">商品列表</router-link></Menu-item>
                <Menu-item name="2-2"><router-link tag="span" to="/category">商品分类</router-link></Menu-item>
                <Menu-item name="2-3"><router-link tag="span" to="/goodsType">商品类型</router-link></Menu-item>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="android-contacts" size="20"></Icon>
                    我的客户
                </template>
                <Menu-item name="3-1"><router-link tag="span" to="/users">客户列表</router-link></Menu-item>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="ios-rose" size="20"></Icon>
                    我的订单
                </template>
                <Menu-item name="4-1"><router-link tag="span" to="/orderList">订单列表</router-link></Menu-item>
                <Menu-item name="4-2"><router-link tag="span" to="/customerService">退货/换货</router-link></Menu-item>
            </Submenu>
            <Submenu name="5">
                <template slot="title">
                    <Icon type="ios-pie"  size="20"></Icon>
                    报表统计
                </template>
                <Menu-item name="5-1"><router-link tag="span" to="/orderCount">订单统计</router-link></Menu-item>
                <Menu-item name="5-2"><router-link tag="span" to="/usersCount">客户统计</router-link></Menu-item>
                <Menu-item name="5-3"><router-link tag="span" to="/salesCount">销量统计</router-link></Menu-item>
            </Submenu>
        </Menu>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                theme: 'light'
            };
        },
        mounted () {
            document.getElementsByClassName('doc_hei')[0].style.minHeight = document.documentElement.clientHeight - 45 + 'px';
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .left-menu
        .doc_hei
            box-shadow 5px 5px 10px #e2e2e2
</style>

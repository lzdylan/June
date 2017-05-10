<template>
    <div class="head">
       <h1>Ipearling</h1>
        <div class="ygp-badge">
            <Menu mode="horizontal" :theme="theme" active-name="0">
                <Menu-item name="1">
                    <Badge count="1">
                        <Icon type="navicon-round" size="26" color="#fff"></Icon>
                    </Badge>
                </Menu-item>
                <Menu-item name="2">
                    <Badge count="2" class-name="demo-badge-alone">
                        <Icon type="android-mail" size="26" color="#fff"></Icon>
                    </Badge>
                </Menu-item>
                <Menu-item name="3">
                    <Badge count="3" class-name="demo-badge-other">
                        <Icon type="android-notifications" size="26" color="#fff"></Icon>
                    </Badge>
                </Menu-item>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        你好，admin
                    </template>
                    <Menu-group title="信息">
                        <Menu-item name="4-1">系统任务</Menu-item>
                        <Menu-item name="4-2">系统消息</Menu-item>
                        <Menu-item name="4-3">系统提醒</Menu-item>
                    </Menu-group>
                    <Menu-group title="用户信息">
                        <Menu-item name="4-4">修改密码</Menu-item>
                        <Menu-item name="4-5">退出</Menu-item>
                    </Menu-group>
                </Submenu>
            </Menu>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                theme: 'dark'
            };
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .head
        display flex
        flex-direction row
        justify-content space-between
        height 45px
        background #464c5b
        h1
            color #fff
            line-height 44px
            display flex
            padding-left 10px
            align-items center
            font-weight bold
        .ygp-badge
            display flex
            flex-direction row
            justify-content space-between
            background #464c5b
            .ivu-menu-horizontal
                height 45px
                line-height 45px
                background #464c5b
            .demo-badge-alone
                background #5cb85c !important
            .demo-badge-other
                background #ff9900!important
</style>

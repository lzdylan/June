<template>
    <div class="users">
        <h3>用户列表<Button type="ghost" @click="users"><Icon style="margin-right:10px" type="arrow-return-left"></Icon>返回列表</Button></h3>
        <Timeline>
            <Timeline-item>
                <p class="name">用户名</p>
                <p class="content">{{userMessage.user_name}}</p>
            </Timeline-item>
            <Timeline-item>
                <p class="name">性别</p>
                <p class="content">{{userMessage.sex}}</p>
            </Timeline-item>
            <Timeline-item>
                <p class="name">用户邮箱</p>
                <p class="content">{{userMessage.user_email}}</p>
            </Timeline-item>
            <Timeline-item>
                <p class="name">用户积分</p>
                <p class="content">{{userMessage.pay_points}}</p>
            </Timeline-item>
            <Timeline-item>
                <p class="name">用户昵称</p>
                <p class="content">{{userMessage.alias}}</p>
            </Timeline-item>
        </Timeline>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                userMessage: {}
            };
        },
        mounted() {
            var username = this.$route.query.user_name;
            var _this = this;
            if (username) {
                this.axios.post('/api/postFindUsers', {'user_name': username})
                .then(function (response) {
                    _this.userMessage = response.data;
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        methods: {
            users: function () {
                this.$router.push('/users');
            }
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .users
        h3
            line-height 35px
            font-size 16px
            border-bottom 1px solid #e2e2e2
            margin-bottom 10px
            button
                float right
            .name
                font-size 14px
                font-weight bold
            .content
                padding-left 5px
</style>

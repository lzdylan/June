<template>
    <div class="users">
        <h3>用户列表<Button type="ghost" @click="users"><Icon style="margin-right:10px" type="arrow-return-left"></Icon>返回列表</Button></h3>
        <div class="user_box">
            <div class="user_header">
                <img width="100" src="../../upload/users/583529d20001919b01000100-200-200.jpg">
                <span>{{userMessage.alias}}</span>
            </div>
            <div class="user_message">
                <ul class="message_list">
                    <li><Icon size="20" type="social-twitter"></Icon><strong>用户名:</strong>{{userMessage.user_name}}</li>
                    <li><Icon size="20" type="person"></Icon><strong>性别:</strong>{{userMessage.sex ? '男' : '女'}}</li>
                    <li><Icon size="20" type="email"></Icon><strong>用户邮箱:</strong>{{userMessage.user_email}}</li>
                    <li><Icon size="20" type="connection-bars"></Icon><strong>用户积分:</strong>{{userMessage.pay_points}}</li>
                    <li><Icon size="20" type="iphone"></Icon><strong>用户电话:</strong>{{userMessage.user_phone}}</li>
                    <li><Icon size="20" type="ios-time-outline"></Icon><strong>注册时间:</strong>{{userMessage.reg_time}}</li>
                    <li><Icon size="20" type="toggle"></Icon><strong>是否启用:</strong><i-switch type="primary" size="small" v-model="userMessage.is_enable" @on-change="oSwitch()"></i-switch></li>
                    <li><Icon size="20" type="ios-time"></Icon><strong>最近登录:</strong>{{userMessage.last_login}}</li>
                </ul>
                <div class="user_address">
                    <h3>用户地址列表</h3>
                    <div  v-for="item in userMessage.user_address" class="card" :class="item.default_address ? 'default' : ''">
                        <Card>
                            <h4><span>地址名称：</span>{{item.address_name}}</h4>
                            <div class="address_mes">
                                <ul>
                                    <li><span>收件人：</span>{{item.consignee}}</li>
                                    <li><span>收件人邮箱：</span>{{item.email}}</li>
                                    <li><span>省：</span>{{item.province}}</li>
                                    <li><span>市：</span>{{item.city}}</li>
                                    <li><span>区/县：</span>{{item.district}}</li>
                                    <li><span>邮编：</span>{{item.zipcode}}</li>
                                    <li><span>固定电话：</span>{{item.tel}}</li>
                                    <li><span>手机：</span>{{item.mobile}}</li>
                                    <li><span>配送时间：</span>{{item.best_time}}</li>
                                    <li><span>具体地址：</span>{{item.address}}</li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
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
                this.axios.post('/api/editUsers', {'user_name': username})
                .then(function (response) {
                    _this.userMessage = response.data;
                        _this.userMessage['reg_time'] = _this.moment(_this.userMessage['reg_time']).format('YYYY-MM-DD');
                        _this.userMessage['last_login'] = _this.moment(_this.userMessage['last_login']).format('YYYY-MM-DD');
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        methods: {
            users: function () {
                this.$router.push('/users');
            },
            oSwitch: function() {
                var _this = this;
                this.axios.post('/api/updateUsers', this.userMessage)
                .then(function (response) {
                    _this.$Message.success('修改成功！');
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$Message.error('修改失败！');
                });
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
        .user_box
            .user_header
                display: flex
                flex-direction column
                align-items center
                img
                    border-radius 50%
                span
                    color #464c5b
                    line-height 40px
                    font-size 16px
            .user_message
                ul.message_list
                    display flex
                    flex-direction row
                    justify-content center
                    flex-wrap wrap
                    li
                        border-bottom 1px solid #e2e2e2
                        padding 5px 0px
                        width 42%
                        margin 0px 4%
                        i
                            display inline-block
                            width 20px
                            vertical-align middle
                        strong
                            line-height 35px
                            margin 0px 10px
                            display inline-block
                            width 60px
            .user_address
                display flex
                flex-direction row
                flex-wrap wrap
                h3
                    line-height 35px
                    border-bottom 1px solid #e2e2e2
                    width 100%
                    margin 10px 5px
                span
                    margin-right 10px
                    width 75px
                    text-align right
                    display inline-block
                .card
                    margin 5px
                    width 100%
                    .ivu-card
                        border-radius 10px
                        box-shadow 5px 5px 7px #e2e2e2
                    .ivu-card-body
                        padding 10px
                        border 1px solid #e2e2e2
                        border-radius 10px
                    h4
                        border-bottom 1px solid #e2e2e2
                        line-height 30px
                    ul
                        display flex
                        flex-direction row
                        flex-wrap wrap
                        li
                            font-size 10px
                            width 16%
                            line-height 30px
                            &:last-child
                                width 40%
                    &.default
                        .ivu-card-body
                            border 1px solid #464c5b
                        h4
                            border-bottom 1px solid #ff9900
</style>

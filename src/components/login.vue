<template>
    <div id="login">
        <Form :model="formItem">
            <Form-item label="用户名：" :model="formItem" :label-width="60">
                <Input type="text" v-model="formItem.user_name" placeholder="请输入用户名"></Input>
            </Form-item>
            <Form-item label="密码：" :label-width="60">
                <Input type="password" v-model="formItem.password" placeholder="请输入密码"></Input>
            </Form-item>
            <Form-item>
                <Button style="width:100%" @click="loginin" type="primary">登录</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                formItem: {
                    user_name: '',
                    password: ''
                }
            };
        },
        mounted () {
            document.getElementById('login').style.minHeight = document.documentElement.clientHeight + 'px';
            document.getElementById('login').style.minWidth = document.documentElement.clientWidth + 'px';
        },
        methods: {
            loginin() {
                let _this = this;
                this.axios.post('/api/login', {'user_name': this.formItem.user_name, 'password': this.formItem.password})
                        .then(function (response) {
                            _this.$router.push('/index');
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
            }
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    #login
        background: radial-gradient(35% 70%, #f9fdfe,#6d8885,#526664,#253034,#15181f); /* 标准的语法（必须放在最后） */
        display flex
        justify-content center
        align-items center
        form
            border 1px solid #253034
            border-radius 10px
            padding 50px
            background #fff
            width 400px
            box-shadow 3px 3px 10px #253034
            .ivu-form-item
                &:last-child
                    margin-bottom 0px!important
</style>

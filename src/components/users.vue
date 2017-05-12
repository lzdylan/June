<template>
    <div class="users">
        <h3>用户列表</h3>
        <Table :context='self' stripe :columns="columns" :data="data" size="small"></Table>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                self: this,
                columns: [
                    {
                        title: '用户头像',
                        key: 'user_avatar',
                        align: 'center',
                        render (row, column, index) {
                            return ``;
                        }
                    },
                    {
                        title: '昵称',
                        key: 'alias'
                    },
                    {
                        title: '用户名',
                        key: 'user_name'
                    },
                    {
                        title: '性别',
                        key: 'sex'
                    },
                    {
                        title: '注册时间',
                        key: 'reg_time'
                    },
                    {
                        title: '消费积分',
                        key: 'pay_points'
                    },
                    {
                        title: '最后一次登录时间',
                        key: 'last_login'
                    },
                    {
                        title: '电话',
                        key: 'user_phone'
                    },
                    {
                        title: '邮箱',
                        key: 'user_email'
                    },
                    {
                        title: '停用/启用',
                        key: 'is_enable',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-switch type="primary" size="small" v-if="data[${index}]" v-model="data[${index}].is_show" @on-change="oSwitch(${index})"></i-switch>`;
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="warning" size="small" @click="detail(${index})">明细</i-button>`;
                        }
                    }
                ],
                data: []
            };
        },
        mounted() {
            var _this = this;
            this.axios.get('api/getFindUsers')
            .then(function (response) {
                console.log(response.data);
                _this.data = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        methods: {
            oSwitch: function(index) {
                var _this = this;
                this.axios.post('/api/updateUsers', this.data[index])
                        .then(function (response) {
                            _this.$Message.success('修改成功！');
                        })
                        .catch(function (error) {
                            console.log(error);
                            _this.$Message.error('修改失败！');
                        });
            },
            detail: function (index) {
                this.$router.push({path: '/usersDetail', query: {user_name: this.data[index].user_name}});
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
</style>

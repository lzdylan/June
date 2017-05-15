<template>
    <div class="users">
        <h3>用户列表</h3>
        <Table :context='self' stripe :columns="columns" :data="data" size="small"></Table>
        <Page class="page" :total="total" @on-change="changePage" @on-page-size-change="changeNumber" :current="current" :pageSize="pageSize" show-sizer></Page>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                pageSize: 10,
                current: 1,
                total: 1000,
                self: this,
                columns: [
                    {
                        title: '昵称',
                        key: 'alias'
                    },
                    {
                        title: '用户名',
                        key: 'user_name'
                    },

                    {
                        title: '消费积分',
                        key: 'pay_points'
                    },
                    {
                        title: '电话',
                        key: 'user_phone'
                    },
                    {
                        title: '邮箱',
                        width: 150,
                        key: 'user_email'
                    },
                    {
                        title: '注册时间',
                        key: 'reg_time'
                    },
                    {
                        title: '停用/启用',
                        key: 'is_enable',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-switch type="primary" size="small" v-if="data[${index}]" v-model="data[${index}].is_enable" @on-change="oSwitch(${index})"></i-switch>`;
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
            this.axios.get('api/getFindUsers', {
                params: {
                    pageSize: _this.pageSize,
                    current: _this.current
                }
            })
            .then(function (response) {
                _this.data = response.data;
                _this.data.forEach(function (value, index) {
                    _this.data[index]['reg_time'] = _this.moment(_this.data['reg_time']).format('YYYY-MM-DD');
                    _this.data[index]['last_login'] = _this.moment(_this.data['last_login']).format('YYYY-MM-DD');
                });
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
            },
            changePage: function (val) {
                this.current = val;
                var _this = this;
                this.axios.get('api/getFindUsers', {
                    params: {
                        pageSize: _this.pageSize,
                        current: _this.current
                    }
                })
                .then(function (response) {
                    _this.data = response.data;
                    _this.data.forEach(function (value, index) {
                        _this.data[index]['reg_time'] = _this.moment(_this.data['reg_time']).format('YYYY-MM-DD');
                        _this.data[index]['last_login'] = _this.moment(_this.data['last_login']).format('YYYY-MM-DD');
                    });
                }).catch(function (error) {
                    console.log(error);
                });
            },
            changeNumber: function (val) {
                this.pageSize = val;
                var _this = this;
                this.axios.get('api/getFindUsers', {
                    params: {
                        pageSize: _this.pageSize,
                        current: _this.current
                    }
                })
                        .then(function (response) {
                            _this.data = response.data;
                            _this.data.forEach(function (value, index) {
                                _this.data[index]['reg_time'] = _this.moment(_this.data['reg_time']).format('YYYY-MM-DD');
                                _this.data[index]['last_login'] = _this.moment(_this.data['last_login']).format('YYYY-MM-DD');
                            });
                        }).catch(function (error) {
                    console.log(error);
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
        .page
            margin-top 10px
            float right
</style>

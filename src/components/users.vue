<template>
    <div class="users">
        <h3>用户列表</h3>
        <Form ref="reqData" :model="reqData" inline>
            <Form-item  label="用户名" :label-width="50">
                <Input v-model="reqData.user_name" placeholder="请输入用户名"></Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="handleSubmit">查询</Button>
            </Form-item>
        </Form>
        <Table :context='self' stripe :columns="columns" :data="data" size="small"></Table>
        <Page class="page" :total="reqData.total" @on-change="changePage" @on-page-size-change="changeNumber" :current="reqData.current" :pageSize="reqData.pageSize" show-sizer></Page>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                self: this,
                reqData: {
                    user_name: '',
                    pageSize: 10,
                    current: 1,
                    total: 1000
                },
                columns: [
                    {
                        title: '用户头像',
                        key: 'user_avatar',
                        width: 100,
                        align: 'center',
                        render (row, column, index) {
                            return `<img width="40" style="margin:5px 0px 0px;" v-if="data[${index}]" :src="'upload/users/'+data[${index}].user_avatar">`;
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
            this.loadData();
        },
        methods: {
            handleSubmit: function () {
                this.loadData();
            },
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
                this.$router.push({path: '/usersDetail', query: {_id: this.data[index]._id}});
            },
            changePage: function (val) {
                this.reqData.current = val;
                this.loadData();
            },
            changeNumber: function (val) {
                this.reqData.pageSize = val;
                this.loadData();
            },
            loadData: function () {
                var _this = this;
                this.axios.post('/api/loadUsers', this.reqData)
                .then(function (response) {
                    _this.data = response.data.res;
                    _this.reqData.total = response.data.dataCount;
                    _this.data.forEach(function (value, index) {
                        _this.data[index]['reg_time'] = _this.moment(_this.data['reg_time']).format('YYYY-MM-DD');
                        _this.data[index]['last_login'] = _this.moment(_this.data['last_login']).format('YYYY-MM-DD');
                    });
                })
                .catch(function (error) {
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

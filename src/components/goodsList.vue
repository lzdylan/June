<template>
    <div class="goods">
        <h3>商品列表 <Button type="ghost" @click="addGoods"><Icon style="margin-right:10px" type="plus"></Icon>添加商品</Button></h3>
        <Form ref="reqData" :model="reqData" inline>
            <Form-item  label="商品名称：" :label-width="75">
                <Input v-model="reqData.goods_name" placeholder="请输入商品名称"></Input>
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
                    goods_name: '',
                    pageSize: 10,
                    current: 1,
                    total: 1000
                },
                columns: [
                    {
                        title: '商品图片',
                        key: 'goods_thumb',
                        align: 'center',
                        render (row, column, index) {
                            return `<img width="50" :src="data[${index}].goods_thumb[0]">`;
                        }
                    },
                    {
                        title: '名称',
                        key: 'goods_name'
                    },
                    {
                        title: '上/下架',
                        key: 'is_on_sale',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-switch type="primary" size="small" v-if="data[${index}]" v-model="data[${index}].is_on_sale" @on-change="oSwitch(${index})"></i-switch>`;
                        }
                    },
                    {
                        title: '热销',
                        key: 'is_hot',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-switch type="primary" size="small" v-if="data[${index}]" v-model="data[${index}].is_hot" @on-change="oSwitch(${index})"></i-switch>`;
                        }
                    },
                    {
                        title: '新品',
                        key: 'is_new',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-switch type="primary" size="small" v-if="data[${index}]" v-model="data[${index}].is_new" @on-change="oSwitch(${index})"></i-switch>`;
                        }
                    },
                    {
                        title: '精品',
                        key: 'is_best',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-switch type="primary" size="small" v-if="data[${index}]" v-model="data[${index}].is_best" @on-change="oSwitch(${index})"></i-switch>`;
                        }
                    },
                    {
                        title: '商品成本',
                        key: 'cost'
                    },
                    {
                        title: '品牌名称',
                        key: 'brand_name'
                    },
                    {
                        title: '所属分类',
                        key: 'cat_name'
                    },
                    {
                        title: '所属类型',
                        key: 'type_name'
                    },
                    {
                        title: '描述',
                        key: 'goods_brief'
                    },
                    {
                        title: '操作',
                        width: 120,
                        key: 'action',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="edit(${index})">编辑</i-button> <i-button type="warning" size="small" @click="remove(${index})">删除</i-button>`;
                        }
                    }
                ],
                data: []
            };
        },
        methods: {
            handleSubmit: function () {
                this.loadData();
            },
            addGoods: function () {
                this.$router.push('/editGoods');
            },
            edit: function(index) {
                this.$router.push({path: '/editGoods', query: {_id: this.data[index]._id}});
            },
            oSwitch: function(index) {
                var _this = this;
                this.axios.post('/api/updateGoods', this.data[index])
                        .then(function (response) {
                            _this.$Message.success('修改成功！');
                        })
                        .catch(function (error) {
                            console.log(error);
                            _this.$Message.error('修改失败！');
                        });
            },
            remove: function (index) {
                var _this = this;
                this.axios.post('/api/removeGoods', {'_id': this.data[index]._id})
                        .then(function (response) {
                            _this.data.splice(index, 1);
                            _this.$Message.success('删除成功！');
                        })
                        .catch(function (error) {
                            console.log(error);
                            _this.$Message.error('删除失败！');
                        });
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
                this.axios.post('/api/findGoods', this.reqData)
                        .then(function (response) {
                            _this.data = response.data.res;
                            _this.reqData.total = response.data.dataCount;
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
            }
        },
        mounted() {
            this.loadData();
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .goods
        margin 0px auto
        h3
            line-height 35px
            font-size 16px
            border-bottom 1px solid #e2e2e2
            margin-bottom 10px
            button
                float right
        .page
            margin-top 10px
            float right
</style>

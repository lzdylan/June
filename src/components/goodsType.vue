<template>
    <div class="goodsType">
        <h3>商品类型列表 <Button type="ghost" @click="addGoodsType"><Icon style="margin-right:10px" type="plus"></Icon>添加类型</Button></h3>
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
                        title: '类型图片',
                        key: 'type_logo',
                        align: 'center',
                        render (row, column, index) {
                            return `<img width="50" v-if="data[${index}]" :src="data[${index}].type_logo">`;
                        }
                    },
                    {
                        title: '名称',
                        key: 'type_name'
                    },
                    {
                        title: '所属品牌',
                        key: 'brand_name'
                    },
                    {
                        title: '所属分类',
                        key: 'cat_name'
                    },
                    {
                        title: '是否显示',
                        key: 'is_show',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-switch type="primary" size="small" v-if="data[${index}]" v-model="data[${index}].is_show" @on-change="oSwitch(${index})"></i-switch>`;
                        }
                    },
                    {
                        title: '是否在导航栏显示',
                        key: 'show_in_nav',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-switch type="primary" size="small" v-if="data[${index}]" v-model="data[${index}].show_in_nav" @on-change="oSwitch(${index})"></i-switch>`;
                        }
                    },
                    {
                        title: '描述',
                        key: 'type_desc'
                    },
                    {
                        title: '操作',
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
            addGoodsType: function () {
                this.$router.push('/editGoodsType');
            },
            edit: function(index) {
                this.$router.push({path: '/editGoodsType', query: {_id: this.data[index]._id}});
            },
            oSwitch: function(index) {
                var _this = this;
                this.axios.post('/api/updateGoodsType', this.data[index])
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
                this.axios.post('/api/removeGoodsType', {'_id': this.data[index]._id})
                    .then(function (response) {
                        _this.data.splice(index, 1);
                        _this.$Message.success('删除成功！');
                    })
                    .catch(function (error) {
                        console.log(error);
                        _this.$Message.error('删除失败！');
                    });
            }
        },
        mounted() {
            var _this = this;
            this.axios.post('/api/findGoodsType')
                .then(function (response) {
                    _this.data = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .goodsType
        margin 0px auto
        h3
            line-height 35px
            font-size 16px
            border-bottom 1px solid #e2e2e2
            margin-bottom 10px
            button
                float right
</style>

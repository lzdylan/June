<template>
    <div class="category">
        <h3>商品分类列表 <Button type="ghost" @click="addCategory"><Icon style="margin-right:10px" type="plus"></Icon>添加分类</Button></h3>
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
                        title: '分类LOGO',
                        key: 'cat_logo',
                        align: 'center',
                        render (row, column, index) {
                            return `<img width="50" v-if="data[${index}]" :src="data[${index}].cat_logo">`;
                        }
                    },
                    {
                        title: '名称',
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
                        title: '所属品牌',
                        key: 'brand_name'
                    },
                    {
                        title: '计量单位',
                        key: 'measure_unit'
                    },
                    {
                        title: '描述',
                        key: 'cat_desc'
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
            addCategory: function () {
                this.$router.push('/editCategory');
            },
            edit: function(index) {
                this.$router.push({path: '/editCategory', query: {_id: this.data[index]._id}});
            },
            oSwitch: function(index) {
                var _this = this;
                this.axios.post('/api/updateCategory', this.data[index])
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
                this.axios.post('/api/removeCategory', {'_id': this.data[index]._id})
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
            this.axios.post('/api/findCategory')
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
    .category
        margin 0px auto
        h3
            line-height 35px
            font-size 16px
            border-bottom 1px solid #e2e2e2
            margin-bottom 10px
            button
                float right
</style>

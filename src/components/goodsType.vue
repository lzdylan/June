<template>
    <div class="goodsType">
        <h3>商品类型列表 <Button type="ghost" @click="addGoodsType"><Icon style="margin-right:10px" type="plus"></Icon>添加类型</Button></h3>
        <Table stripe :columns="columns" :data="data" size="small"></Table>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                columns: [
                    {
                        title: '名称',
                        key: 'type_name'
                    },
                    {
                        title: '是否显示',
                        key: 'is_show'
                    },
                    {
                        title: '是否在导航栏显示',
                        key: 'show_in_nav'
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
                            return `<i-button type="primary" size="small" @click="edit(${index})">编辑</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
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
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                });
            },
            remove: function (index) {
                var _this = this;
                this.axios.post('/api/rgoodsType', {'type_name': this.data[index].type_name})
                    .then(function (response) {
                        _this.data = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        mounted() {
            var _this = this;
            this.axios.get('/api/fgoodsType')
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

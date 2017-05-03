<template>
    <div class="goodsType">
        <h3>添加商品类型<Button type="ghost" @click="goodsType"><Icon style="margin-right:10px" type="arrow-return-left"></Icon>返回列表</Button></h3>
        <Form :model="formItem" :label-width="180">
            <Form-item label="商品类型">
                <Input v-model="formItem.type_name" placeholder="请输入商品类型名称"></Input>
            </Form-item>
            <Form-item label="是否显示">
                <i-switch v-model="formItem.is_show" size="large">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
            </Form-item>
            <Form-item label="是否在导航栏显示">
                <i-switch v-model="formItem.show_in_nav" size="large">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
            </Form-item>
            <Form-item label="商品描述">
                <Input v-model="formItem.type_desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="saveGoodsType">保存</Button>
                <Button type="ghost" style="margin-left: 8px">取消</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                formItem: {
                    type_name: '',
                    is_show: true,
                    show_in_nav: false,
                    type_desc: ''
                }
            };
        },
        methods: {
            goodsType: function () {
                this.$router.push('/goodsType');
            },
            saveGoodsType: function () {
                let _this = this;
                if (this.formItem.type_name !== '') {
                    this.axios.post('/api/agoodsType', this.formItem)
                            .then(function (response) {
                                _this.$Modal.confirm({
                                    title: '添加产品类型',
                                    content: response.data.message,
                                    okText: '继续添加',
                                    cancelText: '返回列表',
                                    onOk: () => {
                                        _this.formItem = {
                                            type_name: '',
                                            is_show: true,
                                            show_in_nav: false,
                                            type_desc: ''
                                        };
                                        _this.$router.push('/editGoodsType');
                                    },
                                    onCancel: () => {
                                        _this.$router.push('/goodsType');
                                    }
                                });
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                }
            }
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
        form
            width 80%
            margin 10px auto
</style>

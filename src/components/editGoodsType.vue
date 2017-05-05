<template>
    <div class="goodsType">
        <h3>添加商品类型<Button type="ghost" @click="goodsType"><Icon style="margin-right:10px" type="arrow-return-left"></Icon>返回列表</Button></h3>
        <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="180">
            <Form-item label="商品类型" prop="type_name">
                <Input v-model="formItem.type_name" placeholder="请输入商品类型名称"></Input>
            </Form-item>
            <Form-item label="是否显示" prop="is_show">
                <i-switch v-model="formItem.is_show" size="large">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
            </Form-item>
            <Form-item label="是否在导航栏显示" prop="show_in_nav">
                <i-switch v-model="formItem.show_in_nav" size="large">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
            </Form-item>
            <Form-item label="商品描述" prop="type_desc">
                <Input v-model="formItem.type_desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="saveGoodsType('formItem')">保存</Button>
                <Button type="ghost"  @click="handleReset('formItem')" style="margin-left: 8px">重置</Button>
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
                },
                ruleValidate: {
                    type_name: [
                        { required: true, message: '产品类型不能为空', trigger: 'blur' }
                    ]
                }
            };
        },
        mounted() {
            var typeName = this.$route.query.type_name;
            var _this = this;
            if (typeName) {
                this.axios.post('/api/egoodsType', {'type_name': typeName})
                    .then(function (response) {
                        _this.formItem = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        methods: {
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            goodsType: function () {
                this.$router.push('/goodsType');
            },
            saveGoodsType: function (name) {
                let _this = this;
                this.$refs[name].validate(function (valid) {
                    if (valid) {
                        _this.axios.post('/api/agoodsType', _this.formItem)
                            .then(function (response) {
                                if (response.data.errno === 0) {
                                    _this.$Message.success(response.data.message, 1.5, function () {
                                        _this.handleReset('formItem');
                                        if (response.data.message === '更新成功!') {
                                            _this.$router.push('/goodsType');
                                        }
                                    });
                                } else {
                                    _this.$Message.error(response.data.message, 1.5, function () {
                                        _this.handleReset('formItem');
                                    });
                                }
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    } else {
                        _this.$Message.error('表单验证失败!');
                    }
                });
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

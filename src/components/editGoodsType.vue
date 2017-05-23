<template>
    <div class="goodsType">
        <h3>添加/编辑商品类型<Button type="ghost" @click="goodsType"><Icon style="margin-right:10px" type="arrow-return-left"></Icon>返回列表</Button></h3>
        <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="180">
            <Form-item label="商品类型" prop="type_name">
                <Input v-model="formItem.type_name" placeholder="请输入商品类型名称"></Input>
            </Form-item>
            <Form-item label="商品品牌" prop="brand_id">
                <Select ref="brands" v-model="formItem.brand_id" @on-change = "brand_select" :label-in-value="true" style="width:200px">
                    <Option v-for="item in brands" :value="item._id" :key="item" :label="item.brand_name"></Option>
                </Select>
            </Form-item>
            <Form-item label="商品分类" prop="cat_id">
                <Select ref="category" v-model="formItem.cat_id" @on-change = "cat_select" :label-in-value="true" style="width:200px">
                    <Option v-for="item in category" :value="item._id" :key="item" :label="item.cat_name"></Option>
                </Select>
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
                _id: '',
                category: [],
                brands: [],
                formItem: {
                    type_name: '',
                    is_show: true,
                    show_in_nav: false,
                    cat_id: '',
                    cat_name: '',
                    brand_id: '',
                    brand_name: '',
                    type_desc: ''
                },
                ruleValidate: {
                    type_name: [
                        { required: true, message: '产品类型不能为空', trigger: 'blur' }
                    ],
                    cat_id: [
                        { required: true, message: '请选择产品所属分类', trigger: 'blur' }
                    ],
                    brand_id: [
                        { required: true, message: '请选择产品所属品牌', trigger: 'blur' }
                    ]
                }
            };
        },
        mounted() {
            this._id = this.$route.query._id;
            var _this = this;
            if (this._id) {
                this.axios.post('/api/editGoodsType', {'_id': this._id})
                    .then(function (response) {
                        _this.formItem = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                this.category = this.formItem.cat_name;
                this.brands = this.formItem.brand_name;
            } else {
                this.axios.get('/api/findBrand')
                    .then(function (response) {
                        _this.brands = response.data;
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
            cat_select: function (that) {
                var _this = this;
                if (that.label !== '') {
                    this.formItem.cat_name = that.label;
                }
                this.axios.post('/api/findCategory', {'brand_id': this.formItem.brand_id})
                    .then(function (response) {
                        _this.category = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            brand_select: function (that) {
                var _this = this;
                if (that.label !== '') {
                    this.formItem.brand_name = that.label;
                }
                this.axios.get('/api/findBrand')
                    .then(function (response) {
                        _this.brands = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                this.cat_select(this.$refs['category']);
            },
            submitData: function (path) {
                var that = this;
                this.axios.post(path, this.formItem)
                    .then(function (response) {
                        if (response.data.errno === 0) {
                            that.$Message.success(response.data.message, 1.5, function () {
                                that.handleReset('formItem');
                                if (that.$route.query._id) {
                                    that.$router.push('/goodsType');
                                }
                            });
                        } else {
                            that.$Message.error(response.data.message, 1.5, function () {
                                if (!that.$route.query._id) {
                                    that.handleReset('formItem');
                                }
                            });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            saveGoodsType: function (name) {
                var _this = this;
                this.$refs[name].validate(function (valid) {
                    if (valid) {
                        _this.formItem.type_name = _this.formItem.type_name.trim();
                        if (_this.$route.query._id) {
                            _this.submitData('/api/updateGoodsType');
                        } else {
                            _this.submitData('/api/addGoodsType');
                        }
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

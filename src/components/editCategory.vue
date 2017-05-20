<template>
    <div class="category">
        <h3>添加商品分类<Button type="ghost" @click="category"><Icon style="margin-right:10px" type="arrow-return-left"></Icon>返回列表</Button></h3>
        <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="180" enctype=‘multipart/form-data’>
            <Form-item label="商品分类" prop="cat_name">
                <Input v-model="formItem.cat_name" placeholder="请输入商品分类名称"></Input>
            </Form-item>
            <Form-item label="分类LOGO" prop="cat_logo">
                <Upload
                        action="/api/upload"
                        name="cat_logo"
                        :max-size=2048
                        :default-file-list="defaultList"
                        :on-success="handleSuccess"
                        :on-error="handleError"
                        :format="['jpg','jpeg','png']">
                    <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
                </Upload>
            </Form-item>
            <Form-item label="是否显示" prop="is_show">
                <i-switch v-model="formItem.is_show" size="large">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
            </Form-item>
            <Form-item label="计量单位" prop="measure_unit">
                <Input v-model="formItem.measure_unit" placeholder="请输入商品计量单位"></Input>
            </Form-item>
            <Form-item label="商品描述" prop="cat_desc">
                <Input v-model="formItem.cat_desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="saveCategory('formItem')">保存</Button>
                <Button type="ghost"  @click="handleReset('formItem')" style="margin-left: 8px">重置</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                type: [],
                defaultList: [],
                formItem: {
                    cat_name: '',
                    is_show: true,
                    measure_unit: '',
                    cat_logo: '',
                    cat_desc: ''
                },
                ruleValidate: {
                    cat_name: [
                        { required: true, message: '产品分类不能为空', trigger: 'blur' }
                    ]
                }
            };
        },
        mounted() {
            var _id = this.$route.query._id;
            var _this = this;
            if (_id) {
                this.axios.post('/api/editCategory', {'_id': _id})
                .then(function (response) {
                    _this.formItem = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        methods: {
            handleSuccess (response, file) {
                // 因为上传过程为实例，这里模拟添加 url
                this.$Message.success(response.message);
            },
            handleError (error, file) {
                // 因为上传过程为实例，这里模拟添加 url
                this.$Message.error(error.message);
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            category: function () {
                this.$router.push('/category');
            },
            submitData: function (path, that) {
                that.axios.post(path, that.formItem)
                .then(function (response) {
                    if (response.data.errno === 0) {
                        that.$Message.success(response.data.message, 1.5, function () {
                            that.handleReset('formItem');
                            if (that.$route.query._id) {
                                that.$router.push('/category');
                            }
                            that.defaultList = [];
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
            saveCategory: function (name) {
                let _this = this;
                this.$refs[name].validate(function (valid) {
                    if (valid) {
                        _this.formItem.cat_name = _this.formItem.cat_name.trim();
                        if (_this.$route.query._id) {
                            _this.submitData('/api/updateCategory', _this);
                        } else {
                            _this.submitData('/api/addCategory', _this);
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
    .category
        margin 0px auto
        h3
            line-height 35px
            font-size 16px
            border-bottom 1px solid #e2e2e2
        form
            width 80%
            margin 10px auto
</style>

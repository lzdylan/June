<template>
    <div class="goods">
        <h3>添加/编辑商品<Button type="ghost" @click="goodsList"><Icon style="margin-right:10px" type="arrow-return-left"></Icon>返回列表</Button></h3>
        <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="120" enctype=‘multipart/form-data’>
            <Row type="flex" justify="center">
                <Col span="20">
                <Form-item label="商品名称：" prop="goods_name">
                    <Input v-model="formItem.goods_name" placeholder="请输入商品名称"></Input>
                </Form-item>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="10">
                    <Form-item label="商品品牌：" prop="brand_id">
                        <Select ref="brands"  v-model="formItem.brand_id" placeholder="请选择商品品牌" @on-change = "brand_select" :label-in-value="true" >
                            <Option v-for="item in brands" :value="item._id" :key="item" :label="item.brand_name"></Option>
                        </Select>
                    </Form-item>
                </Col>
                <Col span="10">
                <Form-item label="是否精品" prop="is_best">
                    <i-switch v-model="formItem.is_best" size="large">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>
                </Form-item>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="10">
                <Form-item  label="商品分类：" prop="cat_id">
                    <Select ref="category" v-model="formItem.cat_id" placeholder="请选择商品分类" @on-change = "cat_select" :label-in-value="true" >
                        <Option v-for="item in category" :value="item._id" :key="item" :label="item.cat_name"></Option>
                    </Select>
                </Form-item>
                </Col>
                <Col span="10">
                <Form-item label="是否热销" prop="is_hot">
                    <i-switch v-model="formItem.is_hot" size="large">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>
                </Form-item>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="10">
                    <Form-item  label="商品类型：" prop="type_id">
                        <Select ref="goodsType" v-model="formItem.type_id" placeholder="请选择商品类型" @on-change = "type_select" :label-in-value="true" >
                            <Option v-for="item in goodsType" :value="item._id" :key="item" :label="item.type_name"></Option>
                        </Select>
                    </Form-item>
                </Col>
                <Col span="10">
                <Form-item label="是否新品" prop="is_new">
                    <i-switch v-model="formItem.is_new" size="large">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>
                </Form-item>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="10">
                <Form-item label="商品成本：" prop="cost">
                    <Input v-model="formItem.cost" placeholder="请输入商品成本"></Input>
                </Form-item>
                </Col>
                <Col span="10">
                <Form-item label="上架/下架：" prop="is_on_sale">
                    <i-switch v-model="formItem.is_on_sale" size="large">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>
                </Form-item>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="20">
                <Form-item label="关键字：" prop="keywords">
                    <Input v-model="formItem.keywords" placeholder="请输入商品关键字中间用空格隔开"></Input>
                </Form-item>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="10">
                <Form-item label="是否促销：" prop="is_promote">
                    <i-switch v-model="formItem.is_promote" size="large">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>
                </Form-item>
                </Col>
                <Col span="10">

                </Col>
            </Row>
            <Row type="flex" justify="center" v-if="formItem.is_promote">
                <Col span="5">
                <Form-item label="开始日期时间：" prop="promote_start_date">
                    <Date-picker type="datetime" placeholder="选择开始日期和时间"  v-model="formItem.promote_start_date"></Date-picker>
                </Form-item>
                </Col>
                <Col span="5">
                <Form-item label="结束日期时间：" prop="promote_end_date">
                    <Date-picker type="datetime" placeholder="选择结束日期和时间" v-model="formItem.promote_end_date"></Date-picker>
                </Form-item>
                </Col>
                <Col span="10">
                <Form-item label="促销价格：" prop="promote_price">
                    <Input v-model="formItem.promote_price" placeholder="请输入促销价格"></Input>
                </Form-item>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="20">
                <Form-item label="商品图片：" prop="goods_img">
                    <div class="demo-upload-list" v-for="item in formItem.goods_img">
                        <template v-if="item">
                            <img v-if="item" :src="item">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(item)"></Icon>
                                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                            </div>
                        </template>
                        <template v-else>
                            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                        </template>
                    </div>
                    <Upload
                            ref="upload"
                            action="/api/uploadGoods"
                            name="goods_img"
                            :show-upload-list="false"
                            :max-size=2048
                            :on-success="handleSuccess"
                            :on-error="handleError"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload"
                            type="drag"
                            :format="['jpg','jpeg','png']"
                            style="display: inline-block;width:58px;">
                        <div style="width: 58px;height:58px;line-height: 58px;">
                            <Icon type="camera" size="20"></Icon>
                        </div>
                    </Upload>
                </Form-item>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="10">
                <Form-item label="库存数量：" prop="goods_number">
                    <Input v-model="formItem.goods_number" placeholder="请输入库存数量"></Input>
                </Form-item>
                </Col>
                <Col span="10">
                <Form-item label="商品重量：" prop="goods_weight">
                    <Input v-model="formItem.goods_weight" placeholder="请输入商品重量"></Input>
                </Form-item>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="10">
                <Form-item label="市场售价：" prop="market_price">
                    <Input v-model="formItem.market_price" placeholder="请输入市场售价"></Input>
                </Form-item>
                </Col>
                <Col span="10">
                <Form-item label="本店售价：" prop="shop_price">
                    <Input v-model="formItem.shop_price" placeholder="请输入本店售价"></Input>
                </Form-item>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="10">
                    <Form-item label="库存报警：" prop="warn_number">
                        <Input v-model="formItem.warn_number" placeholder="请输入库存报警"></Input>
                    </Form-item>
                </Col>
                <Col span="10">
                <Form-item label="赠送积分：" prop="give_integral">
                    <Input v-model="formItem.give_integral" placeholder="请输入赠送积分"></Input>
                </Form-item>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="10">
                <Form-item label="商品商家：" prop="seller_note">
                    <Input v-model="formItem.seller_note" placeholder="请输入商品商家"></Input>
                </Form-item>
                </Col>
                <Col span="10">
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="20">
                <Form-item label="商品描述：" prop="goods_brief">
                    <Input v-model="formItem.goods_brief" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入商品描述..."></Input>
                </Form-item>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span="7">
                    <Form-item>
                        <Button type="primary" @click="saveGoods('formItem')">保存</Button>
                        <Button type="ghost"  @click="handleReset('formItem')" style="margin-left: 8px">重置</Button>
                    </Form-item>
                </Col>
            </Row>
        </Form>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                imgName: '',
                visible: false,
                uploadList: [],
                category: [],
                goodsType: [],
                brands: [],
                formItem: {
                    cat_id: '',
                    cat_name: '',
                    type_id: '',
                    type_name: '',
                    brand_id: '',
                    brand_name: '',
                    goods_name: '', //  商品的名称
                    goods_number: null,    //  商品库存数量
                    goods_weight: null,    //  商品的重量，以千克为单位
                    market_price: null,    //  市场售价
                    shop_price: null,  //  本店售价
                    promote_price: null,   //  促销价格
                    cost: null, // 商品成本
                    promote_start_date: '',     //  促销价格开始日期
                    promote_end_date: '',   //  促销价格结束日期
                    warn_number: null,     //  商品报警数量
                    keywords: '',   //  商品关键字，放在商品页的关键字中，为搜索引擎收录用
                    goods_brief: '',    //  商品的简短描述
                    goods_desc: '', //  商品的详细描述
                    goods_thumb: [],    //  商品在前台显示的微缩图片，如在分类筛选时显示的小图片
                    goods_img: [],  //  商品的实际大小图片，如进入该商品页时介绍商品属性所显示的大图片
                    original_img: [],   //  应该是上传的商品的原始图片
                    is_on_sale: true,   //  该商品是否开放销售，true，是；false，否
                    is_best: true,  //  是否是精品；false，否；true，是
                    is_new: true,   //  是否是新品
                    is_hot: true,   //  是否热销，false，否；true，是
                    is_promote: true,   //  是否特价促销；false，否；true，是
                    seller_note: '',    //  商品的商家备注，仅商家可见
                    give_integral: null   //  购买该商品时每笔成功交易赠送的积分数量
                },
                ruleValidate: {
                    goods_name: [
                        { required: true, message: '商品名称不能为空', trigger: 'blur' }
                    ],
                    brand_id: [
                        { required: true, message: '请选择所属品牌', trigger: 'blur' }
                    ],
                    cat_id: [
                        { required: true, message: '请选择所属分类', trigger: 'blur' }
                    ],
                    type_id: [
                        { required: true, message: '请选择所属类型', trigger: 'blur' }
                    ]
                }
            };
        },
        mounted() {
            this._id = this.$route.query._id;
            this.uploadList = this.$refs.upload.fileList;
            var _this = this;
            if (this._id) {
                this.axios.post('/api/editGoods', {'_id': this._id})
                        .then(function (response) {
                            _this.formItem = response.data;
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                this.category = this.formItem.cat_name;
                this.brands = this.formItem.brand_name;
                this.goodsType = this.formItem.type_name;
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
            handleView (name) {
                this.visible = true;
            },
            handleRemove (file) {
                // 从 upload 实例删除数据
                console.log(file);
                this.formItem.original_img.splice(this.formItem.goods_img.indexOf(file), 1);
                this.formItem.goods_thumb.splice(this.formItem.goods_img.indexOf(file), 1);
                this.formItem.goods_img.splice(this.formItem.goods_img.indexOf(file), 1);
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: '最多只能上传 5 张图片。'
                    });
                }
                return check;
            },
            handleSuccess (response, file) {
                // 因为上传过程为实例，这里模拟添加 url
                this.$Message.success(response.message);
                file.url = response.img_box;
                file.name = 'upload/goods/middle/' + response.img_box;
                this.uploadList.push({
                    'name': response.img_box,
                    'url': 'upload/goods/middle/' + response.img_box
                });

                this.formItem.original_img.push('upload/images/' + response.img_box);
                this.formItem.goods_img.push('upload/goods/middle/' + response.img_box);
                this.formItem.goods_thumb.push('upload/goods/thumb/' + response.img_box);
            },
            handleError (error, file) {
                // 因为上传过程为实例，这里模拟添加 url
                this.$Message.error(error.message);
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            goodsList: function () {
                this.$router.push('goodsList');
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
                this.type_select(this.$refs['goodsType']);
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
            type_select: function (that) {
                var _this = this;
                if (that.label !== '') {
                    this.formItem.type_name = that.label;
                }
                this.axios.post('/api/findGoodsType', {'cat_id': this.formItem.cat_id})
                        .then(function (response) {
                            _this.goodsType = response.data;
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
            },
            submitData: function (path, that) {
                that.axios.post(path, that.formItem)
                        .then(function (response) {
                            if (response.data.errno === 0) {
                                that.$Message.success(response.data.message, 1.5, function () {
                                    that.handleReset('formItem');
                                    if (that.$route.query._id) {
                                        that.$router.push('/goodsList');
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
            saveGoods: function (name) {
                let _this = this;
                this.$refs[name].validate(function (valid) {
                    if (valid) {
                        _this.formItem.goods_name = _this.formItem.goods_name.trim();
                        if (_this.$route.query._id) {
                            _this.submitData('/api/updateGoods', _this);
                        } else {
                            _this.submitData('/api/addGoods', _this);
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
    .goods
        margin 0px auto
        h3
            line-height 35px
            font-size 16px
            border-bottom 1px solid #e2e2e2
        form
            margin 10px auto
        .demo-upload-list
            display inline-block
            width 60px
            height 60px
            text-align center
            line-height 60px
            border 1px solid transparent
            border-radius 4px
            overflow hidden
            background #fff
            position relative
            box-shadow 0 1px 1px rgba(0,0,0,.2)
            margin-right 4px
            &:hover
                .demo-upload-list-cover
                    display block
            img
                width 100%
                height 100%
            .demo-upload-list-cover
                display none
                position absolute
                top 0
                bottom 0
                left 0
                right 0
                background rgba(0,0,0,.6)
                i
                    color #fff
                    font-size 20px
                    cursor pointer
                    margin 0 2px
</style>

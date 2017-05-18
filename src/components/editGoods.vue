<template>
    <div class="goods">
        <h3>添加商品<Button type="ghost" @click="goodsList"><Icon style="margin-right:10px" type="arrow-return-left"></Icon>返回列表</Button></h3>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
            };
        },
        methods: {
            goodsList: function () {
                this.$router.push('goodsList');
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
</style>

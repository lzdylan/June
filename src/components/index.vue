<template>
    <div id="index">
        <vhead></vhead>
        <div class="content-box">
            <vleft></vleft>
            <div class="vright">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import vhead from '@/components/head';
    import vleft from '@/components/left';
    export default{
        data () {
            return {
                formItem: {
                    username: '',
                    userpwd: ''
                }
            };
        },
        components: {
            vhead, vleft
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .content-box
        display flex
        flex-direction row
        justify-content space-between
        .vright
            border 1px solid #e2e2e2
            flex-grow 10
            margin-left 15px
            padding 10px
            box-shadow 5px 5px 10px #e2e2e2
</style>

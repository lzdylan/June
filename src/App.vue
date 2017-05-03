<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'app',
    data () {
        return {
        };
    },
    methods: {

    }
};
</script>

<style lang="stylus">
#app
    color #2c3e50
    display flex
    background #fff
    flex-direction column
    justify-content space-between
</style>

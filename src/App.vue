<template>
    <div id="app">
        <component :is="compon" @loginin="loginin"></component>
    </div>
</template>

<script type="text/ecmascript-6">
    import login from '@/components/login';
    import index from '@/components/index';
export default {
    name: 'app',
    data () {
        return {
            compon: 'login'
        };
    },
    components: {
        login, index
    },
    methods: {
        loginin() {
            this.compon = 'index';
        }
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

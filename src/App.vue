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
        loginin(formItem) {
            let _this = this;
            this.axios.post('/api/login', {'user_name': formItem.user_name, 'password': formItem.password})
                .then(function (response) {
                    console.log('saved successfully');
                    console.log(response.data.gaga);
                    _this.compon = response.data.compon;
                    console.log(_this.compon);
                })
                .catch(function (error) {
                    console.log(error);
                });
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

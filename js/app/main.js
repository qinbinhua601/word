define(["zepto", "vue", 'vue-router', 'vm/index', 'vm/foo', 'vm/bar'], function($, Vue, VueRouter, Index, Foo, Bar) {

    $('#loading').hide()

    Vue.use(VueRouter)
    var router = new VueRouter()

    router.map({
        '/': {
            component: Index
        },
        '/foo': {
            component: Foo
        },
        '/bar': {
            component: Bar
        },
    })

    vData = {
        msg : 'qinbinhua'
    }

    router.start(new Vue({
        data : vData
    }) , '#app')
})

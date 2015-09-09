define(["vue", 'vue-router'], function(Vue, VueRouter) {
    Vue.use(VueRouter);
    var router = new VueRouter();


    var Foo = Vue.extend({
        template: '<div class="page">this is page 1</div>'
    })

    var Bar = Vue.extend({
        template: '<div class="page">this is page 2</div>'
    })

    router.map({
        '/foo': {
            component: Foo
        },
        '/bar': {
            component: Bar
        },
    })


    router.start({}, '#app')
});

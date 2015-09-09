// requirejs config
requirejs.config({
    baseUrl: "js/lib",
    paths: {
        "app": "../app",
        "zepto" : ["http://zeptojs.com/zepto.min" ,"../lib/zepto.min"],
        "vue" : "http://cdn.jsdelivr.net/vue/0.12.10/vue",
        "vue-router" : "http://rawgit.com/vuejs/vue-router/dev/dist/vue-router"
    },
    shim:{
        zepto: {
          exports: '$'
        }
    }
});
// load the main.js 
requirejs(["app/main"]);
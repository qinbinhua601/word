// requirejs config
requirejs.config({
    baseUrl: ".",
    paths: {
        "app": "js/app",
        "vm": "modules",
        "zepto" : "js/lib/zepto.min",
        "vue" : "js/lib/vue_1213.min",
        "vue-router" : "js/lib/vue-router.min",
        "text": "js/lib/text"
    },
    shim:{
        zepto: {
          exports: '$'
        }
    }
});
// load the main.js
requirejs(["app/main"]);
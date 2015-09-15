define(['vue', 'text!templates/index.html'], function(Vue, Html) {
    "use strict";
    var myModule = Vue.extend({
        template: Html
    })

    return myModule;
});
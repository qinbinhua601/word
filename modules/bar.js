define(['vue', 'text!templates/bar.html'], function(Vue, Html) {
    "use strict";
    var myModule = Vue.extend({
        template: Html
    })

    return myModule;
});
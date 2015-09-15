define(['vue', 'text!templates/foo.html'], function(Vue, Html) {
    "use strict";
    var myModule = Vue.extend({
        template: Html
    })

    return myModule;
});
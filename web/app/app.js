define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, router) {

    router.route(":app", "recipe", function (app) {
        this.loadModule("bundles/recipe/main");
    });

    return {
        initialize: function () {
            Backbone.history.start({ pushState: true, silent: true });
            Backbone.history.loadUrl(Backbone.history.getFragment());
        }
    };
});

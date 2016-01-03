'use strict';

require.config({
    shim: {
        jquery: {
            exports: '$'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery',
                'text'
            ],
            exports: 'Backbone'
        },
        "backbone.paginator": {
            deps: [
                'backbone'
            ]
        },
        bootstrap: {
            deps: [
                'jquery'
            ],
            exports: 'bootstrap'
        },
        underscore: {
            exports: '_'
        }
    },
    paths: {
        jquery:               '../assets/vendor/jquery/dist/jquery.min',
        backbone:             '../assets/vendor/backbone-amd/backbone-min',
        "backbone.paginator": '../assets/vendor/backbone.paginator/lib/backbone.paginator.min',
        bootstrap:            '../assets/vendor/bootstrap/dist/js/bootstrap.min',
        //respond:            'lib/respond.min.js',
        underscore:           '../assets/vendor/underscore-amd/underscore-min',
        text:                 '../assets/vendor/requirejs-text/text'
    }
});

require(['bootstrap'], function(bootstrap) {
    // if(BrowserDetect.browser == 'Explorer' && BrowserDetect.version < 9) {
    // 	require(['respond'], function() {});
    // }
});

require(['app'], function (app) {
    app.initialize();
});

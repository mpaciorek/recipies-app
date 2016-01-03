define([
    // templates
    'text!../templates/mainTemplate.html'
    // libraries
], function(
    // templates
    mainTemplate
){

	var ExampleView = Backbone.View.extend({

        el: $('#recipe-wrapper'),

        events: {},

        initialize: function(options){
            this.render();
        },

        render: function() {
            var data = {
                example: 'This is only example'
            };
            var template = _.template(mainTemplate, data);
            this.$el.html(template);
        }
    });

    return ExampleView;
});

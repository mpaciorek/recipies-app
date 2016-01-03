define([
    'underscore',
    'backbone'
], function (
    _,
    Backbone)
{
    'use strict';

    var BaseCollection = Backbone.Collection.extend({

        removeDuplicates: function(data) {
            var length  = data.length;
            var values  = [];
            var counter = {};

            for (var i = 0; i < length; i++) {
                var key = JSON.stringify(data[i]);
                var value = data[i];

                if (counter[key] === undefined) {
                    values.push(value);
                    counter[key] = 1;
                } else {
                    counter[key]++;
                }
            }

            return values;
        }

    });

    return BaseCollection;
});
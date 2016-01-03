define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {

	'use strict';

	var ParcelFilterModel = Backbone.Model.extend({
        defaults: function() {
            return {
                sort_by: 'CREATION_DATE',
                sort_order: 'DESC'
            };
        }
	});

	return ParcelFilterModel;
});

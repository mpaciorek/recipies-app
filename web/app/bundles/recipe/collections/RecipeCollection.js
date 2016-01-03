define([
	'../models/RecipeModel',
    'backbone.paginator'
], function (RecipeModel) {

	'use strict';

	var RecipeCollection = Backbone.PageableCollection.extend({
		model : RecipeModel,
		url: Routing.generate('app.parcel.list'),

		initialize : function(models, options) {

		},

        state: {
            pageSize: 10
        },

        parseState: function (response, queryParams, state, options) {
            return {
                totalRecords: response.count,
                currentPage: response.currentPage,
                pageSize: response.limit
            };
        },

        parseRecords: function (responce, options) {
            return responce.items;
        }

	});

	return RecipeCollection;
});
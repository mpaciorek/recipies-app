define([
	'../models/ParcelModel',
    'backbone.paginator'
], function (ParcelModel) {

	'use strict';

	var ParcelCollection = Backbone.PageableCollection.extend({
		model : ParcelModel,
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

	return ParcelCollection;
});
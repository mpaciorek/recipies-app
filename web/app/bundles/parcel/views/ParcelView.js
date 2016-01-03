define([
    // collections
    '../../_common/collections/ParcelCollection',
    // models
    '../../_common/models/ParcelFilterModel',
    // templates
    'text!../templates/mainTemplate.html',
    'text!../templates/paginationTemplate.html'
    // libraries
], function(
    // collections
    ParcelCollection,
    // models
    FilterModel,
    // templates
    mainTemplate,
    paginationTemplate
){

	var ParcelView = Backbone.View.extend({

        el: $('#parcel-page'),

        parcels : new ParcelCollection(),
        filter : new FilterModel(),
        headers : [],

        events: {
            "click .pagination a" : "paginate",
            "click table a.sortable" : "sort"
        },

        initialize: function(options){
            this.loadHeaders();
            this.loadParcels();
        },

        loadHeaders: function() {
            var elements = this.$el.find('th.parcel-header');
            var _this = this;
            this.headers = [];

            _.each(elements, function(el) {
                _this.headers.push($(el).data('header'));
            });
        },

        loadParcels: function() {
            var _this = this;
            this.parcels.fetch({
                data: {
                    filter: _this.filter.toJSON()
                },
                success: function(collection) {
                    _this.render();
                }
            });
        },

        render: function() {
            var _this = this;
            var data = {
                parcels: this.parcels,
                headers: this.headers
            };

            var template = _.template(mainTemplate, data);
            this.$el.find('#parcel-table tbody').html(template);

            template = _.template(paginationTemplate, _this.parcels.state);
            this.$el.find('#parcel-pagination').html(template);

            this.updateHeaders();
        },

        sort: function(ev) {
            ev.preventDefault();
            var element = $(ev.currentTarget);
            var sortKey = element.data('sort');

            if  (this.filter.get('sort_by') == sortKey) {

                if (this.filter.get('sort_order') == 'DESC') {
                    this.filter.set('sort_order', 'ASC');
                } else {
                    this.filter.set('sort_order', 'DESC');
                }
            }

            this.filter.set('sort_by', sortKey);

            this.loadParcels();
        },

        updateHeaders: function() {
            var elements = this.$el.find('a.sortable');
            var _this = this;

            _.each(elements, function(el){
                $(el).removeClass('desc');
                $(el).removeClass('asc');

                if ($(el).data('sort') == _this.filter.get('sort_by')) {
                    (_this.filter.get('sort_order') == 'DESC')?  $(el).addClass('desc') : $(el).addClass('asc');
                }
            });

            //console.log(elements);
        },

        paginate: function(ev) {
            ev.preventDefault();
            var _this = this;
            var element = $(ev.currentTarget);
            var page = element.data('page');

            if (!_.isUndefined(page)) {
                this.parcels.getPage(page, {
                    data: {
                        filter: _this.filter.toJSON()
                    }
                }).done(function () {
                    _this.render();
                });
            }
        }

    });

    return ParcelView;
});

(function () {
	var app = angular.module('store-prod', []);

	app.directive('productGallery', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function() {
                this.current = 0;
                this.setCurrent = function(el) {
                    this.current = (el === undefined ? 0 : el); //el || 0; works too
                };
            },
            controllerAs: 'gallery'
        };
    });

    app.directive('productTitle', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function() {
                this.tab = 1;

                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };

                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panelka'
        };
    });

    app.directive('prodReview', function() {
        return {
            restrict: 'E',
            templateUrl: 'prod-review.html'
        };
    });

    app.directive('prodSpec', function() {
        return {
            restrict: 'A',
            templateUrl: 'prod-spec.html'
        };
    });

})();
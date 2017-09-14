(function() {
    var app = angular.module('storeStore', ['store-prod']);

    app.controller('GalleryController', function() {
        this.current = 0;
        this.setCurrent = function(el) {
            this.current = (el === undefined ? 0 : el); //el || 0; works too
        };
    });

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };

    });

    app.controller('StoreController', [ '$http', '$log', function($http, $log) {
        //this.products = ;
        var store = this;
        store.products = [];

        $http.get('/gemstore2/products.json').success(function (data) {
          /* body... */
          store.products = data;
        });
    }]);

})();
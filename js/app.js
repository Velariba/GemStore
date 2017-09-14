(function(){
	var gem = {name: 'Dodecahedron', price: 2.95,	description: '. . .' };
	
	var app = angular.module('storeStore', []);
	
	app.controller('StoreController', function () {
		this.product = gem;
	});

	
})();


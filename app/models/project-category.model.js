angular.module('blogApp').factory("ProjectCategory", ["$resource", function($resource) {
	return $resource('/v2/portfolio/category/:slug' , {}, {
		getTop: {
			url: '/v2/portfolio/categories/top',
			method: 'GET',
			cache: true
		},
	});
}]);
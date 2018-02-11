angular.module('blogApp').factory("PostCategory", ["$resource", function($resource) {
	return $resource('/v2/blog/category/:slug' , {}, {
		getTop: {
			url: '/v2/blog/categories/top',
			method: 'GET',
			cache: true
		},
	});
}]);
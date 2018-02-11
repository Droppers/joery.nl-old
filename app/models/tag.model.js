angular.module('blogApp').factory("Tag", ["$resource", function($resource) {
	return $resource('/api/tag/:slug' , {}, {
		getTop: {
			url: '/v2/blog/tags/top',
			method: 'GET',
			cache: true
		},
	});
}]);
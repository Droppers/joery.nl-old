angular.module('blogApp').factory("Post", ["$resource", function($resource) {
	return $resource('/v2/blog/posts/:id' , {}, {
		getAll: { // + category
			url: '/v2/blog/posts/:page',
			method: 'GET',
			params: {
				page: '@page'
			}
		},
		getRecent: {
			url: '/v2/blog/posts/recent',
			method: 'GET',
			cache: true
		},
		getBySlug: {
			url: '/v2/blog/posts/:category/:title',
			method: 'GET',
			params: {
				category: '@category',
				title: '@title'
			}
		},
	});
}]);
angular.module('blogApp').factory("Project", ["$resource", function($resource) {
	return $resource('/api/portfolio/project/:id' , {}, {
		getAll: {
			url: '/v2/portfolio/projects',
			method: 'GET'
		},
		getHighlighted: {
			url: '/v2/portfolio/projects/highlighted',
			method: 'GET',
			cache: true
		},
		getBySlug: {
			url: '/v2/portfolio/projects/:category/:title',
			method: 'GET',
			params: {
				category: '@category',
				title: '@title'
			}
		},
	});
}]);
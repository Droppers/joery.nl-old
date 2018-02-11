angular.module('blogApp').factory("WorkExperience", ["$resource", function($resource) {
	return $resource('/v2/about/experience/:slug' , {}, {
		getAll: {
			url: '/v2/about/experience/work',
			method: 'GET',
			cache: true
		},
	});
}]);
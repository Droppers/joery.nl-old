angular.module('blogApp').factory("EducationExperience", ["$resource", function($resource) {
	return $resource('/v2/about/experience/:slug' , {}, {
		getAll: {
			url: '/v2/about/experience/education',
			method: 'GET',
			cache: true
		},
	});
}]);
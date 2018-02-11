angular.module('blogApp').factory("Skill", ["$resource", function($resource) {
	return $resource('/api/skills/:id' , {}, {
		getSkills: {
			url: '/v2/about/skills',
			method: 'GET',
			cache: true
		},
	});
}]);
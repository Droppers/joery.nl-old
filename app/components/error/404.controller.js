angular.module('blogApp').controller('404Ctrl', ["$translate", "PageService", "BreadcrumbService", "WorkExperience", "EducationExperience", "Skill", function ($translate, PageService, BreadcrumbService, WorkExperience, EducationExperience, Skill) {
	BreadcrumbService.set([
		{ text: 'error.404.title', state: 'main.404' }
	]);
}]);

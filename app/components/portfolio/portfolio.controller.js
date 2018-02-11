angular.module('blogApp').controller('PortfolioCtrl', ["$stateParams", "Project", "BreadcrumbService", "PageService", function ($stateParams, Project, BreadcrumbService, PageService) {
	var vm = this;
	
	vm.categorySlug = null;
	
	vm.projects = [];
	
	vm.loadProjects = function() {
		var page = $stateParams.page;
		
		Project.getAll(function(result) {
			vm.projects = result.projects;
			
			PageService.setFinished();
		});
		
		BreadcrumbService.set([
			{ text: 'navigation.portfolio', state: 'main.portfolio' }
		]);
	};
	
	vm.loadFiltered = function() {
		var page = $stateParams.page;
		var filter = $stateParams.filter;
		var search = $stateParams.search;
		
		var params = {};
		
		if($stateParams.filter == 'category')
			vm.categorySlug = search;
		
		params.filter = filter;
		params.search = search;
	
		Project.getAll(params, function(result) {
			vm.projects = result.projects;
			
			if(result._metadata.filter && result._metadata.filter.resolved) {
				BreadcrumbService.set([
					{ text: 'navigation.portfolio', state: 'main.portfolio' },
					{ text: $stateParams.filter /* TODO: TRANSLATE THIS SHIT */ },
					{ text: result._metadata.filter.resolved }
				]);
			} else {
				BreadcrumbService.set([
					{ text: 'navigation.portfolio', state: 'main.portfolio' }
				]);
			}
			
			PageService.setFinished();
		});
	};
	
	// Initialize controller
	if($stateParams.filter) {
		vm.loadFiltered();
	} else {
		vm.loadProjects();
	}
}]);

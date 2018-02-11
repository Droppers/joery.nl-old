angular.module('blogApp').controller('PortfolioProjectCtrl', ["$stateParams", "$state", "Project", "BreadcrumbService", "PageService", function($stateParams, $state, Project, BreadcrumbService, PageService)  {
	var vm = this;
	
	vm.categorySlug = $stateParams.category;
	vm.titleSlug = $stateParams.title;
	
	vm.project = null;
	
	vm.loadProject = function() {
		Project.getBySlug({category: vm.categorySlug, title: vm.titleSlug }, function(result) {
			vm.project = result.project;
			
			BreadcrumbService.set([
				{ text: 'navigation.portfolio', state: 'main.portfolio' },
				{ text: vm.project.ProjectCategory.name, state: "main.portfolio.search({filter: 'category', search: '{0}'})".format(vm.project.ProjectCategory.slug) },
				{ text: vm.project.title }
			]);
			
			PageService.setFinished();
		}, function(err) {
			$state.transitionTo('main.404');
		});
	};
	
	// Initialize controller
	vm.loadProject();
}]);

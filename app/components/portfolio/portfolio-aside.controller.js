angular.module('blogApp').controller('PortfolioAsideCtrl', ["$stateParams", "ProjectCategory", function($stateParams, ProjectCategory)  {
	var vm = this;
	vm.topCategories = [];
	
	vm.categorySlug = $stateParams.category;
	
	ProjectCategory.getTop(function(result) {
		vm.topCategories = result.categories;
	});
}]);

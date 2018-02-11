angular.module('blogApp').controller('BlogAsideCtrl', ["$scope", "$state", "$stateParams", "PostCategory", "Tag", function($scope, $state, $stateParams, PostCategory, Tag)  {
	var vm = this;
	vm.topCategories = [];
	vm.topTags = [];
	vm.categorySlug = $stateParams.category;

	vm.filter = $stateParams.filter;
	vm.search = $stateParams.search;
	
	vm.doSearch = function(event) {
		var value = event.target.value.trim();

		if(value.length > 0)
			$state.go('main.blog.search', {filter: 'search', search: value});
	};

	PostCategory.getTop(function(result) {
		vm.topCategories = result.categories;
	});
	
	Tag.getTop(function(result) {
		vm.topTags = result.tags;
	});
}]);

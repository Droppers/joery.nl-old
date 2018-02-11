angular.module('blogApp').controller('BlogCtrl', ["$scope", "$stateParams", "$http", "Post", "BreadcrumbService", "PageService", "$translate", function($scope, $stateParams, $http, Post, BreadcrumbService, PageService, $translate)  {
	var vm = this;
	
	// Because they need to be translated!
	$scope.$watch(function () { 
			return $translate.use(); 
	}, vm.updateBreadcrumbs);

	var page = $stateParams.page;
	var filter = $stateParams.filter;
	var search = $stateParams.search;

	var filterResolved = null;

	vm.page = $stateParams.page;
	vm.categorySlug = null;
	
	vm.posts = [];
	
	vm.loadPosts = function() {
		var page = $stateParams.page;
		
		var params = {};
		
		if(page > 1)
			params.page = page;
		
		Post.getAll(params, function(result) {
			vm.posts = result.posts;
			
			PageService.setFinished();
		});
		
		BreadcrumbService.set([
			{ text: 'Blog', state: 'main.blog' }
		]);
	};
	
	vm.loadFiltered = function() {		
		if(filter == 'category')
			vm.categorySlug = search;
		
		var params = {};
		
		if(page > 1)
			params.page = page;
		
		params.filter = filter;
		params.search = search;
	
		Post.getAll(params, function(result) {
			vm.posts = result.posts;

			if(result._metadata.filter)
				filterResolved = result._metadata.filter.resolved;

			vm.updateBreadcrumbs();

			PageService.setFinished();
		});
	};

	vm.updateBreadcrumbs = function() {
		if(filterResolved || filter == 'search') {
			var displaySearch = filter == 'search' ? search : $translate.instant(filterResolved);

			BreadcrumbService.set([
				{ text: 'navigation.blog', state: 'main.blog' },
				{ text: 'filter.' + filter, state: "main.blog.search({filter: '{0}', search: ''})".format(filter, search) },
				{ text: displaySearch, state: "main.blog.search({filter: '{0}', search: '{1}'})".format(filter, search) }
			]);

			BreadcrumbService.setCurrent($translate.instant("filter." + filter) + ": " + displaySearch);
		} else {
			BreadcrumbService.set([
				{ text: 'navigation.blog' }
			]);
		}
	};
	
	// Initialize controller
	if($stateParams.filter) {
		vm.loadFiltered();
	} else {
		vm.loadPosts();
	}
}]);
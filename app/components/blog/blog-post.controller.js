angular.module('blogApp').controller('BlogPostCtrl', ["$rootScope", "$stateParams", "$state", "Post", "BreadcrumbService", "PageService", function($rootScope, $stateParams, $state, Post, BreadcrumbService, PageService)  {
	var vm = this;
	
	vm.categorySlug = $stateParams.category;
	vm.titleSlug = $stateParams.title;
	
	vm.post = null;
	
	vm.loadPost = function() {
		Post.getBySlug({category: vm.categorySlug, title: vm.titleSlug }, function(result) {
			vm.post = result.post;
			
			BreadcrumbService.set([
				{ text: 'navigation.blog', state: 'main.blog' },
				{ text: vm.post.PostCategory.name, state: "main.blog.search({filter: 'category', search: '{0}'})".format(vm.post.PostCategory.slug) },
				{ text: vm.post.title }
			]);

			$rootScope.$broadcast('title-image', { url: vm.post.bannerImage });
			
			PageService.setFinished();
		}, function(err) {
			$state.transitionTo('main.404');
		});
	};
	
	// Initialize controller
	vm.loadPost();
}]);

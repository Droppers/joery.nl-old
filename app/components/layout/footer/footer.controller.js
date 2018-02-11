angular.module('blogApp').controller('FooterCtrl', ["Post", "Tag", function(Post, Tag) {
	var vm = this;

	vm.currentDate = new Date();

	vm.recentPosts = [];
	vm.topTags = [];
	
	vm.menuItems = [
		{
			"active": true,
			"state": "main.home",
			"text": "navigation.home"
		}, {
			"active": true,
			"state": "main.about",
			"text": "navigation.about"
		}, {
			"active": true,
			"state": "main.blog",
			"text": "navigation.blog"
		}, {
			"active": true,
			"state": "main.portfolio",
			"text": "navigation.portfolio"
		},
	];
	
	Post.getRecent(function(result) {
		vm.recentPosts = result.posts;
	});
	
	Tag.getTop(function(result) {
		vm.topTags = result.tags;
	});
}]);
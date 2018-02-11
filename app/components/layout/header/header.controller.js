angular.module('blogApp').controller('HeaderCtrl', ["$scope", "$window", function($scope, $window) {
	var vm = this;

	vm.toggleNavigation = function() {
		var menu = document.querySelector('.main-header .main-nav');


		menu.setAttribute("aria-expanded", menu.getAttribute('aria-expanded') != 'true');
	};

	vm.scrollTop = function() {
		return $window.pageYOffset;
	};
	
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
}]);
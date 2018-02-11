angular.module('blogApp').controller('BreadcrumbCtrl', ["$rootScope", "$scope", "BreadcrumbService", function($rootScope, $scope, BreadcrumbService) {
	var vm = this;

	vm.items = [];
	vm.currentText = {};
	vm.hasImage = false;
	vm.backgroundImage = false;
	
	// Watch for updates in the breadcrumb
	$scope.$watch(BreadcrumbService.getCurrent, function (current) {
		var items = BreadcrumbService.getAll();
		
		items.unshift({ text: 'global.name', state: 'main.home', hide: false });

		vm.items = items;
		
		vm.currentText = current;
	});

	$rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
		vm.backgroundImage = false;
		vm.hasImage = false;
	});

	$scope.$on('title-image', function(event, args) {
		vm.hasImage = args.url ? true : false;

		vm.backgroundImage = args.url;
	});
}]);
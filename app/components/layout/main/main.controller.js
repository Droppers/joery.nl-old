angular.module('blogApp').controller('MainCtrl', ["$scope", "$state", "PageService", function($scope, $state, PageService) {
	var vm = this;
	vm.showContent = false;
	vm.showSpinner = false;
	
	$scope.$watch(PageService.showSpinner, function (showSpinner) {
		vm.showSpinner = showSpinner;
	});
	
	$scope.$watch(PageService.showContent, function (showContent) {
		vm.showContent = showContent;
	});
	
	// Watch states to dynamically change menu!
	$scope.$watch(function(){
		return $state.$current.name;
	}, function(newVal, oldVal){
		vm.currentState = $state.current;
    });
}]);
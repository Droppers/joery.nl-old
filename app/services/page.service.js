angular.module('blogApp').factory('PageService', ["$rootScope", "$translate", "$timeout", "MetaService", "BreadcrumbService", function($rootScope, $translate, $timeout, MetaService, BreadcrumbService) {
	var isLoading = false;
	var showSpinner = false;
	var start = +new Date();

	$rootScope.$watch(BreadcrumbService.getCurrent, function (current) {
		MetaService.setTitle($translate.instant(current));
	});
  
	return {
		setLoading: function() { 
			isLoading = true; 
			showSpinner = true;
			start = +new Date();
		},
		setFinished: function() {
			var diff = +new Date() - start;
			
			if(diff < 50) {
				$timeout(function() {
					showSpinner = false;
					
					$timeout(function() {
						isLoading = false;
						$rootScope.htmlReady();
					}, 30);
				}, 50 - diff);
			} else
				$timeout(function() {
					showSpinner = false;
					
					$timeout(function() {
						isLoading = false; 
						$rootScope.htmlReady();
					}, 30);
				}, 50);
		},
		
		showContent: function() { return isLoading; },
		showSpinner: function() { return showSpinner; }
	};
}]);
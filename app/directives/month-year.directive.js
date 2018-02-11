angular.module('blogApp').directive('monthYear', ["MonthYearService", "$translate", function(MonthYearService, $translate) {
  return {
    scope: {
      datetime: '@'
    },
    link: function(scope, elem) {
		scope.$watch(function () { 
			return $translate.use(); 
		}, function(newVal, oldVal, scope) {
			if(newVal && elem) {
				angular.element(elem).text(MonthYearService.format(scope.datetime, null));
			}
		});
		
		if(elem)
			angular.element(elem).text(MonthYearService.format(scope.datetime, null));
    }
  };
}]);
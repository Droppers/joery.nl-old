angular.module('blogApp').filter('monthYear', ["MonthYearService", function(MonthYearService) {
	return function(input) {
		return MonthYearService.format(input);
	};
}]);
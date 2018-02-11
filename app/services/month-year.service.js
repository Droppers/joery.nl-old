angular.module('blogApp').factory('MonthYearService', ["$translate", function($translate) {
	return {
		format: function(datetime) {
			var date = new Date(datetime);
			
			var month = $translate.instant('date.months.' + date.getMonth());
			
			return month + " " + date.getFullYear();
		}
	};
}]);
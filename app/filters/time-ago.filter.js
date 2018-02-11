angular.module('blogApp').filter('timeAgo', ["$translate", "TimeAgoService", function($translate, TimeAgoService) {
	return function(input, allowFuture) {
		return TimeAgoService.toWords(input, allowFuture);
	};
}]);
angular.module('blogApp').directive('timeAgo', ["TimeAgoService", "$translate", function(TimeAgoService, $translate) {
  return {
    scope: {
      datetime: '@'
    },
    link: function(scope, elem) {
		scope.$watch(function () { 
			return $translate.use(); 
		}, function(newVal, oldVal, scope) {
			if(newVal && elem) {
				angular.element(elem).text(TimeAgoService.toWords(scope.datetime, null));
			}
		});
		
		scope.$watch('datetime', function(newValue, oldValue) {
			if (newValue && newValue.length > 0 && elem) {
				angular.element(elem).text(TimeAgoService.toWords(scope.datetime, null));
			}
		}, true);
		
		if(elem)
			angular.element(elem).text(TimeAgoService.toWords(scope.datetime, null));
    }
  };
}]);
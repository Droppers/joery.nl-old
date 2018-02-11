angular.module('blogApp').factory('MetaService', ["$rootScope", function($rootScope) {
	var titleSuffix = '';

	$rootScope.$on('$stateChangeSuccess', function(event, state) {
		if(state.meta) {
			Object.keys(state.meta).map(function(metaKey, index) {
				$rootScope.Meta.tags[metaKey] = state.meta[metaKey];
			});
		}
	});

	return {
		initialize: function() { 
			$rootScope.Meta = { 
				tags: {}, 
				statusCode: 200,
				host: window.location.hostname
			}; 
		},
		setTitle: function(title) { 
			var suffix = '';

			if(titleSuffix.length > 0 && title.length > 0) {
				suffix = ' – ' + titleSuffix;
			} else if (title.length === 0) {
				suffix = titleSuffix;
			}

			$rootScope.Meta.title = title + suffix; 
		},
		setDescription: function(description) { $rootScope.Meta.tags.description = description; },
		setTag: function(tag, content) { $rootScope.Meta.tags[tag] = content; },
		setTitleSuffix: function(suffix) { titleSuffix = suffix; },
		setStatusCode: function(statusCode) { $rootScope.Meta.statusCode = statusCode; },
		removeTag: function(tag, content) { delete $rootScope.Meta.tags[tag]; }
	};
}]);
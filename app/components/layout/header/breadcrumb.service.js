angular.module('blogApp').factory('BreadcrumbService', function() {
	var _breadcrumbs = [];
	var _currentText = "";

	return {
		set: function(breadcrumbs) { 
			_breadcrumbs = breadcrumbs.map(function(breadcrumb) {
				if(!breadcrumb.state)
					breadcrumb.state = '-';
				
				return breadcrumb;
			}); 

			_currentText = _breadcrumbs[_breadcrumbs.length - 1].text;
		},
		setCurrent: function(currentText) { _currentText = currentText; },
		getAll: function() { return _breadcrumbs; },
		getCurrent: function() { return _currentText; },
	};
});
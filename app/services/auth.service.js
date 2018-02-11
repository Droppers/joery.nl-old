// Why does this service even exist?

angular.module('blogApp').factory('AuthService', function() {
	var currentUser = {
		mail: 'joery@droppers',
		firstname: 'Joery',
		lastname: 'Droppers'
	};

	return {
		login: function() { /* DO HTTP REQUEST TO API */ },
		logout: function() { currentUser = null; },
		isLoggedIn: function() { return currentUser !== null; },
		currentUser: function() { return currentUser; }
	};
});
angular.module('translations', []);
angular.module('templateCache', []);

var app = angular.module('blogApp', ['translations', 'templateCache', 'ng', 'ui.router', 'ngCookies', 'ngAnimate', 'ngResource', 'angular-loading-bar', 'angular-cache', 'pascalprecht.translate', 'hc.marked']);

app.config(["$animateProvider", "$stateProvider", "$translateProvider", "$urlRouterProvider", "$locationProvider", function($animateProvider, $stateProvider, $translateProvider, $urlRouterProvider, $locationProvider) {
	$animateProvider.classNameFilter(/angular-animate/);

	$urlRouterProvider.when('', '/');
	$locationProvider.html5Mode(true);
	
	$translateProvider.useLocalStorage();
	$translateProvider
		.preferredLanguage('nl')
		.fallbackLanguage('en');
	
	$stateProvider
	.state('public', {
		abstract: true,
		template: '<ui-view class=\"wrapper\"/>'
	})
	.state('main', {
		controllerAs: 'main',
		parent: 'public',
		controller: 'MainCtrl',
		templateUrl: 'components/layout/main/main.view.html'
	})
	.state('main.home', {
		url: '/{path:home|}',
		controller: 'HomeCtrl',
		controllerAs: 'vm',
		templateUrl: 'components/home/home.view.html',
		delayed: true,
		meta: { description: 'Ik ben een full-stack developer en werk onder andere in JavaScript, PHP, Python en C#' }
	})
	.state('main.about', {
		url: '/about',
		controller: 'AboutCtrl',
		controllerAs: 'vm',
		templateUrl: 'components/about/about.view.html',
		delayed: true,
		meta: { description: 'Ik ben een full-stack developer en werk onder andere in JavaScript, PHP, Python en C#' }
	})
	.state('main.portfolio', {
		url: '/portfolio',
		template: "<ui-view/>",
		redirectTo: 'main.portfolio.list'
	})
	.state('main.portfolio.list', {
		url: '/{category:[a-z][a-z\\-]*[a-z]}',
		params: { 
			category: {value: null, squash: true}
		},
		controller: 'PortfolioCtrl',
		controllerAs: 'vm',
		templateUrl: 'components/portfolio/portfolio.view.html',
		delayed: true,
		meta: { description: 'Op mijn portfolio vind je projecten die door mij gemaakt zijn.' }
	})
	.state('main.portfolio.search', {
		url: '/{filter:(?:category)}/:search',
		controller: 'PortfolioCtrl',
		controllerAs: 'vm',
		templateUrl: 'components/portfolio/portfolio.view.html',
		delayed: true,
		meta: { description: 'Op mijn portfolio vind je projecten die door mij gemaakt zijn.' }
	})
	.state('main.portfolio.project', {
		url: '/{category:[a-z][a-z\\-]*[a-z]}/{title:[a-z][a-z\\-]*[a-z]}',
		controller: 'PortfolioProjectCtrl',
		controllerAs: 'vm',
		templateUrl: 'components/portfolio/portfolio-project.view.html',
		delayed: true,
	})
	
	.state('main.blog', {
		url: '/blog',
		template: "<ui-view/>",
		redirectTo: 'main.blog.list',
	})
	.state('main.blog.list', {
		url: '/{category:[a-z][a-z\\-]*[a-z]}/{page:int}',
		params: { 
			category: {value: null, squash: true},
			page: {value: 1, squash: true}
		},
		controller: 'BlogCtrl',
		controllerAs: 'vm',
		templateUrl: 'components/blog/blog.view.html',
		delayed: true,
		meta: { description: 'Blog over dingen zoals bijvoorbeeld mijn projecten of stages. Soms plaats ik hier iets op.' }
	})
	.state('main.blog.search', {
		url: '/{filter:(?:search|category|tag)}/:search/{page:int}',
		params: {
			page: {value: 1, squash: true}
		},
		controller: 'BlogCtrl',
		controllerAs: 'vm',
		templateUrl: 'components/blog/blog.view.html',
		delayed: true,
		meta: { description: 'Blog over dingen zoals bijvoorbeeld mijn projecten of stages. Soms plaats ik hier iets op.' }
	})
	.state('main.blog.post', {
		url: '/{category:[a-z][a-z\\-]*[a-z]}/{title:[a-z][a-z\\-]*[a-z]}',
		controller: 'BlogPostCtrl',
		controllerAs: 'vm',
		templateUrl: 'components/blog/blog-post.view.html',
		delayed: true,
	})
	.state('main.default', {
		url: '*path',
		redirectTo: 'main.404'
	})
	.state('main.404', {
		controller: '404Ctrl',
		templateUrl: 'components/error/404.view.html',
		meta: { description: 'Deze pagina heb ik helaas niet voor jou kunnen vinden!' }
	});

	/*$stateProvider
	.state('private', {
		abstract: true,
		template: "<ui-view/>"
	})
	.state('private.admin', {
		url: '/admin',
		controllerAs: 'admin',
		controller: 'AdminCtrl',
		templateUrl: 'assets/app/views/admin/admin.html',
		redirectTo: 'private.admin.home',
	})
	.state('private.admin.dashboard', {
		url: '/home',
		controllerAs: 'subpage',
		controller: 'SubCtrl',
		templateUrl: 'assets/app/views/admin/dashboard.html',
	})
	.state('private.admin.product', {
		abstract: true,
		url: '/products',
		template: '<ui-view/>'
	})
	.state('private.admin.product.list', {
		url: '/',
		controllerAs: 'vm',
		controller: 'ProductListCtrl',
		templateUrl: 'product/_product.list.html'
	})
	.state('private.admin.product.edit', {
		url: '/edit/{id}',
		controllerAs: 'vm',
		controller: 'ProductEditCtrl',
		templateUrl: 'product/_product.edit.html'
	});*/
}]);

app.config(["$httpProvider", "cfpLoadingBarProvider", "markedProvider", function($httpProvider, cfpLoadingBarProvider, markedProvider) {  
	cfpLoadingBarProvider.includeSpinner = false;
	
	// base URL for production
	//if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1")
		$httpProvider.interceptors.push('apiUrlInterceptor');

	// Adds `cache: false` to HTTP requests when this option is not set, otherwise ALL requests are cached by CacheFactory
	$httpProvider.interceptors.push('cacheInterceptor');

	markedProvider.setOptions({
		gfm: true,
		tables: true,
		highlight: function (code, lang) {
			if (lang) {
				return hljs.highlight(lang, code, true).value;
			} else {
				return hljs.highlightAuto(code).value;
			}
		}
	});
}]);

app.factory('apiUrlInterceptor', function () {
    return {
		request: function (config) {
			if (config.url.indexOf('/v2') === 0) {
				config.url = 'https://api.joery.nl' + config.url;
			}

			return config;
		}
	};
});

app.run(["$rootScope", "$state", "$http", "$window", "$location", "$timeout", "CacheFactory", "Authorization", "PageService", "MetaService", function($rootScope, $state, $http, $window, $location, $timeout, CacheFactory, Authorization, PageService, MetaService) {
	$window.ga('create', 'UA-89999812-3', 'auto');
	
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		if (toState.redirectTo) {
			event.preventDefault();
			$state.go(toState.redirectTo, toParams, {location: 'replace'});
		} else
			PageService.setLoading();
	});
	
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		$window.scrollTo(0, 0);
		
		if(toState.name == 'main.404') {
			MetaService.setStatusCode(404);
		} else {
			MetaService.setStatusCode(200);
		}

		if(toState.description) {
			MetaService.setDescription(toState.description);
		}

		if(!toState.delayed || toState.delayed === false) {			
			PageService.setFinished();
		}
		
		$window.ga('send', 'pageview', $location.path());
	});
	
	$rootScope.$on('$stateChangeError', function(event) {
		$state.go('main.404');
	});
	
	$http.defaults.cache = CacheFactory('defaultCache', {
		maxAge: 15 * 60 * 1000,
		cacheFlushInterval: 60 * 60 * 1000,
		deleteOnExpire: 'aggressive',
		storageMode: 'localStorage'
	});

	// State needs to be accessible in view
	$rootScope.$state = $state;
	
	// PhantomJS for twitterbot etc.
	$rootScope.htmlReady = function() {
		$rootScope.$evalAsync(function() {
			setTimeout(function() {
				if (typeof window.callPhantom == 'function') { 
					window.callPhantom();
				}
			}, 0);
		});
	};

	MetaService.initialize();
	MetaService.setTitleSuffix('Joery Droppers');

	MetaService.setTag('author', 'Joery Droppers');
	MetaService.setTag('keywords', 'Joery Droppers, Joery, Droppers, app, software, website, portfolio, full stack developer, developer, full stack, web developer');
	MetaService.setTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');

	// Display useless but kinda cool message in browser console
	var styles = [
		'background: #3F51B5', 
		'color: white', 
		'display: block', 
		'padding: 8px 12px', 
		'border-radius: 4px', 
		'font-size: 18px', 
		'text-family: sans-serif'
	].join(';');

	console.log("");
	console.log('%c Joery.me: blog and portfolio, built with AngularJS.', styles);
	console.log("");
}]).service('Authorization', ['$state', function($state) {
	return null;
}])

/* TODO: MOVE TO SEPERATE FILE WHEN NEW DIRECTORY STRUCTURE IS DONE */
.factory('cacheInterceptor', function() {
  return {
    request: function(config) {
		if(!config.cache)
			config.cache = false;
		
		return config;
	}
  };
});


if (!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) { 
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	};
}
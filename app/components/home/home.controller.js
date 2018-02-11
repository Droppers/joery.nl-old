angular.module('blogApp').controller('HomeCtrl', ["$document", "$timeout", "$translate", "Project", "PageService", "BreadcrumbService", function ($document, $timeout, $translate, Project, PageService, BreadcrumbService) {
	var vm = this;
	
	vm.projects = [];
	
	vm.loadProjects = function() {
		Project.getHighlighted(function(result) {
			vm.projects = result.projects;
			
			PageService.setFinished();
		});
	};
	
	vm.changeLanguage = function (key) {
		$translate.use(key);
	};

	var arrowContainer = $('.arrow-container');
/*
	vm.positionArrow = function() {
		var width = $(document).width() - $('.logo-home').offset().left;

		if(arrowContainer.css('display') !== 'hidden')
			arrowContainer.width(width + 50);
	};

	vm.generateStripes = function() {
		var stripeContainer = $('.stripe-container');

		for(var i = 0; i <  5; i++) {
			var left = Math.round(Math.random() * 100);
			var width = Math.floor(Math.random()*(175-100+1)+100);
			stripeContainer.append('<div class="stripe" style="width: '+width+'px;left:'+left+'%;"></div>')
		}
	};*/
	
	BreadcrumbService.set([
		{ text: 'Home', state: 'main.home' }
	]);
	
	// Initialize controller
	vm.loadProjects();

	$(window).resize(vm.positionArrow);

	/*$document.ready(function(){
		vm.positionArrow();
		vm.generateStripes();
	});*/
}]);

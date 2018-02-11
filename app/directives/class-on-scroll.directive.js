angular.module('blogApp').directive("scrollClass", ["$window", function ($window) {
    return function(scope, elem, attrs) {
        var className = elem.attr('scroll-class');
        var hasClass = false;

        angular.element($window).bind("scroll", function() {
                if (this.pageYOffset >= 100 && !hasClass) {
                    hasClass = true;
                    elem.addClass(className);
                } else if (this.pageYOffset < 100 && hasClass) {
                    hasClass = false;
                    console.log('test');
                    elem.removeClass(className);
                }
        });
    };
}]);
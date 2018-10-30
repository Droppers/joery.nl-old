angular.module('blogApp').directive("scrollClass", ["$window", function ($window) {
    return function(scope, elem, attrs) {
        var className = elem.attr('scroll-class');
        var hasClass = false;

        angular.element($window).bind("scroll", function() {
                if (this.pageYOffset >= 50 && !hasClass) {
                    hasClass = true;
                    elem.addClass(className);
                } else if (this.pageYOffset < 50 && hasClass) {
                    hasClass = false;

                    elem.removeClass(className);
                }
        });
    };
}]);
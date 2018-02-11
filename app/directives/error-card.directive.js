angular.module('blogApp').directive('errorCard', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            icon: '@',
            message: '='
        },
        compile: function(element, attributes){  
            return {
                pre: function(scope, element, attributes, controller, transcludeFn){
                    scope.iconClass = 'alert-circle-outline';
                    console.log(scope.icon);
                    if(scope.icon == 'error')
                        scope.iconClass = 'alert';
                }
            };
        },
        template: '<div class="card">' +
                  '    <div class="error">' +
                  '        <div class="icon"><i ng-class="\'mdi mdi-\' + iconClass"></i></div>' +
                  '        <div class="message">{{message}}</div>' + 
                  '    </div>' + 
                  '</div>'
    };
});
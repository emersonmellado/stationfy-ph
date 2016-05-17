(function() {
    'use strict';
    angular.module('stationfy')
        .directive('loading', loading);

    function loading() {
        var directive = {
            restrict: 'E',
            replace: true,
            template: '<div class="loading">Hunting Down Posts...</div>',
            link: function(scope, element, attr) {
                scope.$watch('loading', function(val) {
                    if (val)
                        $(element).show();
                    else
                        $(element).hide();
                });
            }
        }
        return directive;
    }
})();

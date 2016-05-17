(function() {
    'use strict';
    angular.module('stationfy').directive('scrolly', scrolly);
//http://shabeebk.com/blog/lazy-scroll-infinite-scrolling-angularjs-plugin/
    function scrolly($document) {
        // var directive = {
        //     restrict: 'A',
        //     link: function(scope, element, attrs) {
        //         var raw = element[0];
        //         console.log('loading directive');

        //         element.bind('scroll', function() {
        //             console.log('in scroll');
        //             console.log(raw.scrollTop + raw.offsetHeight);
        //             console.log(raw.scrollHeight);
        //             if (raw.scrollTop + raw.offsetHeight > raw.scrollHeight) {
        //                 console.log("I am at the bottom");
        //                 scope.$apply(attrs.scrolly);
        //             }
        //         });
        //     }
        // };

        var directive = {
            restrict: "A",
            link: function(scope, element, attrs) {
                var visibleHeight = element.height();
                var threshold = 100;

                element.scroll(function() {
                    var scrollableHeight = element.prop('scrollHeight');
                    var hiddenContentHeight = scrollableHeight - visibleHeight;

                    if (hiddenContentHeight - element.scrollTop() <= threshold) {
                        // Scroll is almost at the bottom. Loading more rows
                        scope.$apply(attrs.whenscrollends);
                    }
                });
            }
        };
        return directive;
    }
})();

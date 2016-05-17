(function() {
    'use strict';
    angular.module('stationfy').controller('PostsController', PostsController)
    .filter('unsafe', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    });

    function PostsController($rootScope, $scope, PostsService, $q, $timeout, $log, $filter, $fancyModal) {
        var vm = this;
        var orderBy = $filter('orderBy');
        vm.popular = popular;
        activate();
        vm.open = function(idPost) {
            $rootScope.idPost = idPost;
            $fancyModal.open({
                templateUrl: 'app/posts/modal.html',
                controller: 'CommentsController as comment',
                scope: $scope
            });
        };

        function activate() {
            getPopular();
        }

        function popular() {
            getPopular();
        }
        vm.order = function(predicate) {
            vm.predicate = predicate;
            console.log(predicate);
            vm.reverse = (vm.predicate === predicate) ? !vm.reverse : false;
            vm.posts = orderBy(vm.posts, predicate, vm.reverse);
        };
        vm.order('votes_count', true);

        vm.newest = function() {
            vm.loading = true;
            vm.posts = {};
            PostsService.GetNewest().then(function(data) {
                vm.posts = data.posts;
                vm.loading = false;
                $log.debug('newest', vm.posts);
            }, function(error) {
                $log.debug('error:' + error);
            });
        }

        vm.showMore = function() {
            console.log('show more triggered');
        };

        function getPopular() {
            vm.loading = true;
            vm.posts = {};
            PostsService.GetAll().then(function(data) {
                vm.posts = data.posts;
                vm.loading = false;
                $log.debug('popular', vm.posts);
            }, function(error) {
                $log.debug('error:' + error);
            });
        }
    }
})();

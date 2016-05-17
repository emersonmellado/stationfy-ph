(function() {
    'use strict';
    angular.module('stationfy').controller('CommentsController', CommentsController);

    function CommentsController($rootScope, CommentsService, $log, $stateParams) {
        var vm = this;
        activate();

        function activate() {
            getComments();
        }

        function getComments() {
            vm.loading = true;
            vm.comments = {};
            vm.idPost = $rootScope.idPost;
            //$log.debug('idPost', vm.idPost);
            if (vm.idPost) {
                CommentsService.GetAll(vm.idPost).then(function(data) {
                    vm.comments = data.comments;
                    vm.loading = false;
                    $log.debug('comments', vm.comments);
                }, function(error) {
                    $log.debug('error:' + error);
                });
            }
        }
    }
})();

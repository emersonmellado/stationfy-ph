(function() {
    'use strict';
    angular.module('stationfy').controller('UserController', UserController);

    function UserController(UserService) {
        var vm = this;
        vm.popular = popular;
        activate();

        function activate() {
            getPopular();
        }

        function getPopular() {
            vm.loading = true;
            vm.posts = {};
            UserService.GetMe().then(function(data) {
                vm.posts = data.posts;
                vm.loading = false;
                $log.debug('popular', vm.posts);
            }, function(error) {
                $log.debug('error:' + error);
            });
        }
    }
})();

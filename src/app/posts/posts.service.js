(function() {
    'use strict';
    angular
        .module('stationfy')
        .service('PostsService', PostsService);

    function PostsService($http, $log, API) {
        var service = {};
        service.GetAll = GetAll;
        service.GetNewest = GetNewest;
        return service;

        function GetAll() {
            return $http.get(url()).then(handleSuccess, handleError('Error getting today´s posts'));
        }

        function GetNewest() {
            return $http.get(url() + '/all?search[category]=tech').then(handleSuccess, handleError('Error getting newest posts'));
        }


        function url() {
            return API + 'posts';
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function() {
                return {
                    success: false,
                    message: error
                };
            };
        }
    }   
})();

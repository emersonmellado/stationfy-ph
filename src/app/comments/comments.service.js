(function() {
    'use strict';
    angular
        .module('stationfy')
        .factory('CommentsService', CommentsService);

    function CommentsService($http, $log, API) {
        var service = {};
        service.GetAll = GetAll;
        return service;

        function GetAll(idPost) {
            return $http.get(url(idPost)).then(handleSuccess, handleError('Error getting comment for post' + idPost));
        }

        function url(idPost) {
            return API + 'posts/' + idPost + '/comments';
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

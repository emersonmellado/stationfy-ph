(function() {
    'use strict';
    angular.module('stationfy').config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('login', {
            url: '/login',
            views: {
                'vw-content': {
                    templateUrl: 'app/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'login'
                }
            }
        }).state('home', {
            url: '/home',
            views: {
                'vw-content': {
                    templateUrl: 'app/main/main.html',
                    controller: 'MainController',
                    controllerAs: 'main'
                }
            }
        }).state('comments', {
            url: '/comments/:idPost',
            views: {
                'vw-content': {
                    templateUrl: 'app/comments/comments.html',
                    controller: 'CommentsController',
                    controllerAs: 'comment'
                }
            }            
        }).state('posts', {
            url: '/posts',
            views: {
                'vw-content': {
                    templateUrl: 'app/posts/posts.html',
                    controller: 'PostsController',
                    controllerAs: 'posts'
                }
            }
        });
        $urlRouterProvider.otherwise('/posts');
    }
})();
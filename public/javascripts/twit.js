angular.module('twit', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'twit.html',
                controller: 'TwitController'
            })
            .state('login',{
                url: '/login',
                templateUrl: 'login.html',
                controller: 'LoginController',
                params: {reload: true}
            })
            .state('register',{
                url: '/register',
                templateUrl: 'register.html',
                controller: 'RegisterController'
            })
        $urlRouterProvider.otherwise('/login');
    }]);
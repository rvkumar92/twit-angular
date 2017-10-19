angular.module('twit', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'twit.html',
                controller: 'TwitController',
                authenticate: true,
                resolve: {
                    isAuthenticated: isAuthenticated
                }
            })
            .state('login',{
                url: '/login',
                templateUrl: 'login.html',
                controller: 'LoginController',
                params: {reload: true},
                authenticate: false
            })
            .state('register',{
                url: '/register',
                templateUrl: 'register.html',
                controller: 'RegisterController',
                authenticate: true
            })
        $urlRouterProvider.otherwise('/login');
        function isAuthenticated($state, AuthService){
            if(!AuthService.isAuthenticated()){
                $state.go('login');
            }
        }
        // function isAuthenticated($q, $state, AuthService){
        //     var defer = $q.defer();
        //     if(AuthService.isAuthenticated()){
        //         defer.resolve();
        //     }else{
        //         $state.go('login');
        //         defer.reject();
        //     }
        //     return defer.promise;
        // }
    }]);
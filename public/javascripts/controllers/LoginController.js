angular.module('twit').controller('LoginController',['$scope','$location','twitFactory','Session','AuthService',function($scope,$location,twitFactory,Session,AuthService){
    
    $scope.loginUser = function(){
            console.log('called');
            twitFactory.loginUser($scope.user).then(function(response){
            if(response.success){
                Session.data.username = $scope.user.username;
                Session.data.user = response._user;
                console.log(AuthService);
                AuthService.setAuthenticate();
                console.log(AuthService);
                console.log(AuthService.isAuthenticated());
                $location.path('/');
            }else{
                console.log('Login denied');
                $location.path('/login');
            }
        });
    }
}]);
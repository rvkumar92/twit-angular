angular.module('twit').controller('LoginController',['$scope','$location','twitFactory','Session',function($scope,$location,twitFactory,Session){
    
    $scope.loginUser = function(){
            twitFactory.loginUser($scope.user).then(function(response){
            if(response.success){
                Session.data.username = $scope.user.username;
                Session.data.user = response._user;
                $location.path('/');
            }else{
                console.log('Login denied');
                $location.path('/login');
            }
        });
    }
    
}]);

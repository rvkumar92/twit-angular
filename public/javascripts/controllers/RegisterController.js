angular.module('twit').controller('RegisterController',['$scope','$location','twitFactory',function($scope,$location,twitFactory){
    $scope.register = function(){
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.update($scope.user.password);
        var password = shaObj.getHash("HEX");
        $scope.user.password = password;
        twitFactory.registerUser($scope.user).then(function(response){
            if(response.success){
                $location.path('/login');
            }else{
                console.log(response.error);
                console.log(response);
            }
        });
    }
}]);
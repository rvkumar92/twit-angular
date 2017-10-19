angular.module('twit').controller('TwitController',['$scope','twitFactory','Session',function($scope,twitFactory,Session){
    $scope.newTweet = undefined;
    $scope.tweets = [];
    $scope.session = Session;
    $scope.isFollow = 'Follow';
    $scope.isFollowAction = $scope.followUser;
    if($scope.session){
        $scope.currentUser = $scope.session.data.user;
        console.log($scope.currentUser);
    }
    twitFactory.getAllTweet().then(function(response){
        if(response.success){
            $scope.tweets = response.tweets;
        }
    });
    twitFactory.getPeopleToFollow().then(function(response){
        if(response.success){
            $scope.users = response.users;
        }
    })
    $scope.postTweet = function(newValue){
        var newTweet = {text: newValue};
        var response = twitFactory.postTweet(newTweet);
        $scope.newTweet = '';
        twitFactory.getAllTweet().then(function(response){
            $scope.tweets = response;
        });
    };
    $scope.followUser = function(people){
        var response = twitFactory.followUser($scope.currentUser, people);
        twitFactory.getByUsername($scope.session.data.user.username).then(function(response){
            $scope.currentUser = response;
        });
        
    },
    $scope.unfollowUser = function(people){
        var response = twitFactory.unfollowUser($scope.currentUser, people);
        twitFactory.getByUsername($scope.session.data.user.username).then(function(response){
            $scope.currentUser = response;
        })
    },
    //to return true if the user follows so unfollow button to be enabled
    $scope.isFollowing = function(people){
        var currentUser = $scope.currentUser;
        if(currentUser.followers.length > 0){
            return (currentUser.followers.indexOf(people.username) > -1)
        }
        return false;
    },
    //to return true if the user in not followed so follow button to be enabled
    $scope.isUnfollow = function(people){
        var currentUser = $scope.currentUser;
         if(currentUser.followers.length > 0){
             return (currentUser.followers.indexOf(people.username) == -1);
         }
        return true;
    }

}]);

angular.module('twit').run(function($rootScope, $state, AuthService){
        $rootScope.$on("$stateChangeStart", function(event, toState, fromState, fromParams){
            console.log("^^^^^^^^^^");
            console.log(toState.authenticate);
            console.log(AuthService.isAuthenticated());
            if(toState.authenticate && !AuthService.isAuthenticated()){
                $state.transitionTo("login");
                event.preventDefault();
            }
        })
    });
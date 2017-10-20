angular.module('twit').controller('TwitController',['$scope','twitFactory','Session',function($scope,twitFactory,Session){
    $scope.newTweet = undefined;
    $scope.tweets = [];
    $scope.session = Session;
    $scope.isFollow = 'Follow';
    $scope.isFollowAction = $scope.followUser;
    if($scope.session){
        $scope.currentUser = $scope.session.data.user;
    }
    twitFactory.getAllTweet().then(function(response){
        if(response.success){
            $scope.tweets = response.tweets;
            console.log(response)
        }
    });
    twitFactory.getPeopleToFollow().then(function(response){
        if(response.success){
            $scope.users = response.users;
        }
    })
    $scope.postTweet = function(newValue){
        var tweet = {};
        tweet.author = $scope.currentUser.name;
        tweet.username = $scope.currentUser.username;
        tweet.tweet = newValue;
        twitFactory.postTweet(tweet).then(function(response){
            if(response.status == 200){
                twitFactory.getAllTweet().then(function(response){
                    console.log(response);
                    $scope.tweets = response.tweets;
                    console.log($scope.tweets);
                });
            }
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
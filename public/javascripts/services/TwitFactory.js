angular.module('twit').factory('twitFactory', function($http){
    return{
        handleSuccess: function(res){
            return res.data;
        },
        handleError: function(error){
            return {success: false, message: error}
        },
        postTweet: function(newTweet){
            console.log('in service', newTweet);
            return $http.post('/posttweet', newTweet).then(function(result){
                console.log(result);
            });
        },
        getAllTweet: function(){
            return $http.get('/gettweets').then(function(result){
                if(result.status == 200){
                    return result.data;
                }
            });
        },
        registerUser: function(user){
            return $http.post('/register', user).then(this.handleSuccess, this.handleError('Error creating user'));
        },
        loginUser: function(user){
            return $http.post('/login', user).then(this.handleSuccess, this.handleError('Invalid username or password'));
        },
        getPeopleToFollow: function(){
            return $http.get('/tofollow').then(this.handleSuccess, this.handleError('Unable to load this section'));
        },
        followUser: function(currentUser, people){
            return $http.post('/followuser',{currentUser, people}).then(this.handleSuccess, this.handleError('Unable to follow user'));
        },
        unfollowUser: function(currentUser, people){
            return $http.post('/unfollowuser', {currentUser, people}).then(this.handleSuccess, this.handleError('Unable to perform unfollow action'));
        },
        getByUsername: function(username){
            return $http.get('/getbyusername/' + username).then(this.handleSuccess, this.handleError('Unable to get user'));
        }
    }
});

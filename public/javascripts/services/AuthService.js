angular.module('twit').factory('AuthService', function($http){
    return {
        authenticate: false,
        isAuthenticated: function(){
            return this.authenticate;
        },
        setAuthenticate: function(){
            this.authenticate = !this.authenticate
        }
    }
});
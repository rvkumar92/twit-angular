angular.module('twit').factory('Session', function($http){
    var Session = {
        data: {},
        saveSession: function(data){
            this.data = data;
        },
        updateSession: function(){
            $http.get('session.json').then(function(res){
                return Session.data = res.data;
            })
        }
    };
    return Session;
});
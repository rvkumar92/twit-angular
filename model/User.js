//User sample model
var User  = (function(){
    var users = [
        {
            id: 1,
            name: 'Vijay',
            username: 'rvkumar92',
            password: 'born2win',
            email: 'ind.vijayworldz@gmail.com',
            followers: [],
            following: [],
            tweet_count: 0,
            following_count: 0,
            followers_count: 0,
            tweets: [],
            created_on: new Date()    
        },
        {
            id: 2,
            name: 'Goku',
            username: 'kakarott',
            password: 'born2win',
            email: 'goku@gmail.com',
            followers: [],
            following: [],
            tweet_count: 0,
            following_count: 0,
            followers_count: 0,
            tweets: [],
            created_on: new Date()    
        },
        {
            id: 3,
            name: 'Naruto',
            username: 'uzumaki',
            password: 'born2win',
            email: 'naruto.uzumaki@gmail.com',
            followers: [],
            following: [],
            tweet_count: 0,
            following_count: 0,
            followers_count: 0,
            tweets: [],
            created_on: new Date()    
        }
    ];
    getAllUsers = function(){
        var _users = users;
        return _users;
    }
    followUser = function(request){
        let currentUser = request.currentUser;
        let people = request.people;
        
        currentUser.followers.push(people.username);
        currentUser.followers_count = currentUser.followers.length;

        people.following.push(currentUser.username);
        people.following_count = people.following.length;

        users.map((single, index) => {
            if(single.username == currentUser.username){
                users[index] = currentUser;
            }
            if(single.username == people.username){
                users[index] = people;
            }
        });

        return true;
    },
    unfollowUser = function(request){
        let currentUser = request.currentUser;
        let people = request.people;

        var currentItem = currentUser.followers.indexOf(people.username);
        var peopleItem = people.followers.indexOf(currentUser.username);

        currentUser.followers.splice(currentItem, 1);
        currentUser.followers_count = currentUser.followers.length;
        people.followers.indexOf(peopleItem, 1);
        people.following_count = people.following.length;

        users.map((single, index) => {
            if(single.username == currentUser.username){
                users[index] = currentUser;
            }
            if(single.username == people.username){
                users[index] = people;
            }
        });
        return true;
    },
    checkDuplicateUser = function(username){
        for(var user of users){
            if(username == user.username){
                return false;
            }
        }
        return true;    
    },
    getByUsername = function(username){
        for(var user of users){
            if(username == user.username){
                return user;
            }
        }
        return null;
    },
    createUser = function(user){
        if(!checkDuplicateUser(user.username)){
            return({success: false, message: 'Username' + user.username + 'is taken'});
        }else{
            var newUser = new NewUser(user);
            users.push(newUser);
            return({success: true, message: 'User has been created!!'});
        }
    },
    getUsersCount = function(){
        return users.length;
    },
    login = function(user){
        var _user = getByUsername(user.username);
        if(_user == null){
            return {success: false, message: 'Invalid username or password'}
        }else{
            if(_user.password == user.password){
                return {success: true, message: 'Login successful',_user};
            }
        }
    }
    return {
        getAllUsers : getAllUsers,
        followUser : followUser,
        unfollowUser: unfollowUser,
        createUser: createUser,
        getUsersCount: getUsersCount,
        login: login,
        getByUsername: getByUsername
    }
})();

module.exports = User;

function NewUser(user){
    this.id = getUsersCount() + 1,
    this.name = user.name,
    this.username = user.username,
    this.password = user.password,
    this.email = user.email,
    this.followers = [],
    this.following = [],
    this.tweet_count = 0,
    this.following_count = 0,
    this.followers_count = 0,
    this.tweets = [],
    this.created_on = new Date()
}

var User = {
    id: '',
    name: '',
    username: '',
    password: '',
    followers: [],
    following: [],
    tweet_count: 0,
    following_count: 0,
    followers_count: 0,
    tweets: [],
    created_on: new Date()
}

var Tweet = {
    id: '',
    tweet_count: 0,
    tweets: [],
    user: {},
    tweeted_at: new Date()
}
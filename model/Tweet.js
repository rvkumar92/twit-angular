var Tweet = (function(){
    var tweets = [
        {id: 1, tweet: 'First', created: new Date(),author: 'Vijay', username: 'rvkumar92'},
        {id: 2, tweet: 'Two', created: new Date(), author: 'Vijay', username: 'rvkumar92'},
        {id: 3, tweet: 'Three', created: new Date(), author: 'Vijay', username: 'rvkumar92'},
        {id: 4, tweet: 'Four', created: new Date(), author: 'Vijay', username: 'rvkumar92'},
        {id: 5, tweet: 'Five', created: new Date(), author: 'Vijay', username: 'rvkumar92'},
        {id: 6, tweet: 'Six', created: new Date(), author: 'Maria', username: 'xmariaanu'},
        {id: 7, tweet: 'Seven', created: new Date(), author: 'Maria', username: 'xmariaanu'}
    ];
    saveTweet = function saveTweet(tweet){
        tweets.push(tweet);
    };
    getLength = function getLength(){
        return tweets.length;
    };
    getAllTweets = function getAllTweets(){
        var _tweets = tweets;
        return _tweets;
    }
    return {
        saveTweet: saveTweet,
        getLength: getLength,
        getAllTweets: getAllTweets
    }
})();

module.exports = Tweet;
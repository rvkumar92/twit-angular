var tweetbox = $('#tweetbox');

tweetbox.on('change', function(event){
    console.log(event);
});

function loginUser(event){
    event.preventDefault();
    // var username = $('input[name="username"]').val()
    // var password = $('input[name="password"]').val()
    // console.log(username);
    // console.log(password);
    $.ajax({
        url: '/login',
        type: 'post',
        data:{"username": $('input[name="username"]').val(), "password": $('input[name="password"]').val()},
        success: function(data, status, xhr){
            console.log(status);
        },
        error: function(xhr, status, error){
            console.log(error);
        }
    });
    // $.post("/login", {username: username, password: password}, function(data,status){
    //     console.log(status);
    // });
}
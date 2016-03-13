$(document).ready(function() {
    var socket = io();
    socket.on('updateChat', function(username, message) {
        $('.chatWindow').append("<p> username: " + username +
            "Message: " + message + "</p>" );
        console.log('I have recieved the update event');
    });

    function getMessageValue(){
        return $('.messageTextInput').val();
    }

    $('.sendButton').click(function() {
        socket.emit('sendMessage', getMessageValue());
    });


    $('.messageTextInput').keyup(function(event){
        if(event.keyCode == 13){
            $('.sendButton').click();
        }
    });
});

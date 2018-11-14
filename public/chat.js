$(function () {

    function render(html) {
        $('#result').html("");
        $('#result').html(html);
    }

    const socket = io();

    const renderChat = () => {
        $.get('/message')
            .then(function (data) {
                let html = '';
                data.forEach(e => html += `<p> ${e.message} </p>`)
                render(html);
            });
    }
    renderChat();

    const sendMessage = function (event) {
        event.preventDefault();
        const message = $('#message').val();
        console.log(message);
        $.post("/message", { message: message });
        socket.emit('new-message', { message: message, user1: name, user2: user2 });
    }

    socket.on('emit-message', function (data) {
        console.log(data);
        $('#result').append(data.message);
    })

    $('#send-msg').on('click', sendMessage);



    /*--------------- Resigter name -------------*/


    let name;
    let user2;

    const sendName = function (event) {
        event.preventDefault();
        name = $("#name").val();
        console.log(name);
        socket.emit("new-name", { name: name });
    }

    socket.on('emit-users', function (data) {
        console.log(name);
        if (name) {
            const $select = $('<select>');
            $select.append('<option>Select User</option>')
            console.log(data);
            data.forEach(element => $select.append(`<option>${element}</option>`));
            $('#select-container').empty();
            console.log('#select-container', $select);
            $('#select-container').append($select);
        }
    });

    $("#send-name").on("click", sendName);


    /*-------------Start Chat---------*/


    const startChat = function (event) {
        event.preventDefault();
        user2 = $('select').find(':selected').text();
    }

    $('#select-container').on('change', 'select', startChat);
})
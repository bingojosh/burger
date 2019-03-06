$(function() {
    
    $('.devour').on('click', function(event) {
        const id = $(this).data('id');

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: 'devoured: true'
        }).then(function() {
            location.reload();
        })
    })

    $('.create-form').on('submit', function(event) {
        event.preventDefault();

        const name = $('#burg').val().trim();
        console.log(name)

        $.ajax('/api/burgers', {
            type: 'POST',
            data: {name: $('#burg').val().trim()}
        }).then(function() {
            location.reload();
        })

    })
})
$(function(){
    //===INPUT FORM=============================================
    $('.create-form').on('submit', function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $('#newburger').val().trim(),
            devoured: 0
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function(){
            console.log('A new burger added');
            location.reload();
        });
    });

//===CHOOSING THE BURGER BUTTON============================
    $('.eatburger').on('click', function(event){
        event.preventDefault();

        var id = $(this).data('id');
        var devouredState = {
            devoured: 1
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devouredState
        }).then(function(){
            console.log('Burger devoured');
            location.reload()
        });
    });

//===DELETING THE BURGER BUTTON==============================
    $('.trashburger').on('click', function(event){
        event.preventDefault();
    
        var id = $(this).data('id');
    
        $.ajax({
            type: 'DELETE',
            url:'/api/burgers/' + id})
            .then(location.reload());
        });
});

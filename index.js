$(function() {
    $('#js-shopping-list-form').on('submit', function(event) {
        event.preventDefault();

        const userShoppingItem = $('#shopping-list-entry').val();
        $('.shopping-list').on('click').append('<li><span class="shopping-item">' + userShoppingItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    
        $('#shopping-list-entry').val('');

    })

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

});


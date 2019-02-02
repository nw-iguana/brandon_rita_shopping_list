
$(function() {
    $('#js-shopping-list-form').on('submit', function(event) {
        event.preventDefault();
        
        const userShoppingItem = $('#shopping-list-entry').val();
        $('.shopping-list').on('click').append('<li><span class="shopping-item">' + userShoppingItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
        console.log('userShoppingItem', userShoppingItem);
        $('#shopping-list-entry').val('');

    })
    
    $(document).on('click', '.shopping-item-toggle', function(event) {
        // let checkedItem = $(this).find('shopping-item').text();
        console.log(this, $(this));

    })
      

});

// '<li><span class="shopping-item">' + userShoppingItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
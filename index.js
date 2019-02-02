console.log('js is loading');
$(function() {
    $('#js-shopping-list-form').on('submit', function(event) {
      console.log('check');
        event.preventDefault();
        console.log('clicked', $(this) );
        // const userShoppingItem = $(this).find('#shopping-list-entry');
        console.log('userShoppingItem', userShoppingItem);
        // function addShoppingItem() {
        //
        // }

    })

});

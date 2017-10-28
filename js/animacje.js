$(function() {
    'use strict';
    
//    $('#first').hide(1000).show(1000);
    
//    $('#first').fadeOut(1000).fadeIn(1000);
    
//    $('#first').slideUp(2000).slideDown(2000);
    
    function callbackZwrotny() {
        console.log('Zakończona pierwsza animacja. Uwaga! Startuje druga!');
        $('#first').animate({'font-size': '1em', 'margin-left': '0px'}, 3000);
    
    };
//    callbackZwrotny();
    
    $('#first').animate({'font-size': '4em', 'margin-left': '250px',}, 3000, callbackZwrotny);
});

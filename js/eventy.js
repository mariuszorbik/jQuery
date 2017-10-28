$(function() {
    'use strict';
    
    $('#first').mouseover(function() {
        $('#second').toggle(function() {
            $(this).css({'background-color': 'yellow', 'font-size': '40px'});
        });
    });
//    
//    $('#first').on( {
//        'mouseover' : function() {
//            $(this).css('background-color', 'yellow');
//        },
//        'mouseleave' : function() {
//            $(this).css('background-color', 'green');
//        },
//        'click' : function() {
//            console.log('click click');
//        }
//    });
    
    
    
    
    
});
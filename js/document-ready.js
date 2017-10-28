'use strict'

console.log('Krystian');


//$(document).ready(function() {
//    console.log('strona załadowana');
// });

$(function() {
    console.log('wersja uproszczona document.ready');
    $('#first').css({'color': 'red'}).hide('slow').show(3000);
    
    var paragraf1 = $('#first');
    
    console.log(paragraf1);
});


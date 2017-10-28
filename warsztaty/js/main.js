$(function() {
    'use strict';
    console.log('test');
    
    var slideShow = $('.slide-show');
    
    var slideCount = $('.single-slide').length;
//    console.log(slideCount);
    
    var slideWidth = 100/slideCount;
    
    var slideIndex = 0;
    
    slideShow.css('width', slideCount + '00%');
    
    slideShow.find('.single-slide').each(function(index) {
        console.log($(this));
        $(this).css({'width' : slideWidth + '%', 'margin-left' : 'index * slideWidth' + '%'});
        });
    
    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
            return;
        }
        
        var slideCaption = slideShow.find('.slide-caption').eq(newSlideIndex); 
        
        var marginLeft = (newSlideIndex * (-100)) + '%';
        
        slideCaption.hide();
        
        slideShow.animate({'margin-left' : marginLeft}, 1000, function(){
            slideIndex = newSlideIndex;
            slideCaption.fadeIn();
        });
    }
    
    $('.prev-slide').click(function() {
        slide(slideIndex - 1);
    });
    
    $('.next-slide').click(function() {
        slide(slideIndex + 1);
        });
    
    
})
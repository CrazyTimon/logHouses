$(function() {
     $('.slider-aboutus').bjqs({
        'width' : 350,
        'height' : 260,
        animspeed : 3000,
        automatic : true,
        showmarkers : false,
        nexttext : '&#8594;',
        prevtext : '&#8592;'  
    });

    $('.slider-technology1').bjqs({
        'width' : 230,
        'height' : 170,
        animspeed : 3000,
        automatic : true,
        showmarkers : false,
        nexttext : '&#8594;',
        prevtext : '&#8592;'  
    });

    $('.slider-technology2').bjqs({
        'width' : 230,
        'height' : 170,
        animspeed : 3000,
        automatic : true,
        showmarkers : false,
        nexttext : '&#8594;',
        prevtext : '&#8592;'  
    });

    $('.slider-technology3').bjqs({
        'width' : 230,
        'height' : 170,
        animspeed : 3000,
        automatic : true,
        showmarkers : false,
        nexttext : '&#8594;',
        prevtext : '&#8592;'  
    });

    $('.slider-projects').bjqs({
        'width' : 637,
        'height' : 448,
        animspeed : 3000,
        automatic : true,
        showmarkers : false,
        nexttext : '&#8594;',
        prevtext : '&#8592;'  
    });

    $('.slider-cost').bjqs({
        'width' : 550,
        'height' : 440,
        animspeed : 3000,
        automatic : true,
        showmarkers : false,
        nexttext : '&#8594;',
        prevtext : '&#8592;'  
    });

    $('.slider-forging').bjqs({
        'width' : 640,
        'height' : 450,
        animspeed : 3000,
        automatic : true,
        showmarkers : false,
        nexttext : '&#8594;',
        prevtext : '&#8592;'  
    });

    $('.bjqs-slide, .js-maximizeimg').on('click', function(e){
        var $el = $(e.currentTarget),
            newSrc = $el.find('img').attr('src') || $el.attr('src');
        $('.js-modalimg img').attr('src', newSrc)
        $('.js-modalimg').modal();
    });

    $('.js-modal-close').on('click', function(){
        $('.modal').modal('hide');
    })

    $('.js-modalimg').on('shown.bs.modal', function (e) {
            var $el = $(e.currentTarget);
                $img = $el.find('.modal__container');

            $img.find('img').on('load', function(){
                $img.css({
                    'margin-top': ($el.height()-$(this).height())/2 + 'px',
                    'margin-left': ($el.width()-$(this).width())/2 + 'px'
                });
                $(this).css('margin-bottom', '-4px');
            })
        });

    $('.js-menu a').on('click', function(e){
        var $el = $(e.currentTarget),
            id = $el.attr('href');
        
        if(id === '#index'){
            $("html, body").animate({ scrollTop: 0 }, 1000);
        } else {
            $("html, body").animate({ scrollTop: $(id).offset().top-100 }, 1000);
        }
            
        e.preventDefault;
        return false;
    });

    $('.js-modal').on('click', function(e){
        var $el = $(e.currentTarget);
            data = $el.data();
        e.preventDefault();
        e.stopPropagation();
        $('.js-modalaction .js-modalaction-header').html(data.header);
        $('.js-modalaction .js-modalaction-solution').html(data.solution);
        $('.js-modalaction .js-modalaction-button').html(data.button);
        $('.js-modalaction').modal(); 
    });

    $('.js-modalaction-button').on('click', function(e){
        e.preventDefault();
        /*тут можешь отправлять аяксом что хочешь*/
        $(e.currentTarget).parents('.modal').modal('hide')
    });
});
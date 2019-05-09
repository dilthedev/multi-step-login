var current_fs, next_fs, previous_fs;
var left, opacity, scale;

$(".next").click(function(){
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //active next step on progressbar
    $("#progressbar li").eq($('fieldset').index(next_fs)).addClass('active');
    //show the next field
    next_fs.show(); 
    //hide the current fields
    current_fs.animate({opacity:0},{
        step: function(now,mx ){
           scale = 1 - (1 - now )*0.2;
           left = (now*50)+ "%";
           opacity = 1 - now;
           current_fs.css({'transform':'scale('+scale+')'});
           next_fs.css({'left':left,'opacity':opacity});
        },
        duration: 800,
        complete: function(){
            current_fs.hide();
        },

        easing: 'easeInOutBack'
    });
});

$(".previous").click(function(){

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //active next step on progressbar
    $('#progressbar li').eq($('fieldset').index(current_fs)).removeClass('active');
    //show the next field
    previous_fs.show(); 
    //hide the current fields
    current_fs.animate({opacity:0},{
        step: function(now,mx ){
           scale = 1.2 - (1 - now )*0.2;
           left = ((now)*50)+ "%";
           opacity = 1 - now;
            current_fs.css({'left':left});
           previous_fs.css({'transform':'scale('+scale+')','opacity':opacity});
        },
        duration: 800,
        complete: function(){
            current_fs.hide();
        },

        easing: 'easeInOutBack'
    });

});
















$(function(){
    var backToTop = $('.backToTop');
    var html_body = $('html,body');
    
    
        $(window).scroll(function () { 
            var scrolling = $(this).scrollTop();
            if(scrolling > 200){
                backToTop.fadeIn();
            }else{
                backToTop.fadeOut();
            }
            if(scrolling >200){
                 $('.navbar').addClass('fixd-nav');
             }else{
                 $('.navbar').removeClass('fixd-nav');
             }
        });
    
    
        backToTop.on('click',function(){
            html_body.animate({
                scrollTop:0,
            },1500);
        });
    
        $('.navbar .navbar-nav .nav-item a').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    html_body.animate({
                        scrollTop: target.offset().top - 0
                    }, 1500,);
                    return false;
                }
            }
        }); 
        
        // counter 
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        }); 

        // timer 
        $('.time_conter').countdown({
            date: '05/25/2022 23:59:59'
            
        });

    });

        


  // active class in navbar 
 $(function(){
    $('.navbar .nav-item .nav-link').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        });
 });

    // // preloder 
    document.body.onload = function(){ /*The onload event occurs when an object has been loaded*/
        setTimeout(function(){
          var preloader = document.getElementById('page-preloader');
          {
            preloader.classList.add('done');
          }
        }, 1000);
      }
$(document).ready(function() {

    $(document).click(function() {
        $(".js-window-wrap ").hide();
        $(".js-overlay").hide();
        $("body").removeClass("is-window-open");
    });
    var
        window_wrap = $(".js-window-wrap");
        overlay = $(".js-overlay");
        window_close = $(".js-window-close");
        popup_key = $(".js-popup-key");
        body = $("body");
    window_wrap.find('.window').click(function(event){
        event.stopPropagation();
    });
    window_close.on("click", function(){
        $(this).parents(".js-window-wrap").hide();
        overlay.hide();
        body.removeClass("is-window-open");
    });
    popup_key.on("click", function(){
        var popup_url = $(this).attr("data-popup");
        $("."+popup_url).show();
        body.addClass("is-window-open");
        overlay.show();
        return false;
    });
    if ($(window).width() > 960) {
        $(".js-key-feedback").on("click", function(){
            $('html, body').animate({
                scrollTop: 200
            }, 500);
        });
    }
    
    function sticky() {
        var header = $(".js-sticky-header");
        var try_el = $(".js-sticky-try");
        if ($(window).scrollTop() > header.offset().top) {
            header.addClass("is-fixed");
        }
        if (try_el.length > 0){
            var pos = $(window).scrollTop() + header.outerHeight();
            if ( pos >= try_el.offset().top) {
                try_el.addClass("is-fixed");
            }
            else {
                try_el.removeClass("is-fixed");
            }
        }
        if ($(window).scrollTop() == 0){
            header.removeClass("is-fixed");
            try_el.removeClass("is-fixed");
        }
    }
    sticky();
    $(window).scroll(function(){
        sticky();
    });
    $(window).resize(function(){
        sidebar_mobile();
    });
    var sidebar_overlay = $(".js-sidebar-overlay");
    $(".js-hide-sidebar").on("click", function(){
        body.addClass("is-no-sidebar");
    });
    $(".js-show-sidebar").on("click", function(){
        body.removeClass("is-no-sidebar");
        body.removeClass("has-sidebar");
        sidebar_overlay.fadeOut();
    });
    function sidebar_mobile() {
        if ($(window).width() <= 640) {
            $(".js-show-sidebar").on("click", function(){
                body.addClass("has-sidebar");
                sidebar_overlay.fadeIn();
            });
            $(".js-hide-sidebar").on("click", function(){
                body.removeClass("has-sidebar");
                sidebar_overlay.fadeOut();
            });
            
            sidebar_overlay.on("click", function(){
                body.removeClass("has-sidebar");
                sidebar_overlay.fadeOut();
            });
        }
    }
    sidebar_mobile();

    function accordion() {
        $(".js-accord-key").click(function(){
            if ($(this).hasClass("is-active")) {
                $(this).removeClass("is-active");
                $(this).parent().find(".js-accord-list").slideUp("fast");
            }
            else {
                $(".js-accord-key").removeClass("is-active");
                $(this).addClass("is-active");
                $(".js-accord-list").slideUp("fast");
                $(this).parent().find(".js-accord-list").slideDown("fast");
            }
            return false;
        });
    }
    accordion();

    var filename= location.pathname.split('\\').pop().split('/').pop();
    $('.header__nav a[href$="'+filename+'"]').addClass('is-active');

});


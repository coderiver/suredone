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
	window_wrap.find('.window').click(function(event){
        event.stopPropagation();
    });
    window_close.on("click", function(){
    	$(this).parents(".js-window-wrap").hide();
    	$(".js-overlay").hide();
        $("body").removeClass("is-window-open");
    });

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

});


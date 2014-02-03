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

});


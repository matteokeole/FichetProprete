function toggle_page(title) {
	$("title").text(title);
}

$(function() {
	$("button").attr("onFocus", "blur()");
	var sticky_bar_top = $("nav").offset().top;
	function sticky_bar() {
		if ($(window).scrollTop() > sticky_bar_top) {$("nav").addClass("sticky_bars")}
		else {$("nav").removeClass("sticky_bars")}
	}
	$(window).scroll(function() {sticky_bar()})
})
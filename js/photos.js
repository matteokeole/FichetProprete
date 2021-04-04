$(function() {
	$("#photos").click(function() {
		$("title").text("Photos | FICHET PROPRETÉ");
		$("button").removeClass("active");
		$(this).addClass("active");
		$("nav p").text($(this).text());
		$("p strong").text("Photos");
		$("#infos").text("Aucune photo.");

		$("#sentence, article button, article section, footer").hide()
	})
})
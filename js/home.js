$(function() {
	$("#home").click(function() {
		$("title").text("Accueil | FICHET PROPRETÉ");
		$("button").removeClass("active");
		$(this).addClass("active");
		$("nav p").text($(this).text());
		$("p strong").text("Accueil");
		$("#infos").text("Vous n'aimez pas nettoyer ? FICHET PROPRETÉ le fait pour vous !");

		$("#sentence, article button, section, footer").show();
		$("article > a").hide()
	})
})
$(function() {
	$("#professionals").click(function() {
		$("title").text("Professionnels | FICHET PROPRET\xC9");
		$("button").removeClass("active");
		$("nav p").text($(this).text());
		$("p strong").text("Professionnels");
		$("#infos").html("Si vous êtes à la recherche d'une personne discrète, soigneuse et efficace pour laver vos vitres ou nettoyer des bureaux, locaux ou autre, n'hésitez pas à demander un devis via l'adresse mail <strong>fichetproprete@gmail.com</strong> ou sur la page Contact de ce site.");

		$("#sentence, article button, section, footer").hide();
		$("a").show()
	})
})
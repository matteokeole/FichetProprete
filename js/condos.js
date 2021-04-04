$(function() {
	$("#condos").click(function() {
		$("title").text("Copropriétés | FICHET PROPRET\xC9");
		$("button").removeClass("active");
		$("nav p").text($(this).text());
		$("p strong").text("Copropriétés");
		$("#infos").html("Si vous êtes à la recherche d'une personne discrète, soigneuse et efficace pour laver les vitres ou nettoyer les parties communes, n'hésitez pas à demander un devis via l'adresse mail <strong>fichetproprete@gmail.com</strong> ou sur la page Contact de ce site.");

		$("#sentence, article button, section, footer").hide();
		$("a").show()
	})
})
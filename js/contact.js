$(function() {
	$("#contact, #button-1").click(function() {
		$("title").text("Contact | FICHET PROPRET\xC9");
		$("button").removeClass("active");
		$(this).addClass("active");
		$("nav p").text($(this).text());
		$("p strong").text("Contact");
		$("#infos").html("Demandez un devis gratuit à l'adresse mail <strong>fichetproprete@gmail.com</strong> en appuyant sur le lien ci-dessous.");

		$("#sentence, article button, article section, footer").hide();
		$("form, a").show()
	})
})
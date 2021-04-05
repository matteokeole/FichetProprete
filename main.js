window.onload = function() {
	var UI = {
		// content sections
		contents: document.querySelectorAll("content"),
		home: document.querySelector(".home"),
		photos: document.querySelector(".photos"),
		contact: document.querySelector(".contact"),
		individuals: document.querySelector(".individuals"),
		pros: document.querySelector(".pros"),
		coownerships: document.querySelector(".coownerships"),
		constructions: document.querySelector(".constructions"),
		// others
		title: document.querySelector("title"),
		navTitle: document.querySelector(".nav_title"),
		pageTitle: document.querySelector(".page_title"),
		nav: document.querySelector("nav"),
		buttons: document.querySelectorAll("button"),
		infos: document.querySelector("#infos"),
		contact_link: document.querySelector("#contact_link")
	}, Text = {
		title: {
			home: "Accueil",
			photos: "Photos",
			contact: "Contact",
			individuals: "Particuliers",
			pros: "Professionnels",
			coownerships: "Copropriétés",
			constructions: "Chantiers"
		},
		section: {
			home: "Vous n'aimez pas nettoyer ? Pas de souci ! FICHET PROPRETÉ le fait pour vous !",
			photos: "Aucune photo.",
			contact: "Demandez un devis gratuit à l'adresse <b>fichetproprete@gmail.com</b> en remplissant le formulaire ci-dessous.",
			individuals: "Si vous êtes à la recherche d'une personne discrète, soigneuse et efficace pour laver vos vitres ou nettoyer votre terrasse, véranda ou autre, n'hésitez pas à demander un devis gratuit à l'adresse <b>fichetproprete@gmail.com</b>.",
			pros: "Si vous êtes à la recherche d'une personne discrète, soigneuse et efficace pour laver vos vitres ou nettoyer des bureaux, locaux ou autre, n'hésitez pas à demander un devis gratuit à l'adresse <b>fichetproprete@gmail.com</b>.",
			coownerships: "Si vous êtes à la recherche d'une personne discrète, soigneuse et efficace pour laver les vitres ou nettoyer les parties communes, n'hésitez pas à demander un devis gratuit à l'adresse <b>fichetproprete@gmail.com</b>.",
			constructions: "Si vous êtes à la recherche d'une personne discrète, soigneuse et efficace pour remettre en état en fin de chantier, n'hésitez pas à demander un devis gratuit à l'adresse <b>fichetproprete@gmail.com</b>."
		}
	};

	function show(element) {element.style.display = "block"}
	function hide(element) {element.style.display = "none"}
	function open(section) {
		with (UI) {
			contents.forEach(function(c) {hide(c)});
			switch (section) {
				case "home":
					show(home);
					// titles
					title.innerHTML = Text.title.home + " | FICHET PROPRETÉ";
					navTitle.innerHTML = Text.title.home.toUpperCase();
					pageTitle.innerHTML = Text.title.home;
					// buttons
					buttons.forEach(function(b) {b.className = ""});
					document.querySelector("#home").className = "active";
					// content
					infos.innerHTML = Text.section.home;
					// contact link
					hide(contact_link);
					break;
				case "photos":
					show(photos);
					// titles
					title.innerHTML = Text.title.photos + " | FICHET PROPRETÉ";
					navTitle.innerHTML = Text.title.photos.toUpperCase();
					pageTitle.innerHTML = Text.title.photos;
					// bttons
					buttons.forEach(function(b) {b.className = ""});
					document.querySelector("#photos").className = "active";
					// content
					photos.innerHTML = Text.section.photos;
					// contact link
					hide(contact_link);
					break;
				case "contact":
					show(contact);
					// titles
					title.innerHTML = Text.title.contact + " | FICHET PROPRETÉ";
					navTitle.innerHTML = Text.title.contact.toUpperCase();
					pageTitle.innerHTML = Text.title.contact;
					// buttons
					buttons.forEach(function(b) {b.className = ""});
					document.querySelector("#contact").className = "active";
					// content
					contact.querySelector(".infos_contact").innerHTML = Text.section.contact;
					// contact link
					show(contact_link);
					break;
				case "individuals":
					show(individuals);
					// titles
					title.innerHTML = Text.title.individuals + " | FICHET PROPRETÉ";
					navTitle.innerHTML = Text.title.individuals.toUpperCase();
					pageTitle.innerHTML = Text.title.individuals;
					// buttons
					buttons.forEach(function(b) {b.className = ""});
					// content
					individuals.innerHTML = Text.section.individuals;
					// contact link
					show(contact_link);
					break;
				case "pros":
					show(pros);
					// titles
					title.innerHTML = Text.title.pros + " | FICHET PROPRETÉ";
					navTitle.innerHTML = Text.title.pros.toUpperCase();
					pageTitle.innerHTML = Text.title.pros;
					// buttons
					buttons.forEach(function(b) {b.className = ""});
					// content
					pros.innerHTML = Text.section.pros;
					// contact link
					show(contact_link);
					break;
				case "coownerships":
					show(coownerships);
					// titles
					title.innerHTML = Text.title.coownerships + " | FICHET PROPRETÉ";
					navTitle.innerHTML = Text.title.coownerships.toUpperCase();
					pageTitle.innerHTML = Text.title.coownerships;
					// buttons
					buttons.forEach(function(b) {b.className = ""});
					// content
					coownerships.innerHTML = Text.section.coownerships;
					// contact link
					show(contact_link);
					break;
				case "constructions":
					show(constructions);
					// titles
					title.innerHTML = Text.title.constructions + " | FICHET PROPRETÉ";
					navTitle.innerHTML = Text.title.constructions.toUpperCase();
					pageTitle.innerHTML = Text.title.constructions;
					// buttons
					buttons.forEach(function(b) {b.className = ""});
					// content
					constructions.innerHTML = Text.section.constructions;
					// contact link
					show(contact_link);
					break
			}
		}
	}

	// opening home
	open("home");

	// sticky navbar
	window.onscroll = function() {(this.scrollY > 280) ? UI.nav.className = "sticky_bar" : UI.nav.className = ""}

	// changing page
	document.querySelector("nav #tabs #home").onclick = function() {open("home")}
	document.querySelector("nav #tabs #photos").onclick = function() {open("photos")}
	document.querySelector("nav #tabs #contact").onclick = function() {open("contact")}
	document.querySelector("#button-1").onclick = function() {open("contact")}
	document.querySelector("#individuals").onclick = function() {open("individuals")}
	document.querySelector("#pros").onclick = function() {open("pros")}
	document.querySelector("#coownerships").onclick = function() {open("coownerships")}
	document.querySelector("#constructions").onclick = function() {open("constructions")}
}
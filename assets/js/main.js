const headerTitle = document.querySelector(".header-title"),
nav = document.querySelector("nav"),
title = document.querySelector("#title"),
clients = document.querySelector(".clients"),
btnEstimate = document.querySelector(".card-estimate .btn"),
contact = document.querySelector(".link.contact"),
Title = {
	home: "Accueil",
	photos: "Photos",
	contact: "Contact",
	individuals: "Particuliers",
	professionals: "Professionnels",
	coownerships: "Copropriétés",
	constructions: "Chantiers"
},
openSection = function(section) {
	// Open requested section and close current opened section
	document.querySelector("section.current").classList.remove("current");
	document.querySelector(`section[data-section=${section}]`).classList.add("current");
	// Set active button
	let btnActive = document.querySelector(`nav .btn.active`),
	btn = document.querySelector(`nav .btn[data-section=${section}]`);
	if (btnActive) btnActive.classList.remove("active");
	if (btn) btn.classList.add("active");
	// Set titles
	headerTitle.textContent = Title[section];
	title.textContent = Title[section];
	// Hide contact link if section is contact form
	if (section === "contact") contact.style.display = "none";
	else contact.style.display = "inline-block"
};
// Event listeners
nav.children[0].addEventListener("click", function() {window.location.reload()});
nav.children[1].addEventListener("click", function() {openSection("home")});
nav.children[2].addEventListener("click", function() {openSection("photos")});
nav.children[3].addEventListener("click", function() {openSection("contact")});
clients.children[0].addEventListener("click", function() {openSection("individuals")});
clients.children[1].addEventListener("click", function() {openSection("professionals")});
clients.children[2].addEventListener("click", function() {openSection("coownerships")});
clients.children[3].addEventListener("click", function() {openSection("constructions")})
btnEstimate.addEventListener("click", function() {openSection("contact")})
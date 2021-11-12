const inputs = document.querySelectorAll("input");
// Prevent form to re-submit when refreshing
if (this.history.replaceState) this.history.replaceState(null, null, this.location.href);
// Event listeners
inputs.forEach((input) => {
	// Label focus in/out animation
	input.addEventListener("focus", function() {
		this.nextElementSibling.classList.add("focused")
	});
	input.addEventListener("blur", function() {
		if (this.value === "") this.nextElementSibling.classList.remove("focused")
	})
})
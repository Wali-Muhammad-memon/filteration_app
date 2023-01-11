let input = document.getElementById("input");

input.onkeyup = () => {
	let input = document.getElementById("input").value.toUpperCase();
	let ul = document.getElementsByTagName("ul");
	let li = document.getElementsByTagName("li");
	for (let i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName("a")[0];
		let textValue = a.textContent || a.innerHTML;
		if (textValue.toUpperCase().indexOf(input) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
};

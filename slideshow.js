(function () {
	let images = [
		"assets/Oreos.jpg",
		"assets/PopTarts.jpg",
		"assets/Sourpatch.jpg",
		"assets/Doritos.jpg",
	];
	let position = 0;
	const img = document.getElementById("image");

	document.getElementById("previous").addEventListener("click", () => {
		console.log(position);
		position--;
		if (position < 0) {
			position = images.length - 1;
		}
		img.setAttribute("src", images[position]);
	});

	document.getElementById("next").addEventListener("click", () => {
		console.log(position);
		position++;
		if (position > images.length - 1) {
			position = 0;
		}
		img.setAttribute("src", images[position]);
	});
})();

var positionAndSizeGrid = {
	"1": [1, 1, 248, 123],
	"2": [1, 251, 123, 123],
	"3": [1, 376, 248, 248],
	"4": [1, 626, 248, 123],
	"5": [1, 876, 123, 123],

	"6": [126, 1, 123, 248],
	"7": [126, 126, 248, 248],
	"8": [251, 376, 123, 123],
	"9": [251, 501, 248, 248],
	"10": [126, 626, 123, 123],
	"11": [126, 751, 248, 248],

	"12": [376, 1,  123, 123],
	"13": [376, 126, 123, 123],
	"14": [376, 251, 248, 123],
	"15": [376, 751, 123, 123],
	"16": [376, 876, 247, 123],
};

function addImageToGrid(num_box, num_grid, url_image, url_obra, titulo_obra, id_grid) {
	var div_block = document.createElement("div");
	var positionAndSize = positionAndSizeGrid["" + num_box];

	// Dandole posicion
	div_block.style.position = "absolute";
	div_block.style.top = positionAndSize[0] + "px";
	div_block.style.left = positionAndSize[1]+ "px";
	// Dandole tamano
	div_block.style.width = positionAndSize[2] + "px";
	div_block.style.height = positionAndSize[3] + "px";
	
	var img = new Image();

	img.onload = function() {
		// Se le da la clase al div
		div_block.className = "catalogo-image";

		// Se crea el div con la informacion
		var div_info = document.createElement("div");
		div_info.className = "info-image";

		// Se crea y se agrega el texto (titulo)
		var title_catalogoImage = document.createElement("h2");
		title_catalogoImage.innerHTML = titulo_obra;
		div_info.appendChild(title_catalogoImage);

		// Se agrega los divs al block
		div_block.appendChild(img);
		div_block.appendChild(div_info);

		// Se redimensiona dependiendo del tamano de la imagen
		var img_width = 0;
		var img_height = 0;

		var scalarWidth = 0;
		var scalarHeight = 0;

		// Imagenes pequeñas
		if(num_box == 2 || num_box == 5 || num_box == 8 || num_box == 10 || num_box == 12 ||
		   num_box == 13 || num_box == 15 || num_box == 16) {

		   	img_width = img.width * 0.2;
			img_height = img.height * 0.2;

			$(img).css('width', '' + img_width);
			$(img).css('height', '' + img_height);

			$(div_info).css('top', '2%');

			scalarWidth = 0.35;
			scalarHeight = 0.35;
		}
		// Imagenes medianas-verticales
		else if(num_box == 6) {
			img_width = img.width * 0.4;
			img_height = img.height * 0.45;

			$(img).css('width', '' + img_width);
			$(img).css('height', '' + img_height);

			$(div_info).css('top', '15%');

			scalarWidth = 0.4;
			scalarHeight = 0.4;
		}
		// Imagenes medianas-horizontales
		else if(num_box == 1 || num_box == 4 || num_box == 14) {
			img_width = img.width * 0.2;
			img_height = img.height * 0.2;

			$(img).css('width', '' + img_width);
			$(img).css('height', '' + img_height);

			scalarWidth = 0.4;
			scalarHeight = 0.4;
		}
		// Imagenes grandes
		else if(num_box == 3 || num_box == 7 || num_box == 9 || num_box == 11) {
		   	img_width = img.width * 0.35;
			img_height = img.height * 0.4;

			$(img).css('width', '' + img_width);
			$(img).css('height', '' + img_height);

			$(div_info).css('top', '50%');

			scalarWidth = 0.2;
			scalarHeight = 0.2;
		}

		// Se agrega la animacion
		$(div_block).hover(function() {
			$(this).find('img').animate({width: img_width * scalarWidth, height: img_height * scalarHeight, marginTop: 10, marginLeft: 10}, 500);
		 }, function() {
			$(this).find('img').animate({width: img_width, height: img_height, marginTop: 0, marginLeft: 0}, 300);
		 });

		// Se le linkea a su obra
		$(div_block).click(function() {
			$(location).attr("href", url_obra);
		});

		// Se agrega el div_block al grid
		$(id_grid).append(div_block);
	};

	img.onerror = function () {
		div_block.className = "catalogo-noImage";

		$(id_grid).append(div_block);
	};

	img.src = url_image;
}


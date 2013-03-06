// JavaScript Document
var wpchimg;
var wpch_target;
var wpch_current;


function drawLiquid(ctx, iTempToYCoord) {
	/* Draw red rectangle to represent the fluid in the glass tube
	 * Coordinates you Y and are fixed!
	 * TODO: Calculare Y coord base on image X,Y
	 * Fixes : calculations to apply for this plugin only...
	 */

	var iX_POS = 82,
		iY_POS = 11,
		iY_OFFSET = 400,
		iWIDTH = 30;
	
	ctx.fillStyle = "rgb(211, 5, 5)";
	
	// Draw rectangle from 0 to Current value

	var ratio = 275 / wpch_target;
	
	iTempToYCoord = wpch_current * ratio;
	
	var y_start_coord = (275 - iTempToYCoord) + 50
	
	//Self explanatory...
	var _mtop =  Math.round( -(120 + iTempToYCoord) + (iTempToYCoord * .175));
	jQuery('#wpch_cti_img').css({ 'margin-top' : _mtop+'px' });

	ctx.fillRect(iX_POS, y_start_coord, iY_POS, iTempToYCoord );

	ctx.stroke();
}

function imgOnLoaded() {
	/* Simply grabs a handle to the canvas element and
	 * check the context (Canvas support). 
	*/

	var canvas = document.getElementById('thermometer'),
		ctx = null,
		iTemp = 0,
		iRatio  = 0,
		iTempToYCoord = 0;

	// Canvas supported?
	if (canvas.getContext) {

		ctx = canvas.getContext('2d');
	
		// Draw the loaded image onto the canvas
		ctx.drawImage(wpchimg, 0, 0);

		// Draw the liquid level
		drawLiquid(ctx, iTempToYCoord);

	} else {
		alert("Canvas not supported!");
	}
}

function draw() {
	/* Main entry point got the thermometer Canvas example
	 * Simply grabs a handle to the canvas element and
	 * check the conect (Canvas support). 
	 */

	var canvas = document.getElementById('thermometer');
	
	if ( !canvas ){ return; }

	// Create the image resource
	wpchimg = new Image();

	// Canvas supported?
	if (canvas.getContext) {
		// Setup the onload event
		wpchimg.onload = imgOnLoaded;

		// Load the image
		wpchimg.src = jQuery('#wpch_therm_img').attr('src');
		
	} else {
		alert("Canvas not supported!");
	}
}

function setTempAndDraw() {
	/* Function called when user clicks the draw button
	 */
	//var _current = document.getElementById('wpch_cti_img');
	var temp = document.getElementById('wpch_cur_data_txt_value'),
		slider = document.getElementById('wpch_slider');
	
	if (temp !== null && slider !== null) {
		temp.value = slider.value;
		wpch_current = slider.value; 
		var _symbol = jQuery('#wpch_frm_data_currency option:selected').text();
		jQuery('#wpch_cti_img').text(_symbol+''+slider.value);
		draw();
	}
}


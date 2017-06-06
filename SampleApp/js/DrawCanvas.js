/**
 * Canvas users can do painting.<br>
 * Drawn image can be obtained as Base64 string.
 *
 * @constructor
 * @param canvasEle {object} canvas element to draw
 */
var DrawCanvas = function(canvasEle) {
	this._canvasEle = canvasEle;

	var drawContext = canvasEle.getContext("2d");
	this._drawContext = drawContext;

	// drawing style
	drawContext.lineCap = "round";
	drawContext.lineWidth = 1;
	drawContext.strokeStyle = 'rgb(0, 0, 0)';
	drawContext.fillStyle = 'rgb(0, 0, 0)';

	var mouseX = null;
	var mouseY = null;

	// On move of mouse pointer
	var onMove = function(e) {
	console.log("onMove");
	
		if (e.buttons === 1 || e.which === 1) {
			var rect = e.target.getBoundingClientRect();
			var X = ~~(e.clientX - rect.left);
			var Y = ~~(e.clientY - rect.top);
			draw(X, Y);
		}
	};
	this._canvasEle.addEventListener('mousemove', onMove, false);

	// On left click by mouse
	var onClick = function(e) {
		if (e.button != 0) {
			return;
		}
		
		var rect = e.target.getBoundingClientRect();
		var X = ~~(e.clientX - rect.left);
		var Y = ~~(e.clientY - rect.top);
		draw(X, Y);
	};
	function draw(X, Y) {
		drawContext.beginPath();
		if (!mouseX) {
			// start drawing from current mouse cursor position
			drawContext.moveTo(X, Y);
		} else {
			// start drawing from previous mouse cursor position
			drawContext.moveTo(mouseX, mouseY);
		}
		drawContext.lineTo(X, Y);
		drawContext.stroke();

		// for next call
		mouseX = X;
		mouseY = Y;
	};
	this._canvasEle.addEventListener('mousedown', onClick, false);

	var drawEnd = function() {
		mouseX = null;
		mouseY = null;
	};
	this._canvasEle.addEventListener('mouseup', drawEnd, false);
	this._canvasEle.addEventListener('mouseout', drawEnd, false);
};

/**
 * Clear what is drawn on canvas.
 *
 * @memberOf DrawCanvas
 */
DrawCanvas.prototype.clear = function () {
	this._drawContext.beginPath();
	this._drawContext.fillStyle = "#ffffff";
	this._drawContext.fillRect(0, 0, 512, 512);
};


/**
 * Return Base64 string of what is drawn on canvas.
 *
 * @param [type] {string} Type of base64 encode.
 *     Default value is "image/png".
 * @return {string} Base64 string
 * @memberOf DrawCanvas
 */
DrawCanvas.prototype.toDataURL = function(type) {
	type = type ? type : "image/png";

	return this._canvasEle.toDataURL(type);
};
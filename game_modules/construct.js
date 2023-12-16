/**		CONSTRUCTOR.JS
 * construct() is where everything begins. 
 * 		construct()
 * 		{
 * 			...
 * 			initN()
 * 			app() // resides in ./modules/app.js
 * 		}
 */

import { app } from "./app.js";

function iteratorPrototype() {
	/**
	 * dynamically set canvas dimensions relative to browser dimensions
	 */

	const width  = Math.max(document.documentElement.clientWidth  || 0, window.innerWidth  || 0); 
	const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0); 

	var canvasList = [ 
		/**
		 * div_name,
		 * another_div_name
		 */
	];

	var canvasWidthPercentage = [ 
		50, // div_name
		80	// another_div_name 
	];
	var canvasHeightPercentage = [ 
		50, // div_name
		80	// another_div_name 
	];

	for (var i = 0; i < canvasList.length; i++) {
		var canvas = document.createElement("canvas");
		canvas.style.width	 = '' + ((width/100)*canvasWidthPercentage[i]) 	 + 'px';
		canvas.style.height  = '' + ((height/100)*canvasHeightPercentage[i]) + 'px';
		document.getElementById(canvasList[i]).appendChild(canvas);
	}
}

function setCanvasDimensions() 
{
	var canvas = document.querySelector("#easel");
  	canvas.style.width ='100%';
  	canvas.style.height='100%';
  	canvas.width  = canvas.offsetWidth;
  	canvas.height = canvas.offsetHeight;
}

window.onload = function construct() {
	setCanvasDimensions();
	app();
}
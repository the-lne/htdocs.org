function setDivDimensions()
{
	/**
	 * dynamically set div dimensions relative to browser dimensions
	 */

	const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0); 
	const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0); 

	var divCount = [ 
		"canvasPage",	
		"htDocs"	
	];

	var divWidthPercentage = [ 
		50, // canvasPage
		80	// htDocs
	];
	var divHeightPercentage = [ 
		50, // canvasPage
		80	// htDocs
	];

	for (var i = 0; i < divCount.length--; i++) 
	{
		var div = document.createElement("div");
		div.style.width	 = '' + ((width/100)*divWidthPercentage[i]) + 'px';
		div.style.height = '' + ((height/100)*divHeightPercentage[i]) + 'px';
		document.getElementById(divCount[i]).appendChild(div);
	}
}

function constructor() 
{
	setDivDimensions();
}

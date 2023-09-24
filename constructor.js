function constructor() {
	const width = ((Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)/100)*50); 
	const height = ((Math.max(document.documentElement.clientWidth || 0, window.innerHeight || 0)/100)*40); 

	var div = document.createElement("div");
	div.style.width = '' + width + 'px';
	div.style.height = '' + height + 'px';
	div.style.color = "black";

	document.getElementById("canvasPage").appendChild(div);
}

function htDocfunction() {
	alert(1);
}

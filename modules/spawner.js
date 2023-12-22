/**								SPAWNER.JS
 * I use regular javascript to attach events to the buttons that deliver iframes. 
 * For the button (technically, its a div) that transforms data (animates jpanel), 
 * I use jquery.
 */

class spawner {
	pages = {
        about:      "pages/about.html",
        games:      "pages/games.html",
		download:	"pages/downloads.html",
		iss1:		"https://www.youtube.com/embed/P9C25Un7xaM?si=cGx7lQdo8RPAbfm-&autoplay=1",
		iss2:		"https://www.youtube.com/embed/jPTD2gnZFUw?si=ceLoqtTsPb2YTOSb&autoplay=1"
	}
	button = {
		about: 		document.getElementById("about"),
		games: 		document.getElementById("games"),
		download: 	document.getElementById("downloads"),
		iss1: 		document.getElementById("iss1"),
		iss2: 		document.getElementById("iss2")
	}
	newPage(page) { document.getElementById("easel").src = page; }
	constructor() {
		// sizing the iframe id="easel"
	    var iframe = document.querySelector("#easel");
      	iframe.style.width  = '96%';
      	iframe.style.height = '96%';
	    iframe.style.borderRadius = "25px";

		// when you click on <div id="jpanel">, it toggles between two animations 
		$("#jpanel").click(function() {
			var t = $(this);
			var flag = t.data("clickflag") || false;
			if(!flag) {
                t.animate( 
                	{ width: 170},
                	{ duration: 300 }
                );
			} else {
                t.animate( 
                	{ width: 20},
                	{ duration: 300 }
                );
			}
			t.data("clickflag", !flag);
			$(".button").toggle();
		});

		// add event listeners to the buttons to make them load different iframes from ./pages/
        this.button.about.addEventListener('click', event => { 
			this.newPage(this.pages.about); 
		});
        this.button.games.addEventListener('click', event => { 
			this.newPage(this.pages.games);
		});
        this.button.download.addEventListener('click', event => { 
			this.newPage(this.pages.download); 	
		});
        this.button.iss1.addEventListener('click', event => { 
			this.newPage(this.pages.iss1); 	
		});
        this.button.iss2.addEventListener('click', event => { 
			this.newPage(this.pages.iss2); 	
		});
	} 
}

export const spawn = new spawner();
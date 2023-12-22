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
		streams:	"pages/streams.html"
	}
	button = {
		about: 		document.getElementById("about"),
		games: 		document.getElementById("games"),
		download: 	document.getElementById("downloads"),
		streams: 		document.getElementById("streams")
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
        this.button.streams.addEventListener('click', event => { 
			this.newPage(this.pages.streams); 	
		});
	} 
}

export const spawn = new spawner();
class spawner {
	pages = {
		frontpage:	"pages/frontpage.html",
		download:	"pages/downloads.html",
        games:      "pages/games.html",
        about:      "pages/about.html"
	}
	button = {
		frontpage: 	document.getElementById("frontpage"),
		download: 	document.getElementById("downloads"),
		games: 		document.getElementById("games"),
		about: 		document.getElementById("about")
	}
	newPage(page) {
		document.getElementById("easel").src = page;
	}
	constructor() {
		// sizing the iframe id="easel"
	    var iframe = document.querySelector("#easel");
      	iframe.style.width  = '85%';
      	iframe.style.height = '96%';
      	iframe.width  = iframe.offsetWidth;
      	iframe.height = iframe.offsetHeight;
	    iframe.style.borderRadius = "25px";

		// button events
        this.button.frontpage.addEventListener('click', event => {
			this.newPage(this.pages.frontpage);
        });
        this.button.download.addEventListener('click', event => {
			this.newPage(this.pages.download);
        });
        this.button.games.addEventListener('click', event => {
			this.newPage(this.pages.games);
        });
        this.button.about.addEventListener('click', event => {
			this.newPage(this.pages.about);
        });
	} 
}

export const spawn = new spawner();
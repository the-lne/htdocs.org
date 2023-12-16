class spawner {
	pages = {
		frontpage:	"pages/frontpage.html",
		download:	"pages/downloads.html",
        about:      "pages/about.html"
	}
	button = {
		frontpage: 	document.getElementById("frontPage"),
		download: 	document.getElementById("downloadsButton"),
		about: 		document.getElementById("about")
	}
	newPage(page) {
		document.getElementById("easel").src = page;
	}
	constructor() {
		// these need to be turned into statically loaded content
	    var canvas = document.querySelector("#easel");
      	canvas.style.width  = '80%';
      	canvas.style.height = '80%';
      	canvas.width  = canvas.offsetWidth;
      	canvas.height = canvas.offsetHeight;
	    canvas.style.borderRadius = "25px";
		/////////////////////////////////////////////////////////

        this.button.frontpage.addEventListener('click', event => {
			this.newPage(this.pages.frontpage);
        });
        this.button.download.addEventListener('click', event => {
			this.newPage(this.pages.download);
        });
        this.button.about.addEventListener('click', event => {
			this.newPage(this.pages.about);
        });
	} 
}

export const spawn = new spawner();
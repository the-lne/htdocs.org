class spawner {
	pages = {
		frontpage:	"pages/frontpage.html",
		download:	"pages/downloads.html",
        about:      "pages/about.html"
	}
	button = {
		frontpage: 	document.getElementById("frontpage"),
		download: 	document.getElementById("downloads"),
		about: 		document.getElementById("about")
	}
	newPage(page) {
		document.getElementById("easel").src = page;
	}
	constructor() {
	    var canvas = document.querySelector("#easel");
      	canvas.style.width  = '85%';
      	canvas.style.height = '85%';
      	canvas.width  = canvas.offsetWidth;
      	canvas.height = canvas.offsetHeight;
	    canvas.style.borderRadius = "25px";

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
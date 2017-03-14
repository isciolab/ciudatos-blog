
var pages = {
    "about": ["sobre", "about"],
    "practice": ["practice", "practica"],
}

var input = "sobre"
var out = "home";
// for(Obj)


var slugs  = Object.keys(pages); 
for (i in slugs){
	var variants = pages[slugs[i]];
	if(variants.indexOf(input) > -1){
		var out = slugs[i];
	}
}

console.log(out)



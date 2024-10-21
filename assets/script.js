const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

console.log(slides);

let carrousselPrevious = document.getElementById("caroussel-btn-prev")

carrousselPrevious.addEventListener("click", () => {
	/*document.body.style.cursor = "wait"*/
    console.log("Vous avez cliqué sur le bouton précédent")
	let slide1 = document.getElementById("slide1")
	document.getElementById("tagLine1").innerHTML = "Autocollants <span>avec découpe laser sur mesure</span>"
	slide1.setAttribute("src", "./assets/images/slideshow/slide4.png");
	let dot4 = document.getElementById("dot4")
	let dot1= document.getElementById("dot1")
	dot4.setAttribute("class", "dot_selected");
	dot1.setAttribute("class", "dot");	

});

let carrousselNext = document.getElementById("caroussel-btn-next")

carrousselNext.addEventListener("click", () => {
	/*document.body.style.cursor = "wait"*/
    console.log("Vous avez cliqué sur le bouton suivant")
	let slide1 = document.getElementById("slide1")
	document.getElementById("tagLine1").innerHTML = "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	slide1.setAttribute("src", "./assets/images/slideshow/slide2.jpg");
	let dot2 = document.getElementById("dot2")
	let dot1= document.getElementById("dot1")
	dot2.setAttribute("class", "dot_selected");
	dot1.setAttribute("class", "dot");

});

let dot1= document.getElementById("dot1")
let dot2 = document.getElementById("dot2")
let dot3 = document.getElementById("dot3")
let dot4 = document.getElementById("dot4")

console.log(dot1)

 if (dot1.addEventListener("click", () => {
	dot1.setAttribute("class", "dot_selected");
	document.getElementById("tagLine1").innerHTML = "Impressions tous formats <span>en boutique et en ligne</span>"
    slide1.setAttribute("src", "./assets/images/slideshow/slide1.jpg"); 
	alert ("claude");
       
    }));

	if (dot2.addEventListener("click", () =>  {
	dot2.setAttribute("class", "dot_selected");
	dot1.setAttribute("class", "dot");
	document.getElementById("tagLine1").innerHTML = "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    slide1.setAttribute("src", "./assets/images/slideshow/slide2.jpg");
	alert ("claude2")
    
	}));

	if (dot3.addEventListener("click", () =>  {
	dot3.setAttribute("class", "dot_selected");
	dot1.setAttribute("class", "dot");
	document.getElementById("tagLine1").innerHTML = "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	slide1.setAttribute("src", "./assets/images/slideshow/slide3.jpg");
    alert ("claude3")
	
    }));

	if (dot4.addEventListener("click", () =>  {
	dot4.setAttribute("class", "dot_selected");
	dot1.setAttribute("class", "dot");
	document.getElementById("tagLine1").innerHTML = "Autocollants <span>avec découpe laser sur mesure</span>"
	slide1.setAttribute("src", "./assets/images/slideshow/slide4.png");
    alert ("claude4")
	
	}));


/*let couleur = ""
for (let i = 0; i < baliseCouleur.length; i++) {
    if (baliseCouleur[i].checked) {
        couleur = baliseCouleur[i].value
        break
    }
}
console.log(couleur) // affiche la valeur du radio coché*/

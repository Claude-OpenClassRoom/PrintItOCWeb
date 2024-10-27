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



let imageSlider = document.getElementById("slide1");
let bannerImg = document.getElementsByClassName("banner-img");
let text = document.getElementById("tagLine1")
let texte = document.getElementsByClassName("tagLine");
let slide1 = document.getElementById("slide1")
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

let i = 0
 
  hide = document.querySelectorAll('.hide'),
  bannerImg = document.getElementsByClassName('carrousel-img')[0],
  baliseSpan = ""

  // création des dots
  for (let i = 0; i < slides.length; i++) {
	baliseSpan += `<button type="button" id="dot1" class="dot" aria-current="true" aria-label="Slide 1" checked></button>`

}

document.getElementById('nombre-dots').innerHTML = baliseSpan;
let dots = document.querySelectorAll('.dot');
dots[i].setAttribute("class", "dot_selected");  

  arrowLeft.addEventListener("click", () => {
	dots[i].setAttribute("class", "dot"); 
	if (i <= 0) i = slides.length;
	i-=1
    dots[i].setAttribute("class", "dot_selected");  
	slide1.setAttribute("src", `./assets/images/slideshow/${slides[i].image}`);
	text.innerHTML = slides[i].tagLine; 

  });  

  arrowRight.addEventListener("click", () => {
	dots[i].setAttribute("class", "dot");
	if (slides[i + 1]) {
		i+=1
	} else {
		i = 0
	}

	dots[i].setAttribute("class", "dot_selected");
	slide1.setAttribute("src", `./assets/images/slideshow/${slides[i].image}`);
	text.innerHTML = slides[i].tagLine;


   });







  

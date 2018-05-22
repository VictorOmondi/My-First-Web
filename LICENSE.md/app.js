//My photos are here
var pics = [
	"logos/2018-28-02-16-15-23.png",
	"logos/Capture.PNG",
	"logos/Capture2.PNG",
	"logos/card.png",
	"logos/mmu.jpg"
];
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function(){
	if(counter === 5){
		counter = 0
	}
	img.src = pics[counter]
	counter = counter + 1;

});


		
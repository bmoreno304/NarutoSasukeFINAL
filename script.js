var a = document.getElementById("Naruto");
var b = document.getElementById("Sasuke");
var c = document.getElementById("img1");
var d = document.getElementById("img2");
var e = document.getElementById("img3");
var f = document.getElementById("img4");
var g = document.getElementById("img5");
var h = document.getElementById("img6");
var i = document.getElementById("img7");
var j = document.getElementById("img8");
var y = document.getElementById("friend");
var z = document.getElementById("music");
var w = document.getElementById("music2");
var o = document.getElementById("sakura");


var image1array = [
	"images/brothers.gif",
	"images/06ded9d854f305cb129762962a6518d5.jpg",

];
var imgnumber = 0;
var imgmax = 2;
function changeThis(){
	if (ignumber == igmax) {
		ignumber = 0;
	}
	o.src = image1array[imgnumber];
	imgnumber++;
}


// Image of Naruto and Sasuke 
function pageRedirect() {
	window.location.href="peace.html";
}

function changeImg () {
c.classList.remove("disappear");
z.play()
}

function changeImg0 (){
 g.classList.remove("disappear");
}

function changeImg1 () {
d.classList.remove("disappear");
}

function changeImg2 () {
e.classList.remove("disappear");
}

function changeImg3 () {
f.classList.remove("disappear");
}

function changeImg5 () {
h.classList.remove("disappear");
}

function changeImg6 () {
i.classList.remove("disappear");
}

function changeImg7 () {
j.classList.remove("disappear");
}
// Javascript function for "peace.html"
function addText () {
	w.play()
	if (ignumber == igmax) {
		ignumber = 0;
	}
	o.src = image1array[imgnumber];
	imgnumber++;
}
// Reset Button
function reSet(){
	c.classList.add("disappear");
	g.classList.add("disappear");
	d.classList.add("disappear");
	e.classList.add("disappear");
	f.classList.add("disappear");
	h.classList.add("disappear");
	i.classList.add("disappear");
	j.classList.add("disappear");
}
					

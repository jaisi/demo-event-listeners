console.log("i am here");

var saywhat = document.getElementById("output");

var articleItems = document.getElementsByClassName("article-section");
console.log("article items", articleItems);

function handleClick(event){
	console.log(event);
	var elementText = event.target.innerHTML;
	saywhat.innerHTML = "You clicked on " + elementText;
}



for (var i = 0; i < articleItems.length; i++){
	articleItems.item(i).addEventListener("click" , handleClick);
}

var header = document.getElementById("page-header");

function handleHeaderMouseOver(event){
	saywhat.innerHTML = "The force us strong with this one";
}

function handleHeaderMouseOut(event) {
	// body...
	saywhat.innerHTML = "Remember....the force will be with you, always";
}

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

var inputArea = document.getElementById("keypress-input");

//anonymous function
inputArea.addEventListener("keyup", function(event){
	console.log("event", event);
	saywhat.innerHTML = event.target.value;
});

var obiwan = document.getElementById("obi-wan");

console.log("obiwan", obiwan);

document.getElementById("add-color")
	.addEventListener("click", function(){
		obiwan.classList.toggle("blue");
	});

document.getElementById("make-large")
	.addEventListener("click", function(){
		obiwan.classList.toggle("large");
	});

document.getElementById("add-border")
	.addEventListener("click", function(){
		obiwan.classList.toggle("bordered");
	});

document.getElementById("add-rounding")
	.addEventListener("click", function(){
		obiwan.classList.toggle("rounded");
	});

document.getElementById("wrapper")
	.addEventListener("click", function(event){
	console.log("currentTarget", event.currentTarget);
	if (event.target.tagName.toLowerCase() === "li"){
		console.log("you clicked on an <li> element");
	}

	if(event.target.className === "article-section"){
		console.log("you clicked on an `article-section` element");
	}

	if(event.target.id === "page-title"){
		console.log("you clicked on the page-title element");
	}
	});

	var quotesArray = [
		"A long time ago in a galaxy far, far away…",
		"Use the force, Luke.",
		"The force is strong with this one.",
		"Do. Or do not. There is no try.",
		"Fear is the path to the dark side.",
		"Someday I will be the most powerful Jedi ever.",
		"You were the chosen one! "
	];

//` is a template string
//$ in {} gets evaluated
//--
quotesArray.forEach(function(quote, index){
	var quoteBlock = `<div id="quote--${index}">
						<h3>"${quote}"- Star Wars</h3>
						<p>This is awesome</p>
						</div>`;
	var quoteDiv = document.createElement("div");
	quoteDiv.innerHTML = quoteBlock;
	document.getElementById("stickItHere").appendChild(quoteDiv);
	var quoteDom = document.getElementById(`quote--${index}`);
	quoteDom.addEventListener("click", function(event){
			console.log("clickEvent", "CT:", event.currentTarget, "T", event.target);
			event.target.classList.add("red");
	});

});

/* 
  version 2 - one function many arrays
*/

var playerOne = [22, 34, 11, 90, 200];
var playerTwo = [76, 56, 788, 902];


function changeScores(item, index, whichArray){
  whichArray[index] = item * 10;
  
}

document.getElementById("change1").addEventListener("click", function(){
  playerOne.forEach(changeScores);
  console.log("playerOne:", playerOne);
});
document.getElementById("change2").addEventListener("click", function(){
  playerTwo.forEach(changeScores);
  console.log("playerTwo:", playerTwo);
});






$(document).ready(function() {
	$("body").prepend("<h1>Here we go:</h1>");
	
	initialize();

	$("button").on("click", function() {
		$("tbody").remove();
		initialize();
	});

});

function initialize () {
	var pickNumber = prompt("How many squares?");
	makeGrid(pickNumber);

	$(".cell").on("mouseenter", function() {
		var currentOpacity = $(this).css("opacity")
		if(currentOpacity > 0) {
			$(this).css("opacity", currentOpacity - .1);
		};
	});
}

function makeGrid(boxes) {
	for(var i=0; i < boxes; i++) {
		$("#container").append("<tr></tr>");
		$("tr").addClass("row");
	}
	for(var j=0; j < boxes; j++) {
		$(".row").append("<td></td>")
		$("td").addClass("cell")
	}
}


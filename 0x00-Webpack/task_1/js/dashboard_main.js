import $ from "jquery";
import _ from "lodash";

// Append elements to the body
$(document).ready(() => {
	$("body").append("<p>Holberton Dashboard</p>");
	$("body").append("<p>Dashboard data for the students</p>");
	$("body").append("<button>Click here to get started</button>");
	$("body").append("<p id='count'></p>");
	$("body").append("<p>Copyright - Holberton School</p>");

	// initialize counter and define updateCounter
	let count = 0;
	const updateCounter = () => {
		count += 1;
		$("#count").text(`${count} clicks on the button`);
	};
	// bound the debounced function to button click
	$("button").on("click", _.debounce(updateCounter, 500)); // prevents spamming
})
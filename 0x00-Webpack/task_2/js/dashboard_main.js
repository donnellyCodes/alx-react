import $ from "jquery";
import "../css/main.css";
import { debounce } from "lodash";

$("body").append("<div id='logo'></div>");
$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<button id='button'>Click here to get started</button>");
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");

let count = 0;

// Debounced function to handle click events and dynamically import updateCounter
$("#button").on(
    "click",
    debounce(async () => {
        count += 1;
        $("#count").text(`${count} clicks on the button`);
    }, 300)
);

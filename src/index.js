import "./styles.css";
import $ from "jquery";

document.getElementById("app").innerHTML = `
<h1>Hello!</h1>
<div>
</div>
`;

var addLoaderScreen = function(message) {
  var jupyterSystem = $("<ul/>", {
    html: `
      <li class="jupyter"><a href="#jupyter"><span>jupyter</span></a></li>
      <li class="io"><a href="#io"><span>io</span></a></li>
      <li class="europa"><a href="#europa"><span>europa</span></a></li>
      <li class="ganymede"><a href="#ganymede"><span>ganymede
      <li class="callisto"><a href="#callisto"><span>callisto</span></a></li>
    `,
    class: "jupyter-system"
  });

  var fullscreen = $("<div/>", { id: "fullscreen" });

  var stars = $("<div/>", {
    html: `
      <div>
        <div class="stars"></div>
        <div class="twinkling"></div>
      </div>
    `,
    id: "stars-wrapper"
  });

  var message = $("<p/>", {
    html: message,
    id: "loading-message",
    class: "blink-me"
  });

  // Adding things to each other
  stars.appendTo(fullscreen);
  jupyterSystem.appendTo(fullscreen);
  message.appendTo(fullscreen);
  $(fullscreen).appendTo("body");
};

addLoaderScreen("...waiting jupyter moons");
$("#github").click(function() {
  // get the custom message
  var customMessage = $("#input-loading-message").val();

  // show the loader
  addLoaderScreen(customMessage);

  // clear the message
  $("#input-loading-message").val("");
});

$(document).on("click", "#hide-loader", function() {
  $("#fullscreen").remove();
});

/**
 * tilt the orbits
 * change the planet with jupyter moons
 *
 *
 */

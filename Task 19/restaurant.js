

$(document).ready(function() {
  alert("Page loaded!");
});

$(document).ready(function() {
  // Function to change styling of a specific paragraph
  function changeParagraphStyling() {
    // Select the paragraph using its ID or class
    $("#paragraphId").css({
      "color": "red",
      "font-size": "20px",
      "font-weight": "bold"
      // Add more CSS properties as needed
    });
  }

  // Call the function to change the styling when needed
  changeParagraphStyling();
});

$(document).ready(function() {
  let colors = ["lightblue", "lightgreen", "lightyellow", "lightpink", "lightgray"];
  let count = 0;

  let intervalId = setInterval(function() {
    $("body").css("background-color", colors[count % colors.length]);
    count++;

    if (count >= 5) {
      clearInterval(intervalId);
    }
  }, 2000);
});

$(document).ready(function() {
  $("body").on("click", function(event) {
    $(event.target).fadeOut("slow");
  });
});

$(document).ready(function() {
  $(".dropdown-toggle").hover(function() {
    $(this).next(".dropdown").slideToggle();
  });
});

$(document).ready(function() {
  let intervalId;

  // Chained effect to slide elements and change background
  intervalId = setInterval(slideAndChangeBackground, 3000);

  function slideAndChangeBackground() {
    $("body").toggleClass("animated");
  }

  // Fade in and out picture on button click
  $("#fadeInButton").click(function() {
    $("#picture").fadeIn(3000);
  });

  $("#fadeOutButton").click(function() {
    $("#picture").fadeOut(3000);
  });

  // Stop animation on button click
  $("#stopButton").click(function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    clearInterval(intervalId);
  });
});







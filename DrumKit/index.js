var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0;i<noOfButtons;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      alert("Button is clicked");
    });
  };

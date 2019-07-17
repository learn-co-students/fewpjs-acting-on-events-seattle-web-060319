var dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FFFF00";

document.addEventListener("keydown", function(e) {
    if (e.key === "RightLeft") {
      moveDodgerRight();
    }
  });
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
    moveDodgerLeft();
    }   
});

function moveDodgerLeft() {
    
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {

    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left + 10}px`;
    }
}


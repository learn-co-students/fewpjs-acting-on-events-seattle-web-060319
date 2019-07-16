document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }else if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
  });

function moveDodgerLeft() {
    console.log(dodger.style.left)
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }

  function moveDodgerRight() {
    console.log(dodger.style.right)
    var rightNumbers = dodger.style.left.replace("px", "");
    var right = parseInt(rightNumbers, 10);
   
    if (right < 360) {
      dodger.style.left = `${right + 10}px`;
    }
  }
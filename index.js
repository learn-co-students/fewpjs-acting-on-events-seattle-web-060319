var dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 3}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 3}px`;
  }
}

function moveDodgerUp() {
  var bottomNumbers = dodger.style.bottom.replace("px", "");
  var bottom = parseInt(bottomNumbers, 10);

  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 3}px`;
  }
}

function moveDodgerDown() {
  var bottomNumbers = dodger.style.bottom.replace("px", "");
  var bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 3}px`;
  }
}
function moveDodgerUR() {
  var bottomNumbers = dodger.style.bottom.replace("px", "");
  var bottom = parseInt(bottomNumbers, 10);
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);


    dodger.style.bottom = `${bottom + 3}px`;
    dodger.style.left = `${left + 3}px`;
}
function moveDodgerUL() {
  var bottomNumbers = dodger.style.bottom.replace("px", "");
  var bottom = parseInt(bottomNumbers, 10);
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);


    dodger.style.bottom = `${bottom + 3}px`;
    dodger.style.left = `${left - 3}px`;
}

function moveDodgerDR() {
  var bottomNumbers = dodger.style.bottom.replace("px", "");
  var bottom = parseInt(bottomNumbers, 10);
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);


    dodger.style.bottom = `${bottom - 3}px`;
    dodger.style.left = `${left + 3}px`;
}

function moveDodgerDL() {
  var bottomNumbers = dodger.style.bottom.replace("px", "");
  var bottom = parseInt(bottomNumbers, 10);
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);


    dodger.style.bottom = `${bottom - 3}px`;
    dodger.style.left = `${left - 3}px`;
}




















let keys = {"up" : false, "down" : false, "right" : false, "left" : false};

document.addEventListener("keydown", function(e) {
  console.log(e.key)
  if(e.key === "ArrowUp"){
    keys.up = true
  }
  if(e.key === "ArrowRight"){
    keys.right = true;
  }
  if(e.key === "ArrowLeft"){
    keys.left = true;
  }
  if(e.key === "ArrowDown"){
    keys.down = true;
  }

  if (keys.up === true && keys.right === true && keys.left === false && keys.down === false){
    moveDodgerUR();
  }
  if (keys.up === true && keys.right === false && keys.left === true && keys.down === false){
    moveDodgerUL();
  }
  if (keys.up === false && keys.right === true && keys.left === false && keys.down === true){
    moveDodgerDR();
  }
  if (keys.up === false && keys.right === false && keys.left === true && keys.down === true){
    moveDodgerDL();
  }
    console.log(keys);
});

document.addEventListener("keyup", function(e){
  keys = {"up" : false, "down" : false, "right" : false, "left" : false};

});

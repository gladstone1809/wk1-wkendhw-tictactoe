
//basic version is first - it is still a bit kinky - i seem to just make it worse when i try to fix it!
// my attempt at the intelligent version follows (currently commented out) - close but not quite there yet

var humanChoices = [];
var computerChoices = [];
var availablePositions = [1, 2, 3, 
                          4, 5, 6,
                          7, 8, 9];

var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");
var square5 = document.getElementById("square5");
var square6 = document.getElementById("square6");
var square7 = document.getElementById("square7");
var square8 = document.getElementById("square8");
var square9 = document.getElementById("square9");

square1.addEventListener('click', function() {
  availablePositions.splice(0, 1, 'X');
  humanChoices.push(1);
  this.innerHTML = 'X';
  square1.className = square1.className + "-X";
  console.log('clicked');
  computerPlay();
});

square2.addEventListener('click', function() {
  availablePositions.splice(1, 1, 'X');
  humanChoices.push(2);
  this.innerHTML = 'X';
  square2.className = square2.className + "-X";
  console.log('clicked');
  computerPlay();
});

square3.addEventListener('click', function() {
  availablePositions.splice(2, 1, 'X');
  humanChoices.push(3);
  this.innerHTML = 'X';
  square3.className = square3.className + "-X";
  console.log('clicked');
  computerPlay();
});

square4.addEventListener('click', function() {
  availablePositions.splice(3, 1, 'X');
  humanChoices.push(4);
  this.innerHTML = 'X';
  square4.className = square4.className + "-X";
  console.log('clicked');
  computerPlay();
});

square5.addEventListener('click', function() {
  availablePositions.splice(4, 1, 'X');
  humanChoices.push(5);
  this.innerHTML = 'X';
  square5.className = square5.className + "-X";
  console.log('clicked');
  computerPlay();
});

square6.addEventListener('click', function() {
  availablePositions.splice(5, 1, 'X');
  humanChoices.push(6);
  this.innerHTML = 'X';
  square6.className = square6.className + "-X";
  console.log('clicked');
  computerPlay();
});

square7.addEventListener('click', function() {
  availablePositions.splice(6, 1, 'X');
  humanChoices.push(7);
  this.innerHTML = 'X';
  square7.className = square7.className + "-X";
  console.log('clicked');
  computerPlay();
});

square8.addEventListener('click', function() {
  availablePositions.splice(7, 1, 'X');
  humanChoices.push(8);
  this.innerHTML = 'X';
  square8.className = square8.className + "-X";
  console.log('clicked');
  computerPlay();
});

square9.addEventListener('click', function() {
  availablePositions.splice(8, 1, 'X');
  humanChoices.push(9);
  this.innerHTML = 'X';
  square9.className = square9.className + "-X";
  console.log('clicked');
  computerPlay();
});

//basic random computer version

function computerPlay() {
 
  var compMove = availablePositions[Math.round(((availablePositions.length) * Math.random())-0.5)];
 
  var i = availablePositions.indexOf(compMove);
      availablePositions.splice(i, 1, 'O');
      computerChoices.push(compMove);
 
  if (compMove == "X") {
        computerPlay();
  }
  else if (compMove == "O") {
        computerPlay();
  }
  else if (compMove === 1) {
        square1.innerHTML = 'O';
        square1.className = square1.className + "-O";
        console.log('comp');
        getWinner();
 }
  else if (compMove === 2) {
        square2.innerHTML = 'O';
        square2.className = square2.className + "-O";
        console.log('comp');
        getWinner();
 }
  else if (compMove === 3) {
        square3.innerHTML = 'O';
        square3.className = square3.className + "-O";
        console.log('comp');
        getWinner();
}
  else if (compMove === 4) {
        square4.innerHTML = 'O';
        square4.className = square4.className + "-O";
        console.log('comp');
        getWinner();
}
  else if (compMove === 5) {
        square5.innerHTML = 'O';
        square5.className = square5.className + "-O";
        console.log('comp');
        getWinner();
}
  else if (compMove === 6) {
        square6.innerHTML = 'O';
        square6.className = square6.className + "-O";
        console.log('comp');
        getWinner();
}
  else if (compMove === 7) {
        square7.innerHTML = 'O';
        square7.className = square7.className + "-O";
        console.log('comp');
        getWinner();
}
  else if (compMove === 8) {
        square8.innerHTML = 'O';
        square8.className = square8.className + "-O";
        console.log('comp');
        getWinner();
}
  else if (compMove === 9) {
        square9.innerHTML = 'O';
        square9.className = square9.className + "-O";
        console.log('comp');
        getWinner();
}}

function getWinner() {
  if ((availablePositions[0] == "X") && (availablePositions[1] == "X") && (availablePositions[2] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[3] == "X") && (availablePositions[4] == "X") && (availablePositions[5] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[6] == "X") && (availablePositions[7] == "X") && (availablePositions[8] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[0] == "X") && (availablePositions[3] == "X") && (availablePositions[6] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[1] == "X") && (availablePositions[4] == "X") && (availablePositions[6] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[2] == "X") && (availablePositions[5] == "X") && (availablePositions[8] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[0] == "X") && (availablePositions[3] == "X") && (availablePositions[6] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[0] == "X") && (availablePositions[4] == "X") && (availablePositions[8] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[6] == "X") && (availablePositions[4] == "X") && (availablePositions[2] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[0] == "O") && (availablePositions[1] == "O") && (availablePositions[2] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[3] == "O") && (availablePositions[4] == "O") && (availablePositions[5] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[6] == "O") && (availablePositions[7] == "O") && (availablePositions[8] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[0] == "O") && (availablePositions[3] == "O") && (availablePositions[6] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[1] == "O") && (availablePositions[4] == "O") && (availablePositions[6] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[2] == "O") && (availablePositions[5] == "O") && (availablePositions[8] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[0] == "O") && (availablePositions[3] == "O") && (availablePositions[6] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[0] == "O") && (availablePositions[4] == "O") && (availablePositions[8] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[6] == "O") && (availablePositions[4] == "O") && (availablePositions[2] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
}

//attempt at intel version

/*

var humanChoices = [];
var computerChoices = [];
var availablePositions = [1, 2, 3, 
                          4, 5, 6,
                          7, 8, 9];

//turns only for intel version
//var turn = 0;

var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");
var square5 = document.getElementById("square5");
var square6 = document.getElementById("square6");
var square7 = document.getElementById("square7");
var square8 = document.getElementById("square8");
var square9 = document.getElementById("square9");

square1.addEventListener('click', function() {
  availablePositions.splice(0, 1, 'X');
  humanChoices.push(1);
  this.innerHTML = 'X';
  square1.className = square1.className + "-X";
  turn = turn+1;
  console.log('clicked');
  intel();
});

square2.addEventListener('click', function() {
  availablePositions.splice(1, 1, 'X');
  humanChoices.push(2);
  this.innerHTML = 'X';
  square2.className = square2.className + "-X";
  turn = turn+1;
  console.log('clicked');
  intel();
});

square3.addEventListener('click', function() {
  availablePositions.splice(2, 1, 'X');
  humanChoices.push(3);
  this.innerHTML = 'X';
  square3.className = square3.className + "-X";
  turn = turn+1;
  console.log('clicked');
  intel();
});

square4.addEventListener('click', function() {
  availablePositions.splice(3, 1, 'X');
  humanChoices.push(4);
  this.innerHTML = 'X';
  square4.className = square4.className + "-X";
  turn = turn+1;
  console.log('clicked');
  intel();
});

square5.addEventListener('click', function() {
  availablePositions.splice(4, 1, 'X');
  humanChoices.push(5);
  this.innerHTML = 'X';
  square5.className = square5.className + "-X";
  turn = turn+1;
  console.log('clicked');
  intel();
});

square6.addEventListener('click', function() {
  availablePositions.splice(5, 1, 'X');
  humanChoices.push(6);
  this.innerHTML = 'X';
  square6.className = square6.className + "-X";
  turn = turn+1;
  console.log('clicked');
  intel();
});

square7.addEventListener('click', function() {
  availablePositions.splice(6, 1, 'X');
  humanChoices.push(7);
  this.innerHTML = 'X';
  square7.className = square7.className + "-X";
  turn = turn+1;
  console.log('clicked');
  intel();
});

square8.addEventListener('click', function() {
  availablePositions.splice(7, 1, 'X');
  humanChoices.push(8);
  this.innerHTML = 'X';
  square8.className = square8.className + "-X";
  turn = turn+1;
  console.log('clicked');
  intel();
});

square9.addEventListener('click', function() {
  availablePositions.splice(8, 1, 'X');
  humanChoices.push(9);
  this.innerHTML = 'X';
  square9.className = square9.className + "-X";
  turn = turn+1;
  console.log('clicked');
  intel();
});

//my attempt at giving the computer logic -- it kinda works but not quite

function intel() {
  if(turn == 1 && availablePositions[0] == "X" || 
    turn == 1 && availablePositions[1] == "X" || 
    turn == 1 && availablePositions[2] == "X" || 
    turn == 1 && availablePositions[5] == "X" || 
    turn == 1 && availablePositions[3] == "X" || 
    turn == 1 && availablePositions[6] == "X" || 
    turn == 1 && availablePositions[7] == "X" || 
    turn == 1 && availablePositions[8] == "X") { 
    availablePositions.splice(4, 1, 'O');
    humanChoices.push(5);
    square5.innerHTML = 'O';
    square5.className = square5.className + "-O";
    turn = turn+1;
    console.log('comp');
  }
  else if(turn == 1 && availablePositions[4] == "X") {
    computerPlay();
    console.log('comp');
  }
  else if(turn > 1 && availablePositions[2] != "X" && availablePositions [4] == "O" && availablePositions[6] == "O" ||
          turn > 1 && availablePositions[2] != "X" && availablePositions[0] == "O" && availablePositions[1] == "O" ||
          turn > 1 && availablePositions[2] != "X" && availablePositions[5] == "O" && availablePositions[8] == "O" ||
          turn > 1 && availablePositions[2] != "X" && availablePositions[0] == "O" && availablePositions[1] != "X" ||
          turn > 1 && availablePositions[2] != "X" && availablePositions[1] == "O" && availablePositions[0] != "X" ||
          turn > 1 && availablePositions[2] != "X" && availablePositions[5] == "O" && availablePositions[2] != "X" ||
          turn > 1 && availablePositions[2] != "X" && availablePositions[8] == "O" && availablePositions[5] != "X")  {
    availablePositions.splice(2, 1, 'O');
    computerChoices.push(3);
    square3.innerHTML = 'O';
    square3.className = square3.className + "-O";
    turn = turn+1;
    console.log('comp');
    getWinner();
  }
  else if(turn > 1 && availablePositions[6] != "X" && availablePositions [4] == "O" && availablePositions[2] == "O" ||
          turn > 1 && availablePositions[6] != "X" && availablePositions[3] == "O" && availablePositions[0] == "O" ||
          turn > 1 && availablePositions[6] != "X" && availablePositions[7] == "O" && availablePositions[8] == "O" ||
          turn > 1 && availablePositions[6] != "X" && availablePositions[0] == "O" && availablePositions[3] != "X" ||
          turn > 1 && availablePositions[6] != "X" && availablePositions[1] == "O" && availablePositions[0] != "X" ||
          turn > 1 && availablePositions[6] != "X" && availablePositions[5] == "O" && availablePositions[2] != "X" ||
          turn > 1 && availablePositions[6] != "X" && availablePositions[8] == "O" && availablePositions[5] != "X")  {
    availablePositions.splice(6, 1, 'O');
    computerChoices.push(7);
    square7.innerHTML = 'O';
    square7.className = square5.className + "-O";
    turn = turn+1;
    console.log('comp');
    getWinner();
  }
  else if(turn > 1 && availablePositions[8] != "X" && availablePositions [4] == "O" && availablePositions[0] == "O" ||
          turn > 1 && availablePositions[8] != "X" && availablePositions[5] == "O" && availablePositions[2] == "O" ||
          turn > 1 && availablePositions[8] != "X" && availablePositions[7] == "O" && availablePositions[6] == "O" ||
          turn > 1 && availablePositions[8] != "X" && availablePositions[2] == "O" && availablePositions[5] != "X" ||
          turn > 1 && availablePositions[8] != "X" && availablePositions[5] == "O" && availablePositions[2] != "X" ||
          turn > 1 && availablePositions[8] != "X" && availablePositions[6] == "O" && availablePositions[7] != "X" ||
          turn > 1 && availablePositions[8] != "X" && availablePositions[7] == "O" && availablePositions[6] != "X")  {
    availablePositions.splice(8, 1, 'O');
    computerChoices.push(9);
    square9.innerHTML = 'O';
    square9.className = square9.className + "-O";
    turn = turn+1;
    console.log('comp');
    getWinner();
  }
  else if(turn > 1 && availablePositions[0] != "X" && availablePositions [4] == "O" && availablePositions[8] == "O" ||
          turn > 1 && availablePositions[0] != "X" && availablePositions[1] == "O" && availablePositions[2] == "O" ||
          turn > 1 && availablePositions[0] != "X" && availablePositions[3] == "O" && availablePositions[6] == "O" ||
          turn > 1 && availablePositions[0] != "X" && availablePositions[2] == "O" && availablePositions[1] != "X" ||
          turn > 1 && availablePositions[0] != "X" && availablePositions[1] == "O" && availablePositions[2] != "X" ||
          turn > 1 && availablePositions[0] != "X" && availablePositions[6] == "O" && availablePositions[3] != "X" ||
          turn > 1 && availablePositions[0] != "X" && availablePositions[3] == "O" && availablePositions[6] != "X")  {
    availablePositions.splice(0, 1, 'O');
    computerChoices.push(1);
    square1.innerHTML = 'O';
    square1.className = square1.className + "-O";
    turn = turn+1;
    console.log('comp');
    getWinner();
  }
  else if(turn > 1 && availablePositions[1] != "X" && availablePositions [4] == "O" && availablePositions[7] == "O" ||
          turn > 1 && availablePositions[1] != "X" && availablePositions[0] == "O" && availablePositions[2] == "O")  {
    availablePositions.splice(1, 1, 'O');
    computerChoices.push(2);
    square2.innerHTML = 'O';
    square2.className = square1.className + "-O";
    turn = turn+1;
    console.log('comp');
    getWinner();
  }
  else if(turn > 1 && availablePositions[5] != "X" && availablePositions [4] == "O" && availablePositions[3] == "O" ||
          turn > 1 && availablePositions[5] != "X" && availablePositions[2] == "O" && availablePositions[8] == "O")  {
    availablePositions.splice(5, 1, 'O');
    computerChoices.push(6);
    square6.innerHTML = 'O';
    square6.className = square1.className + "-O";
    turn = turn+1;
    console.log('comp');
    getWinner();
  }
  else if(turn > 1 && availablePositions[7] != "X" && availablePositions [4] == "O" && availablePositions[1] == "O" ||
          turn > 1 && availablePositions[7] != "X" && availablePositions[6] == "O" && availablePositions[8] == "O")  {
    availablePositions.splice(7, 1, 'O');
    computerChoices.push(8);
    square8.innerHTML = 'O';
    square8.className = square1.className + "-O";
    turn = turn+1;
    console.log('comp');
    getWinner();
  }
  else if(turn > 1 && availablePositions[3] != "X" && availablePositions [4] == "O" && availablePositions[5] == "O" ||
          turn > 1 && availablePositions[3] != "X" && availablePositions[0] == "O" && availablePositions[6] == "O")  {
    availablePositions.splice(4, 1, 'O');
    computerChoices.push(3);
    square3.innerHTML = 'O';
    square3.className = square1.className + "-O";
    turn = turn+1;
    console.log('comp');
    getWinner();
  }
    else {
      computerPlay();
      getWinner();
    }
}

//basic random computer version

function computerPlay() {
  var compMove = availablePositions[Math.round(((availablePositions.length) * Math.random())-0.5)];
  var i = availablePositions.indexOf(compMove);
      availablePositions.splice(i, 1, 'O');
      computerChoices.push(compMove);
  if (compMove === "X") {
        computerPlay();
  }
  else if (compMove === "O") {
        computerPlay();
  }
  else if (compMove === 1) {
        square1.innerHTML = 'O';
        square1.className = square1.className + "-O";
        turn = turn+1;
        console.log('comp');
        getWinner();
 }
  else if (compMove === 2) {
        square2.innerHTML = 'O';
        square2.className = square2.className + "-O";
        turn = turn+1;
        console.log('comp');
        getWinner();
 }
  else if (compMove === 3) {
        square3.innerHTML = 'O';
        square3.className = square3.className + "-O";
        turn = turn+1;
        console.log('comp');
        getWinner();
}
  else if (compMove === 4) {
        square4.innerHTML = 'O';
        square4.className = square4.className + "-O";
        turn = turn+1;
        console.log('comp');
        getWinner();
}
  else if (compMove === 5) {
        square5.innerHTML = 'O';
        square5.className = square5.className + "-O";
        turn = turn+1;
        console.log('comp');
        getWinner();
}
  else if (compMove === 6) {
        square6.innerHTML = 'O';
        square6.className = square6.className + "-O";
        turn = turn+1;
        console.log('comp');
        getWinner();
}
  else if (compMove === 7) {
        square7.innerHTML = 'O';
        square7.className = square7.className + "-O";
        turn = turn+1;
        console.log('comp');
        getWinner();
}
  else if (compMove === 8) {
        square8.innerHTML = 'O';
        square8.className = square8.className + "-O";
        turn = turn+1;
        console.log('comp');
        getWinner();
}
  else if (compMove === 9) {
        square9.innerHTML = 'O';
        square9.className = square9.className + "-O";
        turn = turn+1;
        console.log('comp');
        getWinner();
}}

function getWinner() {
  if ((availablePositions[0] == "X") && (availablePositions[1] == "X") && (availablePositions[2] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[3] == "X") && (availablePositions[4] == "X") && (availablePositions[5] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[6] == "X") && (availablePositions[7] == "X") && (availablePositions[8] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[0] == "X") && (availablePositions[3] == "X") && (availablePositions[6] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[1] == "X") && (availablePositions[4] == "X") && (availablePositions[6] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[2] == "X") && (availablePositions[5] == "X") && (availablePositions[8] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[0] == "X") && (availablePositions[3] == "X") && (availablePositions[6] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[0] == "X") && (availablePositions[4] == "X") && (availablePositions[8] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[6] == "X") && (availablePositions[4] == "X") && (availablePositions[2] == "X")) {
    console.log("X Wins");
    alert("X Wins");
  }
  else if ((availablePositions[0] == "O") && (availablePositions[1] == "O") && (availablePositions[2] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[3] == "O") && (availablePositions[4] == "O") && (availablePositions[5] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[6] == "O") && (availablePositions[7] == "O") && (availablePositions[8] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[0] == "O") && (availablePositions[3] == "O") && (availablePositions[6] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[1] == "O") && (availablePositions[4] == "O") && (availablePositions[6] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[2] == "O") && (availablePositions[5] == "O") && (availablePositions[8] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[0] == "O") && (availablePositions[3] == "O") && (availablePositions[6] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[0] == "O") && (availablePositions[4] == "O") && (availablePositions[8] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
  else if ((availablePositions[6] == "O") && (availablePositions[4] == "O") && (availablePositions[2] == "O")) {
    console.log("O Wins");
    alert("O Wins");
  }
}

*/
var resetButton = document.getElementById("reset");

resetButton.addEventListener('click', function() {
  resetGame();
});

function resetGame() {
  availablePositions.splice(0, 1, 1);
  availablePositions.splice(1, 1, 2);
  availablePositions.splice(2, 1, 3);
  availablePositions.splice(3, 1, 4);
  availablePositions.splice(4, 1, 5);
  availablePositions.splice(5, 1, 6);
  availablePositions.splice(6, 1, 7);
  availablePositions.splice(7, 1, 8);
  availablePositions.splice(8, 1, 9);
  square1.className = "box";
  square2.className = "box";
  square3.className = "box";
  square4.className = "box";
  square5.className = "box";
  square6.className = "box";
  square7.className = "box";
  square8.className = "box";
  square9.className = "box";
  square1.innerHTML = '';
  square2.innerHTML = '';
  square3.innerHTML = '';
  square4.innerHTML = '';
  square5.innerHTML = '';
  square6.innerHTML = '';
  square7.innerHTML = '';
  square8.innerHTML = '';
  square9.innerHTML = '';
}

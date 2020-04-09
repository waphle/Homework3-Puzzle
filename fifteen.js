var ids = [
    "one",      "two",      "three",   "four",
    "five",     "six",      "seven",   "eight",
    "nine",     "ten",      "eleven",  "twelve",
    "thirteen", "fourteen", "fifteen", ""
];

var ids_numeric = {
    "one":1,       "two":2,       "three":3,    "four":4,
    "five":5,      "six":6,       "seven":7,    "eight":8,
    "nine":9,      "ten":10,      "eleven":11,  "twelve":12,
    "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16
};

var movement = [
    [0, 1, 1, 0], //0: one
    [0, 1, 1, 1], //1: two
    [0, 1, 1, 1], //2: three
    [0, 0, 1, 1], //3: four
    [1, 1, 1, 0], //4: five
    [1, 1, 1, 1], //5: six
    [1, 1, 1, 1], //6: seven
    [1, 0, 1, 1], //7: eight
    [1, 1, 1, 0], //8: nine
    [1, 1, 1, 1], //9: ten
    [1, 1, 1, 1], //10: eleven
    [1, 0, 1, 1], //11: twelve
    [1, 1, 0, 0], //12: thirteen
    [1, 1, 0, 1], //13: fourteen
    [1, 1, 0, 1], //14: fifteen
    [1, 0, 0, 1]  //15: sixteen
];

var backgroundImgLink;

function start() {
  var background_id = Math.floor((Math.random() * 4));
  backgroundImgLink = background[background_id];

  document.getElementById(background[background_id]).selected = true;

  for (var i = 0; i < ids.length - 1; i++) {
    document.getElementById(ids[i]).className = "puzzlepiece " + background[background_id];
  }
}

function displayBoard() {
  document.getElementById("puzzlearea").innerHTML = "";

  for (var i = 0; i < shuffled.length; i++) {
    if (shuffled[i] == "") {
      document.getElementById("puzzlearea").innerHTML += '<div id="sixteen" class="puzzlepiece"></div>';
    }
    else {
      var id_name = shuffled[i];
      document.getElementById("puzzlearea").innerHTML += '<div id="' + shuffled[i] + '" class="puzzlepiece' + " " + backgroundImgLink + '">' + ids_numeric[id_name] + '</div>';
    }
  }
}

var shuffled = ids.slice();

function shuffle() {
  shuffled = ids.slice();
  var pieces = 15;

  for (var i = 0; i < 100; i++) {
    var movement_id = Math.floor((Math.random() * 4));

    while(movement[pieces][movement_id] != 1) {
      movement_id = Math.floor((Math.random() * 4));
    }

    var move_to;
    switch(movement_id) {
      case 0: // subtract 4 to go to the top
      move_to = pieces - 4;
      break;
      case 2: // subtract 4 to go to the bottom
      move_to = pieces + 4;
      break;
      case 3: // subtract 1 to go to the left
      move_to = pieces - 1;
      break;
      case 1:// add 1 to go to the right
      move_to = pieces + 1;
      break;
    }

    // swap sixteen and move_to
    var temp = shuffled[pieces];
    shuffled[pieces] = shuffled[move_to];
    shuffled[move_to] = temp;

    pieces = move_to;
  }
  displayBoard();
}

$(function(event){

  var cells = $("td");
  function xVictory() {
  var acrssScre = 0;
  var dwnScre = 0;
  var diagScre = 0;
  for (i = 0; i < 9; i += 3){  // Checking for across victory
    acrssScre = 0;
    for (j = 0; j < 3; j++){
      if (cells[i+j].className == "X"){
      acrssScre++;
    };
      if (acrssScre == 3){
        console.log("X wins!");
      };
    };
  };

  for (i = 0; i < 3; i += 1){  // Checking for down victory
    dwnScre = 0;
    for (j = 0; j < 9; j += 3){
      if (cells[i+j].className == "X"){
        dwnScre++
      };
      if (dwnScre == 3){
        console.log("X wins!");
      };
    };
  };

  for (i = 0; i < 9; i += 4){  // Checking for diagonal-forward victory
    if (cells[i].className == "X") {
      diagScre+= 1 ;
      console.log(diagScre);
    };
    if (diagScre == 3){
      console.log("X wins!");
    };

  };
  diagScre = 0;

  for (i = 2; i < 7; i += 2){  // Checking for diagonal-backward victory
    if (cells[i].className == "X") {
      diagScre+= 1 ;
      console.log(diagScre);
    };
    if (diagScre == 3){
      console.log("X wins!");
    };

  };
  diagScre = 0;
}
  function oVictory() {
  var acrssScre = 0;
  var dwnScre = 0;
  var diagScre = 0;
  for (i = 0; i < 9; i += 3){  // Checking for across victory
    acrssScre = 0;
    for (j = 0; j < 3; j++){
      if (cells[i+j].className == "O"){
      acrssScre++;
    };
      if (acrssScre == 3){
        console.log("O wins!");
      };
    };
  };

  for (i = 0; i < 3; i += 1){  // Checking for down victory
    dwnScre = 0;
    for (j = 0; j < 9; j += 3){
      if (cells[i+j].className == "O"){
        dwnScre++
      };
      if (dwnScre == 3){
        console.log("O wins!");
      };
    };
  };

  for (i = 0; i < 9; i += 4){  // Checking for diagonal-forward victory
    if (cells[i].className == "O") {
      diagScre+= 1 ;
      console.log(diagScre);
    };
    if (diagScre == 3){
      console.log("O wins!");
    };

  };
  diagScre = 0;

  for (i = 2; i < 7; i += 2){  // Checking for diagonal-backward victory
    if (cells[i].className == "O") {
      diagScre+= 1 ;
      console.log(diagScre);
    };
    if (diagScre == 3){
      console.log("O wins!");
    };

  };
  diagScre = 0;
}

  function turns(){
    var turn = 0;

    $(cells).each(function(index, cell){
      $(cell).on("click", function(){
        if(this.className == ""){
          if (turn%2 == 0){     // X turn
            this.className = "X"
            this.innerHTML = "X"
            xVictory();  // Checks to see if X has won
            $(".playerTurn").html("It is O's turn");
            turn += 1

            console.log(this.className);
          }
          else if (turn%2 == 1){ // O turn
            this.className = "O";
            this.innerHTML = "O";
            oVictory();   //Checks to see if O has won
            $(".playerTurn").html("It is X's turn");
            turn += 1;
            console.log(this.className);
          }
        }
      })
    })
  }

  turns();





})

$(function(event){

  var cells = $("td");

  function turns(){
    var turn = 0;

    $(cells).each(function(index, cell){
      $(cell).on("click", function(){
        if(this.className == ""){
          if (turn%2 == 0){
            this.className = "X"
            this.innerHTML = "X"
            xVictory();
            $(".playerTurn").html("It is O's turn");
            turn += 1

            console.log(this.className);
          }
          else if (turn%2 == 1){
            this.className = "O";
            this.innerHTML = "O"
            $(".playerTurn").html("It is X's turn");
            turn += 1;
            console.log(this.className);
          }
        }
      })
    })
  }

  turns();

function xVictory() {
  var acrssScre = 0;
  var dwnScre = 0;
  var diagScre = 0;
  for (i = 0; i < 9; i += 3){  // Checking for across victory
    acrssScre = 0;
    for (j = 0; j < 3; j++){
      if (cells[i+j].className == "X")
      acrssScre++;
      console.log(acrssScre);
    }
  }

}
xVictory()




})

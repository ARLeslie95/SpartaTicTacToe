$(function(event){
  function turns(){
    var cells = $("td");
    var turn = 0;

    $(cells).each(function(index, cell){
      $(cell).on("click", function(){
        if(this.className == ""){
          if (turn%2 == 0){
            this.className = "X"
            this.innerHTML = "X"
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

})

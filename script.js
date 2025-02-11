var counter = 0;
const board = [0,0,0,0,0,0,0,0,0];

function winner(board){
    if (
        (board[0] == "O" && board[1] == "O" && board[2] == "O") ||
        (board[3] == "O" && board[4] == "O" && board[5] == "O") ||
        (board[6] == "O" && board[7] == "O" && board[8] == "O") ||
        (board[0] == "O" && board[3] == "O" && board[6] == "O") ||
        (board[1] == "O" && board[4] == "O" && board[7] == "O") ||
        (board[2] == "O" && board[5] == "O" && board[8] == "O") ||
        (board[0] == "O" && board[4] == "O" && board[8] == "O") ||
        (board[2] == "O" && board[4] == "O" && board[6] == "O")
    ) {
        return "O";
    }

    if (
        (board[0] == "X" && board[1] == "X" && board[2] == "X") ||
        (board[3] == "X" && board[4] == "X" && board[5] == "X") ||
        (board[6] == "X" && board[7] == "X" && board[8] == "X") ||
        (board[0] == "X" && board[3] == "X" && board[6] == "X") ||
        (board[1] == "X" && board[4] == "X" && board[7] == "X") ||
        (board[2] == "X" && board[5] == "X" && board[8] == "X") ||
        (board[0] == "X" && board[4] == "X" && board[8] == "X") ||
        (board[2] == "X" && board[4] == "X" && board[6] == "X")
    ) {
        return "X";
    }

    return ""; 
}


function game(){

    while(counter < 9){
        if(counter%2 == 0){
            var userin = prompt("(O) Enter your position: ");
            if(userin < 9 && userin >= 0 && board[userin] == 0){
                
                board[userin] = "O";
            }
            else{
                alert("Wrong input");
            }
            
        }
        else{
            var userin = prompt("(X) Enter your position: ");
            if(userin < 9 && userin >= 0 && board[userin] == 0){
                
                board[userin] = "X";
            }
            
    
        }
        console.log(board);

        
        let win = winner(board);
        if(win != ""){
            console.log(win+"Wins!");
            return;
        }
        
        counter++;
    
    }
    console.log("TIE");
    return;
}
game();
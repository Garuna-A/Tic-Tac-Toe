var counter = 0;
const board = [0,0,0,0,0,0,0,0,0];

const blocks = document.querySelectorAll(".column");
const result = document.querySelector("#result");

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

blocks.forEach(block =>{
    block.addEventListener('click',(event)=>{
        if(block.innerHTML == ""){
            if(counter%2 == 0){
                block.innerHTML = "O";
                var id = parseInt(block.id);
                board[id] = "O";
                console.log(id);
            }
            else {
                block.innerHTML = "X";
                var id = parseInt(block.id);
                board[id] = "X";
                console.log(id);
            }
            counter++;

            let win = winner(board);
            if(win){
                result.innerHTML = win + " Wins!";
                blocks.forEach(b => b.style.pointerEvents = "none");
            }
            else if(counter == 9){
                result.innerHTML = "Its's a TIE!";
            }
        }
    });
});

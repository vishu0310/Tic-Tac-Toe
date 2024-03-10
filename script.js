let currentPlayer = "X";
let arr = Array(9).fill(null);
const resultbanner = document.getElementById("id");
const turn = document.getElementById("turn");
console.log(turn);
const container = document.getElementsByClassName('container');

function checkWinner(){
    if(
        (arr[0]!== null && arr[0]== arr[1] && arr[1] ==arr[2]) ||
        (arr[3]!== null && arr[3]== arr[4] && arr[4] ==arr[5]) ||
        (arr[6]!== null && arr[6]== arr[7] && arr[7] ==arr[8]) ||
        (arr[0]!== null && arr[0]== arr[3] && arr[3] ==arr[6]) ||
        (arr[1]!== null && arr[1]== arr[4] && arr[4] ==arr[7]) ||
        (arr[2]!== null && arr[2]== arr[5] && arr[5] ==arr[8]) ||
        (arr[0]!== null && arr[0]== arr[4] && arr[4] ==arr[8]) ||
        (arr[3]!== null && arr[2]== arr[4] && arr[4] ==arr[6])
    ){
        // resultbanner.innerText = `Wohoo! ${currentPlayer} won!`;
        // return;
        resultText.innerText = `Congratulations! ${currentPlayer} wins!`;
            resultPopup.style.display = "block";
            return;
    }
    // if(!arr.some(e => e === null)){
    //     resultbanner.innerText= `Its a DRAW!`;
    //     return;
    // }
    if(!arr.some(e => e === null)){
        resultText.innerText = `It's a draw!`;
        resultPopup.style.display = "block";
        return;
    }
    
}

function handleClick(el){

    const id = Number(el.id);
    if(arr[id] !== null) return; //dobara click krne pr change nah ho
    if(currentPlayer === 'X'){
        turn.innerText= `O`;
    }else{
        turn.innerText= `X`;
    }
    
    arr[id]= currentPlayer;
    el.innerText =currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O": "X";
}

function refreshGame() {
    // Reload the current page
    location.reload();
  }

  // Attach event listener to the refresh button
  document.getElementById('clickButton').addEventListener('click', refreshGame);

  function hidePopup() {
    resultPopup.style.display = "none";
}


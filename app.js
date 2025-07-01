
let boxes = document.querySelectorAll('.box'); //selects the box and the resetBTn on which the operation will carry out 
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector('.msg-container');

let playerO = true; //playero has default value as true, which means playero will start first 

const winPatterns = [ //an array of the winning patterns 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
    [6, 7, 8],
    [2, 5, 8],
    [3, 4, 5],
    [1, 4, 7],
];

console.log("the btn was clicked");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("the btn was clicked!");
        if (playerO) {
            box.innerText = "O"; //set the value to 0
            playerO = false; //enable turn for the player X 
        } else {
            box.innerText = "X"; //set the value to X
            playerO = true;
        }
        box.disabled = true;//disable the box after the for loop (i.e afte rit finishes running once)
        checkWinner(); //call the checkwinner fucntion to deduce the winner
    });
});


const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText; //store the inner text value in posn1, 2 and 3 resp.
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;


        if (pos1 != "" && pos2 != "" && pos3 != "") { //make sure no place shld be empty 
            if (pos1 === pos2 && pos1 === pos3) { //compare all the three positions 
                console.log('Congratulations!!, the winner is', pos1);
                msg.innerText = `Congratulations!! The winner is player ${pos1}`;
                disableBtn(); //call the disable function 
            }
        }

    }
}

const disableBtn = () => { //disable the buttons after one game 
    for (let box of boxes) {
        box.disabled = true;
    }
}

const reset = () => {
    playerO = true;
    enableBtn();
}

const enableBtn = () => { //enable the buttons after the user presses the reset button
    for (let box of boxes) {
        box.disabled = false; //enable the button 
        msg.innerText = "";
        box.innerText = ""; //remove the inner text inside the boxes 
    }
}

resetBtn.addEventListener("click", reset); //call the reset function 



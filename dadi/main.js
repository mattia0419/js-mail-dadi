let numberUser = document.getElementById("number-user");
let numberComputer = document.getElementById("number-computer");
const buttonGenerator = document.getElementById("button-generator");


buttonGenerator.addEventListener("click", function () {
    let result = "";
    let numberUserGenerated = Math.round(Math.random()*5)+1;
    numberUser.innerHTML = numberUserGenerated;
    let numberComputerGenerated = Math.round(Math.random()*5)+1;
    numberComputer.innerHTML = numberComputerGenerated;
    const userWinner =document.getElementById("winner");
    const userLoser =document.getElementById("loser");
    const draw =document.getElementById("draw");
    if(numberUserGenerated > numberComputerGenerated){
        result = userWinner;
        userWinner.classList.remove("d-none");
        draw.classList.add("d-none");
        userLoser.classList.add("d-none"); 
    }
    else if (numberUserGenerated < numberComputerGenerated) {
        result = userLoser;
        userLoser.classList.remove("d-none");
        userWinner.classList.add("d-none");
        draw.classList.add("d-none"); 
    }
    else{
        result = draw;
        draw.classList.remove("d-none");
        userWinner.classList.add("d-none");
        userLoser.classList.add("d-none");
    }       
})
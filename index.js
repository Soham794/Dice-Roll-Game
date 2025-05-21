function rollit(){
    let randomNumber1 = Math.ceil(Math.random() * 6);
    let randomNumber2 = Math.ceil(Math.random() * 6);

    let dice1 = "./images/dice" + randomNumber1 + ".png";
    let dice2 = "./images/dice" + randomNumber2 + ".png";

    document.querySelector("img.img1").setAttribute("src", dice1);
    document.querySelector("img.img2").setAttribute("src", dice2);

    let heading;
    if(randomNumber1 > randomNumber2){
        heading = "🚩 Player 1 Wins!";
    }
    else if(randomNumber1 < randomNumber2){
        heading = "Player 2 Wins! 🚩"
    }
    else{
        heading = "Its a Draw!";
    }
    document.querySelector("h1").textContent = heading;
}
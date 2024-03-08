
window.onload = function() {
     var pack = document.getElementById("pokemon-pack");
     pack.addEventListener("click",openPack);
};

function openPack() {
    
    let isOpen = document.getElementById("pokemon-cards-opened");
    while(isOpen.firstChild) {
        isOpen.firstChild.remove();
    }

    for(let i=0;i<=10;i++)
    {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("pokemon-card");

        let pokemonCard = document.createElement("img");
        let num = 1;
        if(i==10) {
            num = randomNumberGenerator(1,16);
        } else {
            num = randomNumberGenerator(17,102);
        }
        pokemonCard.src = "./pokemon-cards/base set (" + num.toString() + ").jpg";
        cardDiv.appendChild(pokemonCard);
        document.getElementById("pokemon-cards-opened").appendChild(cardDiv);
    }
}

function randomNumberGenerator(min,max) {
    return Math.ceil(Math.random()*(max-min) + min);
}
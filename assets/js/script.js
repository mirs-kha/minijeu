var score = 0;
var gagnant = "";
var player = "";
var round = 0;
const choosePersCat = document.querySelector("#cat");
var cat = "cat";
var mouse = "mouse";
var dog = "dog";
const choosePersMouse = document.querySelector("#mouse");
const choosePersDog = document.querySelector("#dog");
const playercard = document.querySelector("#choixjoueur");
const anime = document.querySelector("#robot");
const close = document.querySelector(".jouer");
const cardsChoise = document.querySelector(".div1")

close.addEventListener("click", function () {
    document.querySelector(".modal").style.display = "none";
});

choosePersCat.addEventListener("click", function () {
    if (round <= 2) {
        player = cat;
        playercard.innerHTML = '<img src="feuilleplay.png">';
        playercard.setAttribute("class", "div9 choixjoueursortie2");
        anime.setAttribute("class", "div9 choixjoueursortie");

        cardsChoise.setAttribute("class", "div1 outCard");
        cardsChoise.setAttribute("display", "none");
        


        roundcounter()
    }
    else {
        finPartie();

    }
});
choosePersMouse.addEventListener("click", function () {
    if (round <= 2) {
        player = mouse;
        playercard.innerHTML = '<img src="ciseauxplay.png">';
        playercard.setAttribute("class", "div9 choixjoueursortie2");
        anime.setAttribute("class", "div9 choixjoueursortie");
        cardsChoise.setAttribute("display", "none");

        cardsChoise.setAttribute("class", "div1 outCard");

        roundcounter()
    }
    else {
        finPartie();

    }
});
choosePersDog.addEventListener("click", function () {
    if (round <= 2) {
        player = dog;
        playercard.innerHTML = '<img src="pierreplay.png">';
        playercard.setAttribute("class", "div9 choixjoueursortie2");
        anime.setAttribute("class", "div9 choixjoueursortie");
        cardsChoise.setAttribute("class", "div1 outCard");
        cardsChoise.setAttribute("display", "none");

        roundcounter()
    }
    else {
        finPartie();

    }
});




function roundcounter() {
    if (round <4) {
        computerRandom()
    } else {
        finPartie();

    }
}
function computerRandom() {
    const nul = document.querySelector("#resultat");
    const win = document.querySelector("#resultat");
    const monscore = document.querySelector("#score");
    const loose = document.querySelector("#resultat");
    const roundAffiche = document.querySelector(".round");

    round = round + 1;
    roundAffiche.innerHTML = round;            
    var animaux = ["dog", "cat", "mouse"];
    animaux.forEach((element) => {
        animaux.push(element);
    });
    var values = animaux;
    var valueToUse = values[Math.floor(Math.random() * values.length)];
    var pos = animaux.indexOf(valueToUse);


    if (animaux[pos] == player) {

        nul.innerHTML = "match nul";
        console.log("entrer");
    } else if (

        (player == "dog" && animaux[pos] == "mouse") ||
        (player == "cat" && animaux[pos] == "dog") ||
        (player == "mouse" && animaux[pos] == "cat")
    ) {

        win.innerHTML = "win";
        score = score + 1;
        monscore.innerHTML = score;
        console.log("entrer");
    } else if (

        (animaux[pos] == "dog" && player == "mouse") ||
        (animaux[pos] == "cat" && player == "dog") ||
        (animaux[pos] == "mouse" && player == "cat")
    ) {

        loose.innerHTML = "lose";
        console.log("you lose");

    }
    animaux[0] = '<img src="pierreplay.png">';
    animaux[1] = '<img src="feuilleplay.png">';
    animaux[2] = '<img src="ciseauxplay.png">';
    anime.innerHTML = animaux[pos]; 
    console.log(animaux[pos]);

    setTimeout(attendreAnime, 5000);
}

function finPartie() {
    console.log("entrerzzzzzzzzzzzzzzzzzzz");
    const looser = `<img src="dommagehaut.png">
    
    <p class="dommage">Dommage !</p>
    <button type="button" value = "Rafraîchir" onclick="history.go(0)" class="jouer" style="margin-bottom: 144px;">REJOUER?</button>
    <img class="dommagebas" src="dommagebas.png">
    
    `;
    const finclose = document.querySelector("#finclose");
    const final = "<img src='win.png'>";
    if (score > 1) {
        console.log("finaleeeee");

        document.querySelector("#gagne").innerHTML = final;
    } else {
        document.querySelector("#gagne").innerHTML = looser;
    }
    document.querySelector(".fnpartie").style.display = "block";
    finclose.addEventListener("click", function () {
        document.querySelector(".fnpartie").style.display = "none";
    });
}



function attendreAnime() {
    
    anime.setAttribute("class", "div9 choixjoueursortie2");
    playercard.setAttribute("class", "div9 choixjoueursortie")
    anime.innerHTML = '<img src="anime2.gif" alt="">'
    

    playercard.innerHTML = '<img src="card.png" alt="">'

    cardsChoise.setAttribute("display", "block")


    cardsChoise.setAttribute("class", "div1 inCard");



}

close.addEventListener("click", function () {
    document.querySelector(".modal").style.display = "none";
});


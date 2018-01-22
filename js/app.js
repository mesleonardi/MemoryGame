/*
 * Create a list that holds all of your cards
 */

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

/*
let 

 */
let openedcards = [];
let moveCount = 0;
let totalcardsopened = 0;
createCards();
let restart = document.getElementsByClassName('restart')[0];
let list = document.querySelector('.stars');
let seconds = 1;
let minutes = 0;
let counttimer = document.getElementById("number");
window.setInterval(function(){
    createTime(seconds, minutes);
  
},1000);



restart.addEventListener('click', function(){    
    reset();
});

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length
        , temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//create the cards and we shuffle them
function createCards() {
    let arrayCards = [];
    document.querySelector('.moves').innerHTML = moveCount;    
    let deck = document.querySelector('.deck');
    let deckChildren = document.querySelector('.deck').getElementsByTagName('li');
    for (let i = 0; i < deckChildren.length; i++) {
        arrayCards.push(deckChildren[i]);
    }
    let newArrayCards = shuffle(arrayCards);
    deck.innerHTML = '';
    for (let i = 0; i < newArrayCards.length; i++) {
        deck.appendChild(newArrayCards[i]);
        displayCards(newArrayCards[i]);
    }
}

//add the functionality of the cards
function displayCards(card){
    card.addEventListener('click', function(){
        if(isOpenMatch(this,'match')){
            console.log("CARDS MATCHED, BLOCKED");
        }
        else{
            if(isOpenMatch(this,'open')){
                console.log("This cards is already turned");
            }
            else{
                this.className += ' open show';
                openedcards.push(card);
                if (openedcards.length === 2){
                    setTimeout(function(){
                        checkCards(openedcards);
                        openedcards.splice(0,openedcards.length);                        
                    }, 600);
                }
            }
        }
    });
}

//check if the cards match
function checkCards(cards){
    let carta1 = cards[0].getElementsByTagName('i');
    let carta2 = cards[1].getElementsByTagName('i');
    
    if(carta1[0].className === carta2[0].className){
        cards[0].className = 'card match';
        cards[1].className = 'card match';
        totalcardsopened +=2;
        
    }
    else{
        for(let i = 0; i < cards.length; i++){
            cards[i].className ='card';
        }
    }
    updatemoveCount();
}

//check if the cards is already open
function isOpenMatch(card, type){
    for(let i = 0; i < card.classList.length; i++){
        if(card.classList[i] === type){
            return true;
        }
    }
    return false;
}

function reset(){

function createCards() {
    let arrayCards = [];
    document.querySelector('.moves').innerHTML = moveCount;    
    let deck = document.querySelector('.deck');
    let deckChildren = document.querySelector('.deck').getElementsByTagName('li');
    for (let i = 0; i < deckChildren.length; i++) {
        arrayCards.push(deckChildren[i]);
    }
    let newArrayCards = shuffle(arrayCards);
    deck.innerHTML = '';
    for (let i = 0; i < newArrayCards.length; i++) {
        deck.appendChild(newArrayCards[i]);
        displayCards(newArrayCards[i]);
    }
}
/*
    let arrayCards = [];
    //reset count
    document.querySelector('.moves').innerHTML = 0;
    moveCount = 0;
    totalcardsopened =0;
    //reset stars
    document.querySelector('.stars').innerHTML = '';
    
    //reset tune
    minutes = 0;
    seconds = 0;
    counttimer.innerHTML = "00:00";
    
    //reset cards
    let deck = document.querySelector('.deck');
    let deckChildren = document.querySelector('.deck').getElementsByTagName('li');
    for (let i = 0; i < deckChildren.length; i++) {
        arrayCards.push(deckChildren[i]);
    }
    let newArrayCards = shuffle(arrayCards);
    deck.innerHTML = '';
    for (let i = 0; i < newArrayCards.length; i++) {
        newArrayCards[i].className = 'card';
        openedcards.splice(0,openedcards.length);
        deck.appendChild(newArrayCards[i]);
    }
}


// final da funcao resert
function updatemoveCount(){
    //update count
    moveCount += 1;    
    document.querySelector('.moves').innerHTML = moveCount;
    
        console.log("ENTRO");
    //update stars    
    if(moveCount >=8){
        comprobaropenedcards(totalcardsopened, moveCount);
    }
    if (moveCount === 8 || moveCount === 14){
         list.removeChild(list.childNodes[0]);
         list.removeChild(list.childNodes[0]);
    }   
}


function comprobaropenedcards(openedcards, moves){
    if(openedcards === 16){
    setTimeout(function(){
        let time = document.getElementById("number").textContent;
        alert('Congratulations! You Won!' + "With " + moves + ' moves! \n\nYour time: ' + time + '\nYour rating is: ' + document.querySelectorAll('.stars>li').length);
        reset();
    }, 300);
    }
}


function createTime(secs, min){    
 if (secs > 59){
        minutes++;
        min++;
        seconds = 0;
        secs = 0;
    }
    if (min <10){
        min = '0' + min;   
    }   
    if (secs <10){
        secs = '0'+ secs;    
    }            
    counttimer.innerHTML = min +":"+ secs;
    seconds++;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
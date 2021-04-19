
document.addEventListener('DOMContentLoaded',createGameBoard);

const cardArray = [
    {
        name: "Anna",
        image: "images/Anna.jpg" },
    {
        name: "Anna",
        image: "images/Anna.jpg" },
    {
        name: "Ariel",
        image: "images/Ariel.jpg" },
    {
        name: "Ariel",
        image: "images/Ariel.jpg" },
    {
        name: "Aurora",
        image: "images/Aurora.jpg" },
    {
        name: "Aurora",
        image: "images/Aurora.jpg" },
    {
        name: "Belle",
        image: "images/Belle.jpg" },
    {
        name: "Belle",
        image: "images/Belle.jpg" },
    {
        name: "Cinderella",
        image: "images/Cinderella.jpg" },
    {
        name: "Cinderella",
        image: "images/Cinderella.jpg" },
    {
        name: "Elsa",
        image: "images/Elsa.jpg" },
    {
        name: "Elsa",
        image: "images/Elsa.jpg" },
    {
        name: "Jasmine",
        image: "images/Jasmine.jpg" },
    {
        name: "Jasmine",
        image: "images/Jasmine.jpg" },
    {
        name: "Merida",
        image: "images/Merida.jpg" },
    {
        name: "Merida",
        image: "images/Merida.jpg" },
    {
        name: "Mulan",
        image: "images/Mulan.jpg" },
    {
        name: "Mulan",
        image: "images/Mulan.jpg" },
    {
        name: "Pocahontas",
        image: "images/Pocahontas.jpg" },
    {
        name: "Pocahontas",
        image: "images/Pocahontas.jpg" },
    {
        name: "Rapunzel",
        image: "images/Rapunzel.jpg" },
    {
        name: "Rapunzel",
        image: "images/Rapunzel.jpg" },
    {
        name: "SnowWhite",
        image: "images/SnowWhite.jpg" },
    {
        name: "SnowWhite",
        image: "images/SnowWhite.jpg" }
];

function createGameBoard() {
    let gameboard = document.getElementById('gameBoard')

    let container = document.createElement('div');
    container.className = 'content';

    let name = document.createElement('text')
    name.setAttribute('type','text')

    for(let i=0;i <24; i++){ 
        let item = document.createElement('div');
        item.className = 'item';

        let card = document.createElement('img');
        card.setAttribute('src','images/card_back.jfif');
        card.setAttribute('id',i);
     
        card.addEventListener('click',flipCard); 

        item.appendChild(card);
        container.appendChild(item);
    }
    gameboard.appendChild(container);
    cardArray.sort(() => 0.5 - Math.random())


}

let cardChoosen = [] 
let cardChoosenId = []
let score = 0

function flipCard() {
    let cardId = this.getAttribute('id'); 
    this.setAttribute('src',cardArray[cardId].image);
    cardChoosen.push(cardArray[cardId]);
    cardChoosenId.push(cardId); 
    if(cardChoosen.length === 2){ 
        document.getElementById('gameConsole').textContent = "Checking...";
        setTimeout(checkForMatch,500); 
    }
}

function checkForMatch() { 
    const cards = document.querySelectorAll('img');

    let selectedCardOne = cardChoosenId[0];
    let selectedCardTwo = cardChoosenId[1];

    let consoleMessage = "";
    
    if(cardChoosen[0].name == cardChoosen[1].name){ 
        cards[selectedCardTwo].setAttribute('src','images/card_back.jfif');
        cards[selectedCardTwo].setAttribute('id','white');
        cards[selectedCardOne].setAttribute('src','images/card_back.jfif');
        cards[selectedCardOne].setAttribute('id','white');
        score = score + 1;
        consoleMessage = "Your found a match";
    }else{
        cards[selectedCardTwo].setAttribute('src','images/card_back.jfif');
        cards[selectedCardOne].setAttribute('src','images/card_back.jfif');
        consoleMessage = "Sorry, try again :(";
    }

    document.getElementById('gameScore').textContent = score;
    document.getElementById('gameConsole').textContent = consoleMessage;

    cardChoosen = [];
    cardChoosenId = [];

    if (score === cardArray.length / 2) { 
        document.getElementById('gameConsole').textContent = "Congratulations!!";
    }
}
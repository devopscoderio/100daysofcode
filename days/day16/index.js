// 2. Use getRandomCard() to set the values of firstCard and secondCard
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// 1. Create a new array - cards - that contains firstCard and secondCard
// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "player1",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = ""
let playerMessage = document.getElementById("message-el")

// 2. Store the sum paragraph in a variable called sumEl
// let sumEl = "Sum: " + sum
// let playerSum = document.getElementById("sum-el")
let playerSum = document.querySelector("#sum-el")
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el")

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.querySelector("#player-el")
// 4. Render the player's name and chips in playerEl
playerEl.textContent = "Player: " + player.name + " " + "Chips:$" + player.chips


// 1. Create a function, getRandomCard(), that always returns the number 5
// Make this function return a random number between 1 and 13

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    randomCard = Math.floor(Math.random() * 11) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 11) {
        return 10
    } else {
        return randomCard
    }
}


// Create a new function called startGame() that calls renderGame()
function startGame() {
    isAlive = true
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    // 2. Refer to the cards array when rendering out the cards
    // Create a for loop that renders out all the cards instead of just two
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    // cardsEl.textContent = "Cards: " + cards[0] + "," + cards[1]


    // 3. Render the sum on the page using this format -> "Sum: 14"
    playerSum.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        console.log("You're out of the game!")
        isAlive = false
        message = "You're out of the game!"
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    playerMessage.innerText = message
    console.log(message)
}


// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard() {

    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive === true && hasBlackJack === false) {
        let drawCard = getRandomCard()
        console.log("new card")
    // 1. Create a card variable, and hard code its value to a number (2-11)

    // 2. Add the new card to the sum variable
    sum += drawCard

    // Push the card to the cards array
    cards.push(drawCard)
    // 3. Call startGame()
    renderGame()
    }

}

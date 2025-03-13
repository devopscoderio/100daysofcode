// Challenge 1
// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// My code
// let count = 0
// function increment() {
//   console.log('Button Clicked')
//   count = count + 1
//   document.getElementById("count-el").innerText = count
// }


// // Scriba solution

// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0

// function increment() {
//     count += 1
//     countEl.innerText = count
// }


// // Create Save Button and Save functon


// function save() {

//   console.log(count)
// }


// Create the save element
// 1. Grab the save-el paragrah and store it in a variable called saveEl
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let countTotal = document.getElementById("total")
console.log(saveEL)

let count = 0
let total = 0



function increment() {
    count += 1
    countEl.innerText = count


}

// let start = count + " - "
// Create Save Button and Save functon


function save() {
  let start = count + " + "
  total += count; // Add the current count to the total
  countTotal.innerText = total; // Update the total display
  saveEL.textContent += start
  count = 0
  countEl.innerText = count
}

function decrease() {
  count -= 1
  countEl.innerText = count
}




let username = "per"
let message = "You have tree new notifications"
let messageToUser = username + "," + message
// Create a variable, message, that stores the string: "You have tree new notifications"

console.log(messageToUser)

let name = "DevOps Coder"
let greeting = "Hi, my name is "
let myGreeting = greeting + name
console.log(myGreeting)



console.log(4 + 5) // 9
console.log("2" + "4") // 24
console.log("5" + 1) // 51
console.log(100 + "100") // 100100


// Escape Characters - delimeters
let wish = "I'd love to see the show \"The Lion King\"."
console.log(wish)
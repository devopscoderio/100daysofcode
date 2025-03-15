// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = []

// let myLeads = `["www.awesomelead.com"]`
// 1. Turn the myLeads string into an array
// https://www.geeksforgeeks.org/how-to-convert-json-string-to-array-of-json-objects-using-javascript/?ref=ml_lbp
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string
// console.log(myLeads)
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.devopscoder.io")
// console.log(myLeads)
// console.log(typeof(myLeads))

// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)
// console.log(typeof(myLeads))



const inputEl = document.getElementById("input-el")

// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

let saveInput = document.getElementById("input-btn")

// 2. Grab the unordered list and store it in a const variable called ulEl

const ulEl = document.querySelector("#ul-el")

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

// localStorage.setItem("1","www.google.com")
// console.log(localStorage.getItem("1"))
// localStorage.clear()



// 1. Store the delete button in a deleteBtn variable

const deleteBtn = document.querySelector("#delete-btn")


// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable

const getLeads = localStorage.getItem("myLeads")
console.log(getLeads)


// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn")

// const tabs = [
//   {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console


tabBtn.addEventListener("click", function() {
// get the current tab from google chrome
// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   // since only one tab should be active and in the current window at once
//   // the return variable should only have one entry
//   // var activeTab = tabs[0];
//   // var activeTabId = activeTab.id; // or do whatever you need
// });

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    console.log(tabs)
    let tabUrl = tabs[0].url
  console.log(tabs[0].url)
  myLeads.push(tabUrl)
  myLeadsStringfy = JSON.stringify(myLeads)
  localStorage.setItem("myLeads",myLeadsStringfy)
  render(myLeads)
  })
  // Save the url instead of logging it out
  
})


// ["lead1", "lead2"] or null
const leadsFromLocalStorage = JSON.parse(getLeads)
console.log(leadsFromLocalStorage)
console.log(Boolean(leadsFromLocalStorage))

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM

deleteBtn.addEventListener("dblclick", function() {
  console.log("clicked")
  myLeads = []
  localStorage.clear()
  render(myLeads)
})

saveInput.addEventListener("click", function () {
  // Push the value "www.awesomelead.com" to myArray when the input button is clicked
  // Push the value from the inputEl into the myLeads array
  // instead of the hard-coded "www.awesomeleads.com" value
  // Google -> "get value from input field javascript"
  inputValue = inputEl.value


  
  // console.log("Button Clicked")
  // myLeads.push("www.awesomelead.com")
  // console.log(myLeads)
  // console.log(inputEl.value)
  myLeads.push(inputValue)
  console.log(myLeads)
  myLeadsStringfy = JSON.stringify(myLeads)
  localStorage.setItem("myLeads",myLeadsStringfy)

  console.log( localStorage.getItem("myLeads") )

  // 2. Call the renderLeads() function
  render(myLeads)
  inputEl.value = ''

})

// 1. Wrap the code below in a renderLeads() function
// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.
function render(leads) {

// Log out the items in the myLeads array using a for loop
// Render the leads in the unordered list using ulEl.textContent
// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = ""
for(let i = 0; i < leads.length; i++) {
  // ulEL.textContent += myLeads[i] = " "
  // 2. Add the item to the listItems variable instead of the ulEl.innerHTML

  // Wrap the lead in an anchor tag (<a>) inside the <li>
  // Can you make the link open in a new tab?
  // listItems += "<li>" + "<a href=" + myLeads[i] + " target=_blank>"  + myLeads[i] + "</a>" + "</li>" // my answer lol
  // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>" 
  // Refactor the code below to use a template string
  listItems += `
  <li>
      <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
      </a>
  </li>
`
  console.log(listItems)
  // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
  // create element
  // set text content
  // append to ul

  // another way
  // const li = document.createElement("li")
  // li.textContent = myLeads[i]
  // ulEl.append(li)

  }

  // 3. Render the listItems inside the unordered list using ulEl.innerHTML

  ulEl.innerHTML = listItems

}


// Anotehr way to render leads - optimsied coder

// function renderLead() {

//   // Log out the items in the myLeads array using a for loop
//   // Render the leads in the unordered list using ulEl.textContent
//   // 1. Create a variable, listItems, to hold all the HTML for the list items
//   // Assign it to an empty string to begin with
//   let listItem = "<li>" + inputEl.value + "</li>"

//     // 3. Render the listItems inside the unordered list using ulEl.innerHTML
//   console.log(listItem)
//     ulEl.innerHTML += listItem
//   }
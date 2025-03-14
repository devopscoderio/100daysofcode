// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


let somethingWrong = document.getElementById("error")
let itemError = "Something went wrong, please try again"
function myError() {
    console.log("here")
    somethingWrong.innerText = itemError
}
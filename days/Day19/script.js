const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]


let passwordOne = document.getElementById("pwdOne")
let passwordTwo = document.getElementById("pwdTwo")
let passwordThree = document.getElementById("pwdThree")
let passwordFour = document.getElementById("pwdFour")
let passwordFive = document.getElementById("pwdFive")
let passwordSix = document.getElementById("pwdSix")



function getRandomPassword() {
    password = characters
    const special = document.getElementById("special");
    if(special.checked) {
        // characters = characters.concat(symbols)
        console.log(password.concat(symbols))
        password = characters.concat(symbols)
        console.log(password)
    }
    console.log(special.checked)

    const select = document.getElementById("pwd-length");
    // return the index of the selected option
    console.log(select.selectedIndex); // 1

    // return the value of the selected option
    console.log(select.options[select.selectedIndex].value); // Second

        let generatedPassword = ""
        length = select.options[select.selectedIndex].value
        console.log("here", length)
        for(i = 0; i < length; i++){

        char = Math.floor(Math.random() * password.length)
        generatedPassword += password[char]
        }
        console.log(generatedPassword)
        return generatedPassword

};



function generatePassword() {
    passwordOne.innerText = getRandomPassword()
    passwordTwo.innerText = getRandomPassword()
    passwordThree.innerText = getRandomPassword()
    passwordFour.innerText = getRandomPassword()
    passwordFive.innerText = getRandomPassword()
    passwordSix.innerText = getRandomPassword()
}



// .innerHTML = getRandomPassword()

console.log(getRandomPassword())
console.log(getRandomPassword())
console.log(getRandomPassword())
console.log(getRandomPassword())
console.log(getRandomPassword())
console.log(getRandomPassword())

// getRandomPassword()


// function copy() {
//     let copyText = document.querySelector("#pwdOne");
//     copyText.select();
//     document.execCommand("copy");
//   }
  
//   document.querySelector("#copy").addEventListener("click", copy);
  

function copy(event) {
    console.log(event.target.id)
    id = event.target.id
    let copyText = document.getElementById(id).innerText;
    console.log(copyText)
    navigator.clipboard.writeText(copyText)
    if(copyText === ""){
           document.getElementById(id).innerText = "There's nothing to copy"

    } else {
   document.getElementById(id).innerText = "Copied to Clipboard"
    }
    
}
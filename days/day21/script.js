// First Event Listener Challenge
document.getElementById("box").addEventListener("click", function() {
    document.getElementById("event-output").innerText = "I want to open the box!";
});

// Function Parameters Challenge
function greetUser(greeting, name) {
    document.getElementById("greeting-output").innerText = `${greeting}, ${name} 👋`;
}

// String Conversion Challenge
function convertAndSum() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("sum-output").innerText = `Sum: ${num1 + num2}`;
}

// Writing Inner HTML Dynamically
function buyItem() {
    document.getElementById("container").innerHTML += "<p>Thank you for buying!</p>";
}

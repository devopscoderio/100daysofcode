// Function to convert input values to numbers and calculate sum
function convertAndCalculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    
    // Check if values are numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result-output").innerText = "Please enter valid numbers!";
    } else {
        document.getElementById("result-output").innerText = `Sum: ${num1 + num2}`;
    }
}

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputValue = document.getElementById("input-value")




const convertBtn = document.getElementById("convert-btn")
convertBtn.addEventListener("click", function () {
    console.log("click")
    let value = Number(inputValue.value);  // Ensure it's a number
    if (!isNaN(value) && value !== 0) {
        localStorage.setItem("lastQuery", value); // Store the last valid input
        renderMetrics(value);
    }
});


const feet = 3.2808
const liter = 0.264172
const kilogram = 2.204


meterToFeet = (inputValue * feet).toFixed(3)
feetToMeter = (inputValue / feet).toFixed(3)

literToGalons = (inputValue * liter).toFixed(3)
galonToLiter = ( inputValue / liter).toFixed(3)


kilogramToPounds = (inputValue * kilogram).toFixed(3)
poundsToKilogram = (inputValue / kilogram).toFixed(3)


// console.log(meterToFeet);
// console.log(feetToMeter)
// console.log(literToGalons)

// console.log(galonToLiter)
// console.log(kilogramToPounds)
// console.log(poundsToKilogram)


const metrics = [
    { unit: "Meters", type: "Length", conversions: [{ name: "Feet", value: 3.281, operation: "*" }, { name: "km", value: 0.001, operation: "*" }] },
    { unit: "Liters", type: "Volume", conversions: [{ name: "Gallon", value: 3.78541, operation: "/" }] },
    { unit: "Kilogram", type: "Mass", conversions: [{ name: "Pounds", value: 2.20462, operation: "*" }] }
];



const conversion = document.getElementById("conversions")
let conversionHtml = conversion.innerHTML


function renderMetrics (value) {
    let test = []
for(let i = 0; i < metrics.length; i++){
    let metric = metrics[i];
    let type = metrics[i].type
    let unit = metrics[i].unit

    // console.log(type)
    for(let a = 0; a < metric.conversions.length; a++){
        if(metric.conversions[a].operation === "*"){
            console.log("multiply, ",`${unit}/${metric.conversions[a].name}`)
                    // console.log(`${metric.unit} to ${metric.conversions[a].name}`)
        calcMultiply = (value * metric.conversions[a].value).toFixed(3)
        // console.log(value * metric.conversions[a].value)
        // console.log(`${metric.conversions[a].name} to ${metric.unit}`)
        // console.log(value / metric.conversions[a].value)
        calcDivide = (value / metric.conversions[a].value).toFixed(3)
        // console.log(`${value} ${unit} = ${calcMultiply} ${metric.conversions[a].name} | ${value} ${metric.conversions[a].name} = ${calcDivide} ${unit}`)
        } else {
            console.log("divide, ",`${unit}/${metric.conversions[a].name}`)
            calcDivide = (value * metric.conversions[a].value).toFixed(3)
            // console.log(value * metric.conversions[a].value)
            // console.log(`${metric.conversions[a].name} to ${metric.unit}`)
            // console.log(value / metric.conversions[a].value)
            calcMultiply = (value / metric.conversions[a].value).toFixed(3)
        }

        test += `
           <div id="conversion">
        <h2>${type} (${unit}/${metric.conversions[a].name})</h2>
        <p>${value} ${unit} = ${calcMultiply} ${metric.conversions[a].name} | ${value} ${metric.conversions[a].name} = ${calcDivide} ${unit}</p>
              </div>
        `
        // localStorage.setItem("lastQuery",inputValue.value)
        // console.log(conversionHtml)
    }

    conversionHtml += `<h2>${type} (${unit})</h2>`

}
conversion.innerHTML = test
}


// console.log("value",inputValue.value)

if (localStorage.getItem("lastQuery")){
    renderMetrics(localStorage.getItem("lastQuery"))
    console.log("loaded")
    inputValue.value = localStorage.getItem("lastQuery")

} else {
    renderMetrics(0)
}


// Nice to have. Local storage logic that will load your last metric query.



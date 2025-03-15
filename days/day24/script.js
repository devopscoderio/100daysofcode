// Before Refactoring
let counterOld = 0;

function increaseFive() {
    counterOld += 5;
    document.getElementById("counter-old").innerText = counterOld;
}

function increaseTen() {
    counterOld += 10;
    document.getElementById("counter-old").innerText = counterOld;
}

function resetCounter() {
    counterOld = 0;
    document.getElementById("counter-old").innerText = counterOld;
}

// After Refactoring
let counterNew = 0;

function updateCounter(amount, reset = false) {
    if (reset) {
        counterNew = 0;
    } else {
        counterNew += amount;
    }
    document.getElementById("counter-new").innerText = counterNew;
}

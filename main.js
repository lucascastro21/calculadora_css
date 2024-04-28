let displayValue = '';

function addToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}



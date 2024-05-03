function clearDisplay() {
    document.getElementById("display").value = ""; 
}

function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1); 
}

function appendOperator(op) {
    document.getElementById("display").value += op; 
}

function appendDigit(digit) {
    document.getElementById("display").value += digit;
}

function calculate() {
    try {
        let expression = document.getElementById("display").value;
        let result = eval(expression);
        document.getElementById("display").value = result; 
    } catch (error) {
        confirm("hesablama qaydasi duzgun deyil");
    }
}

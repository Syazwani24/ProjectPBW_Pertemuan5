function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function calculate() {
    var expression = document.getElementById('screen').value;
    try {
        var result = eval(expression);
        document.getElementById('screen').value = result;
    } catch (error) {
        alert('Invalid expression!');
        clearScreen();
    }
}

let stack = [];
const display = document.getElementById('display');
const stackList = document.getElementById('stack-list');

// Append value to the display
function appendValue(value) {
    display.value += value;
}

// Push the current value to the stack
function pushStack() {
    if (display.value.trim() !== "") {
        stack.push(display.value);
        updateStackList();
        display.value = '';
    } else {
        alert("Enter a value to push.");
    }
}

// Pop the top value from the stack
function popStack() {
    if (stack.length > 0) {
        const poppedValue = stack.pop();
        updateStackList();
        display.value = poppedValue;
    } else {
        alert("The stack is empty!");
    }
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Perform the calculation using eval
function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (e) {
        alert("Invalid Expression");
    }
}

// Update the stack list in the UI
function updateStackList() {
    stackList.innerHTML = stack.map(item => `<li>${item}</li>`).join('');
}

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            // Clear everything
            currentInput = '';
            operator = '';
            previousInput = '';
            display.textContent = '';
        } else if (value === '=') {
            // Calculate result
            if (currentInput && previousInput && operator) {
                let result;
                const prev = parseFloat(previousInput);
                const curr = parseFloat(currentInput);

                switch (operator) {
                    case '+':
                        result = prev + curr;
                        break;
                    case '-':
                        result = prev - curr;
                        break;
                    case '*':
                        result = prev * curr;
                        break;
                    case '/':
                        result = prev / curr;
                        break;
                }

                display.textContent = result;
                currentInput = '';
                previousInput = result.toString();
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Set operator
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            // Update current input
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

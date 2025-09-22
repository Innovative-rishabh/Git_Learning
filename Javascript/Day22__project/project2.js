const Button = document.querySelector('button');

Button.addEventListener('click', () => {
    // read the data in given 2 fields
    const input1 = document.getElementById('first');
    const number1 = Number(input1.value);

    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);

    // display the result
    const result = number1 + number2;
    const re = document.getElementById('result');
    re.textContent = "Result: " + result;
});

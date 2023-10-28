function calculateFactorial() {
    let input = document.getElementById('input');

    if (!isNaN(input.value) && input.value >= 0) {
        let result = 1;
        for (let i = 2; i <= input.value; i++) {
            result *= i;
        }

        alert("Factorial of " + input.value + " is: " + result);
    } else {
        alert("Please enter a valid non-negative number.");
    }
}